<?php

class iShopManager {

    var $modx;
    var $session;
    var $request;
    var $cfg;
    var $tpl;
    var $data;
    
    function iShopManager() {
        global $modx;
        $this->modx = &$modx;
        $this->request = &$_REQUEST;
    }
    
    function index() {
        $userinfo = $this->modx->getUserInfo($this->modx->getLoginUserID());
        
        $ph = array(
            'modx.managertheme' => $this->config['managertheme'],
            'module.title' => 'Управление заказами',
            'module.path' => '/assets/modules/ishopmanager/',
            'module.url' => $this->config['base_url'],
            'module.ajaxorderlist.url' => $this->config['base_url'].'&page='.$this->request['page'].'&ordertable=1',
            'module.orders.refreshtime' => $this->config['orders_refresh_time'],
            'module.checkorders.refreshtime' => $this->config['checkorders_refresh_time'],
            'refresh.url' => $_SERVER["REQUEST_URI"],
            'module.page' => $this->request['page'],
            'template.path' => $this->config['tpl_path'],
            'module.alert' => '',
            'button.export' => ($userinfo['role'] == 1) ? $this->tpl['button']['export'] : '', 
            'panel.bar.change' => $this->panelBarChange(),
            'panel.limit.change' => $this->panelLimitChange(),
            'panel.pagination' => $this->panelPagination(),
            'bar.orders' => $this->viewOrdersTable($this->session['bar']),
            'bar.name' => $this->getBar($this->session['bar']),
            'session.new.order' => $this->session['message']['neworder'],
        );
        
        // Ajax load orders table only:
        if ($this->request['ordertable']) {
            return $this->viewOrdersTable($this->session['bar']);   
        }
        
        // Ajax Check new orders and play ring:
        if ($this->request['checknew']) {
            $out = '';
            if ($this->checkNewOrders()) {
                $out = $this->message('neworder');    
            } 
            return $out;   
        }
        
        // Export DB -> CSV:
        if ($this->request['export']) {
            return $this->export();   
        }
        
        // Actions:
        if ($this->request['action']) {
            switch($this->request['action']) {
                case 'view':
                    if ($this->request['status']) {    
                        $this->setStatus($this->request['order'],$this->request['status']);              
                    }
                    return $this->viewOrder($this->request['order']);        
                break;
            }    
        }

        return $this->replace($ph,$this->tpl['index']);
    }
    
    function message($name) {
        $this->session['message'][$name] = '1';
        switch($name) {
            case 'neworder': 
                $ph = array(
                    'file' => $this->config['soundfile'],
                    'template.path' => $this->config['tpl_path'],
                );
                return $this->replace($ph,$this->tpl['sound']);  
            break;    
        }     
    }
    
    
    function viewOrdersTable() {
        $i=0;
        $getOrders = $this->getOrders($this->session['bar']);
        if (!empty($getOrders)) {
            foreach ($getOrders as $order) {
                $state = $this->getStatus($order['status']); // array(new => text)
                $order['point'] = $this->getBar($order['point']); 
                $order['createdon'] = date('d.m.y [H:i:s]',$order['createdon']);
                $order['order.view.url'] = $this->config['base_url'].'&action=view&order='.$order['id'];
                $order['rowclass'] = $state[0];
                $row .= $this->replace($order,$this->tpl['order']['row']);
                $i++;   
            }
            return $this->replace(array('items'=>$row),$this->tpl['order']['table']);    
        } else {
            return 'Нет заказов';
        }                  
    }
    
    function viewOrder($id) {
        $order = $this->getOrder($id);
        if (!empty($order)) {
            $order['date'] = date('d.m.y',$order['createdon']);
            $order['time'] = date('H:i',$order['createdon']);
            $order['state.select'] = $this->statusChange($order['status']);
            $order['action.url'] = $_SERVER["REQUEST_URI"];
            return $this->replace($order,$this->tpl['order']['item']);    
        } else {
            return false;
        }         
    }
 
    function getOrders() {
        $p = ($this->request['page'] >= '0') ? $this->request['page'] : 0;
        $limit = ($p * $this->session['limit']).','.$this->session['limit'];
  
        $result = $this->modx->db->select(
            "*", 
            $this->config['tbl_ishop_order'], 
            'point='.$this->modx->db->escape($this->session['bar']), 
            $this->session['sortBy'].' '.$this->session['sortDir'], 
            $limit
        );
        if ($this->modx->db->getRecordCount($result)) {
            while($row = $this->modx->db->getRow($result)) {
        		$data[] = $row;
        	}
            return $data;
        } else {
            return array();
        }       
    }

    function getOrder($id) {         
        $sql = 'SELECT * FROM '.$this->config['tbl_ishop_order'].' WHERE id='.$id.' LIMIT 1';
  		$result = $this->modx->db->query($sql);
        
        if ($this->modx->db->getRecordCount($result)) {
            return $row = $this->modx->db->getRow($result);
        } else {
            return false;
        }
        return false;
    }
    
    function del() {
        if ($this->request['cid'] >= 1) {
            $this->setStatus($this->request['cid'], 'delete');   
        }        
        return false;    
    }
    
    function panelBarChange() {
        $out = '<select name="bar" class="bar-change">';
        $selected = '';
        foreach ($this->data['bar'] as $id => $name) {
            $selected = ($this->session['bar'] == $id) ? 'selected="selected"' : '';
            $out .= '<option value="'.$id.'" '.$selected.'>'.$name.'</option>';        
        }
        $out .= '</select>';
        return $out;
    }
    
    function panelLimitChange() {
        $out = '<select name="limit" class="items-limit">';
        $selected = '';
        foreach ($this->data['limit'] as $value) {
            $selected = ($this->session['limit'] == $value) ? 'selected="selected"' : '';
            $out .= '<option value="'.$value.'" '.$selected.'>'.$value.'</option>';        
        }
        $out .= '</select>';
        return $out;
    }
    
    function panelPagination() {  
        $result = $this->modx->db->select("id", $this->config['tbl_ishop_order'], 'point='.$this->modx->db->escape($this->session['bar']));    
        if ($this->modx->db->getRecordCount($result)) {
            while($row = $this->modx->db->getRow($result)) {
        		$data[] = $row;
        	}
        }
        $currenturl = $_SERVER['REQUEST_URI'];   
        $countpages = count($data) / $this->session['limit'];
        if ($this->request['page'] > 0) {
            $prevpage = '<a href="'.$currenturl.'&page='.($this->request['page'] - 1).'">назад</a>';    
        }
        if ($this->request['page'] < $countpages-1) {
            $nextpage = '<a href="'.$currenturl.'&page='.($this->request['page'] + 1).'">вперед</a>';    
        }
        
        $out = '<div class="pagination">
                <span class="prev">'.$prevpage.'</span>
                    <span class="pages">';
        
        for ($i=0; $i<=$countpages; $i++) {
            $css = ($this->request['page'] == $i) ? 'active' : '';
            $out .= '<a href="'.$currenturl.'&page='.$i.'" class="'.$css.'">'.($i+1).'</a>';    
        }
        $out .= '    </span>
                <span class="next">'.$nextpage.'</span>
            </div>';
        return $out;
    }
        
    function statusChange($status) {
        $out = '<select class="status-change" name="status">';
        $selected = '';
        foreach ($this->data['status'] as $id => $value) {
            $selected = ($status == $id) ? 'selected="selected"' : '';
            $out .= '<option value="'.$id.'" '.$selected.'>'.$value.'</option>';        
        }
        $out .= '</select>';
        return $out;
    }
    
    function getBar($id) { 
        if ($id) {
            return $this->data['bar'][$id];        
        }
        return false;
    }
    
    function getStatus($stateID) { 
        $status = array(
            '1' => array('new','Новый'),
            '2' => array('sell','Обработан'),
        );
        return $status[$stateID]; 
    }
    
    function setStatus($id, $status) {
    	if (!empty($id)) {
			$sql = 'UPDATE '.$this->config['tbl_ishop_order'].' SET status="'.$status.'" WHERE id='.$id;
			return $this->modx->db->query($sql);
    	}
    }

    function checkNewOrders() {
        $getOrders = $this->getOrders($this->session['bar']);
        if (!empty($getOrders)) {
            foreach ($getOrders as $order) {
                if ($order['status'] == '1') {
                    return true;
                }              
            }    
        }
        return false;    
    }

    function export() {
        $file = $this->config['export_dir'] . 'export_'.date('d-m-Y').'.csv';
        $fp = fopen($file,"w");
        
        $result = $this->modx->db->select(
            'id,name,phone', 
            $this->config['tbl_ishop_order'], 
            'phone!=""', 
            'id ASC' 
        );
        if ($this->modx->db->getRecordCount($result)) {
            while($row = $this->modx->db->getRow($result)) {
                $phone = $this->getStandartPhonenum($row['phone']);
                if ($phone) { 
                    $row['name'] = iconv("UTF-8", "WINDOWS-1251",  $row['name']);
                    $row['phone'] = iconv("UTF-8", "WINDOWS-1251",  $phone);
                    $row['id'] = iconv("UTF-8", "WINDOWS-1251",  $row['id']);
                    fputcsv($fp, $row, $delimiter = ';', $enclosure = '"');
                }
                
        	} 
            fclose($fp); // закрываем файл  
        }       
        return $file;
    }

    function getStandartPhonenum($num) {
        $replace = array('-',' ','(',')');
        if ($num != '') {
            $num = trim($num);
            $num = str_replace($replace,'',$num);
            $num = str_replace('+7','8',$num);
            $num = preg_replace('#^.{1}#i', '8', $num);
            if (strlen($num) < 11) $num = '8'.$num;
            if (strlen($num) <= 9) return false;
            return $num;    
        }
        return false;    
    }

    function replace( $placeholders, $tpl ) {
		$keys = array();
		$values = array();
		foreach ($placeholders as $key=>$value) {
			$keys[] = '[+'.$key.'+]';
			$values[] = $value;
		}
		return str_replace($keys,$values,$tpl);
	}   


}
?>