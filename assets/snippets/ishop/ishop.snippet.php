<?php
function iShopInsertOrder(&$fields) {
	global $modx;
	$table_order = $modx->getFullTableName('ishop_order');
	if ($fields) {
		if($fields['paymetod']==2)$fields['orderitems']=$fields['orderitems'].'<div style="margin:10px 0;padding:10px;text-align:center;backround:#ccc;border:1px solid #000;">Безналичная оплата (Робокасса)</div>';
		$data = array(
			'name' => $modx->db->escape($fields['name']),
			'email' => $modx->db->escape($fields['email']),
			'adress' => $modx->db->escape($fields['adress']),
			'phone' => $modx->db->escape($fields['phone']),
			'point' => $modx->db->escape($fields['point']),
			'message' => $modx->db->escape($fields['message']),
			'items' => $modx->db->escape($fields['orderitems']),
			'createdon' => time(),
			'status' => 1,
		);
		if($fields['paymetod']==3)$fields['orderitems']=$fields['orderitems'].'<div style="margin:10px 0;padding:10px;text-align:center;backround:#ccc;border:1px solid #000;">Безналичная оплата (Сбербанк)</div>';
		$data = array(
			'name' => $modx->db->escape($fields['name']),
			'email' => $modx->db->escape($fields['email']),
			'adress' => $modx->db->escape($fields['adress']),
			'phone' => $modx->db->escape($fields['phone']),
			'point' => $modx->db->escape($fields['point']),
			'message' => $modx->db->escape($fields['message']),
			'items' => $modx->db->escape($fields['orderitems']),
			'createdon' => time(),
			'status' => 1,
		);
		if ($modx->db->insert($data,$table_order));
		return true;
	}
	return false;
}
?>