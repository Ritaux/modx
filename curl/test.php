<?php
require_once($_SERVER['DOCUMENT_ROOT'].'/manager/includes/protect.inc.php');
define('MODX_API_MODE', true);
require_once($_SERVER['DOCUMENT_ROOT'].'/manager/includes/document.parser.class.inc.php');
require $_SERVER['DOCUMENT_ROOT'].'/index.php';
$modx->getService('error','error.modError');
$modx->setLogTarget(XPDO_CLI_MODE ? 'ECHO' : 'HTML');
function print_arr($array)
{
	echo "<pre>" . print_r($array, true) . "</pre>";
}
 print_arr($_POST);
$table_order = $modx->getFullTableName('ishop_order');	
if ( isset($_POST['val']) AND ( $_POST['val'] == 'pVq4THZE7i2NUvE9q4aGaFu2C7qz')){
	$price = 0;
	$post_data = $_POST;
	//array_pop($post_data);
	$order = '<table border="0" cellpadding="2" cellspacing="0" width="60%" align="center"><tbody><tr><td  style="text-align: center; background-color: rgb(204, 204, 204); color: white; font-weight: bold; width: 283px;">Наименование</td><td style="background-color: rgb(204, 204, 204); text-align: center; color: white; font-weight: bold; width: 74px;">Кол-во</td><td style="background-color: rgb(204, 204, 204); text-align: center; color: white; font-weight: bold; width: 86px;">Цена</td></tr>';
	foreach($post_data as $key => $codeString) {
		$findme   = 'items';
		$pos = strpos($key, $findme);
		if ($pos !== false) {
			$post_data[$key] = unserialize($post_data[$key]);
			$order .= "<tr><td>{$post_data[$key][0]}</td><td>{$post_data[$key][1]}</td><td>{$post_data[$key][2]} руб.</td></tr>";
		}
		$price += $post_data[$key][2];
	}
	$order .= '</tbody></table><br />Общая сумма: <span style="font-weight:bold;text-decoration: underline;">'.$price.'</span> р.';
	// print_arr($post_data);

	$table_order = $modx->getFullTableName('ishop_order');
	$data = array(
		'name' => $modx->db->escape($post_data['name']),
		'email' => $modx->db->escape($post_data['email']),
		'adress' => $modx->db->escape($post_data['adress']),
		'phone' => $modx->db->escape($post_data['phone']),
		'point' => $modx->db->escape($post_data['point']),
		'message' => $modx->db->escape($post_data['message']),
		'items' => $modx->db->escape($order),
		'createdon' => time(),
		'status' => 1,
		);
	if ($modx->db->insert($data,$table_order)){
			$to = "mail2@example.com"; 
			$subject = "Заголовок письма"; 
			$message = implode('-', $data);;
			$headers  = "Content-type: text/html; charset=windows-1251 \r\n"; 
			$headers .= "From: От кого письмо <from@example.com>\r\n"; 
			$headers .= "Reply-To: reply-to@example.com\r\n"; 
			mail($to, $subject, $message, $headers); 
			//mail("joecool@example.com", "My Subject", "Line 1\nLine 2\nLine 3");
			return true;
		}
}

?>
