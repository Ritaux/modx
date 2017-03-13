<?php
if(!$modx) die("<h1>Forbidden!</h1>");

include_once($modx->config['base_path'].'assets/modules/ishopmanager/classes/ishop.manager.class.php');
$is = new iShopManager;

// Configuration:
$is->config['managertheme'] = 'MODxRE';
$is->config['tbl_ishop_order'] = $is->modx->getFullTableName('ishop_order');
$is->config['module_path'] = 'assets/modules/ishopmanager/';
$is->config['tpl_dir'] = $is->modx->config['base_path'] . 'assets/modules/ishopmanager/template/';
$is->config['tpl_path'] = 'assets/modules/ishopmanager/template/';
$is->config['base_url'] = '/manager/index.php?a=112&id='.$_GET['id'];
$is->config['new'] = 1800;
$is->config['orders_refresh_time'] = '30000';
$is->config['checkorders_refresh_time'] = '30000';
$is->config['soundfile'] = $is->config['module_path'].'sound/ring-2.mp3';
$is->config['export_dir'] = $is->modx->config['base_path'].$is->config['module_path'].'export/';

// -- Sortir
$is->config['defSortBy'] = 'createdon'; 
$is->config['defSortDir'] = 'DESC';
$is->config['defLimit'] = 50;
$is->config['defBar'] = 1;

// Templates:
$is->tpl['index'] = file_get_contents($is->config['tpl_dir'] . 'index.tpl');
$is->tpl['order']['row'] = file_get_contents($is->config['tpl_dir'] . 'listitem.tpl');
$is->tpl['order']['table'] = file_get_contents($is->config['tpl_dir'] . 'view_order_table.tpl');
$is->tpl['order']['item'] = file_get_contents($is->config['tpl_dir'] . 'view_order.tpl');
$is->tpl['sound'] = file_get_contents($is->config['tpl_dir'] . 'sound.tpl');
$is->tpl['button']['export'] = '<li id="export"><a href="javascript:;"><img src="media/style/'.$is->config['managertheme'].'/images/icons/cal.gif" /> Экспорт</a></li>';

// Data:
$is->data['bar'] = array(
    '1' => 'ул. Волоха, 5',
	'2' => 'пр-т. Строителей 15 (район "Кребора")',
	'3' => '148 Черниговская дивизия, д.25',
	'4' => 'пр-т Химиков, 1',
);
$is->data['limit'] = array(
    '50' => '50',
    '150' => '150',
    '300' => '300',
);
$is->data['status'] = array(
    1 => 'Новый',
    2 => 'Обработан',
);

// Process:
$_SESSION['ishop'] = ($_SESSION['ishop']) ? $_SESSION['ishop'] : array();
$is->session = &$_SESSION['ishop'];
  
if (!$is->session['bar']) {
    $is->session['bar'] = $is->config['defBar'];     
} else {
    if ($is->request['bar']) {
        $is->session['bar'] = $is->request['bar'];   
    }
}

if (!$is->session['limit']) {
    $is->session['limit'] = $is->config['defLimit'];    
} else {
    if ($is->request['limit']) {
        $is->session['limit'] = $is->request['limit'];   
    }
}

if (!$is->session['sortBy']) {
    $is->session['sortBy'] = $is->config['defSortBy'];    
} else {
    if ($is->request['sortBy']) {
        $is->session['sortBy'] = $is->request['sortBy'];   
    }
}

if (!$is->session['sortDir']) {
    $is->session['sortDir'] = $is->config['defSortDir'];    
} else {
    if ($is->request['sortDir']) {
        $is->session['sortDir'] = $is->request['sortDir'];   
    }
}
      
//unset($is->session);
echo $is->index();


?>