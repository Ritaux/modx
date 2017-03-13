<?php
require_once "SendMailSmtpClass.php";

function mail_send_html_from($to, $from, $subject, $message){//отправляем ємейл
	$headers = 'From: '. $from . "\r\n" .
		'Reply-To: '. $from . "\r\n" .
		'Content-type: text/html; charset="windows-1251" \r\n'.
		'Content-Transfer-Encoding: quoted-printable \r\n'.
		'X-Mailer: PHP/' . phpversion();
	$message='<html><head><title>'.$subject.
		'</title></head><body>'.$message.'</body></html>';
	//$to=iconv('cp1251','utf-8', $to);
	//$from=iconv('cp1251','utf-8', $from);
	//$subject=iconv('UTF-8','cp1251', $subject);
	$message=iconv('UTF-8','cp1251', $message);
	$subject='=?utf-8?B?'.base64_encode($subject).'?=';
	//$message=iconv('cp1251','utf-8', $message);
	//$message=iconv('utf-8','cp1251',$message);
	return @mail("$to", "$subject", $message, $headers);
}

$config['smtp_username'] = 'yaposhka.mail@yandex.ru';  //Смените на адрес своего почтового ящика.
$config['smtp_port'] = '465'; // Порт работы.
$config['smtp_host'] =  'ssl://smtp.yandex.ru';  //сервер для отправки почты
$config['smtp_password'] = '12345qwerty';  //Измените пароль
$config['smtp_debug'] = true;  //Если Вы хотите видеть сообщения ошибок, укажите true вместо false
$config['smtp_charset'] = 'utf-8';	//кодировка сообщений. (windows-1251 или utf-8, итд)
$config['smtp_from'] = 'Суши-бар Япошка'; //Ваше имя - или имя Вашего сайта. Будет показывать при прочтении в поле "От кого"
	
function smtpmail($to='', $mail_to, $subject, $message, $headers='',$config) {
	$SEND =	"Date: ".date("D, d M Y H:i:s") . " UT\r\n";
	$SEND .= 'Subject: =?'.$config['smtp_charset'].'?B?'.base64_encode($subject)."=?=\r\n";
	if ($headers) $SEND .= $headers."\r\n\r\n";
	else
	{
			$SEND .= "Reply-To: ".$config['smtp_username']."\r\n";
			$SEND .= "To: \"=?".$config['smtp_charset']."?B?".base64_encode($to)."=?=\" <$mail_to>\r\n";
			$SEND .= "MIME-Version: 1.0\r\n";
			$SEND .= "Content-Type: text/html; charset=\"".$config['smtp_charset']."\"\r\n";
			$SEND .= "Content-Transfer-Encoding: 8bit\r\n";
			$SEND .= "From: \"=?".$config['smtp_charset']."?B?".base64_encode($config['smtp_from'])."=?=\" <".$config['smtp_username'].">\r\n";
			$SEND .= "X-Priority: 3\r\n\r\n";
	}
	$SEND .=  $message."\r\n";
	 if( !$socket = fsockopen($config['smtp_host'], $config['smtp_port'], $errno, $errstr, 30) ) {
		if ($config['smtp_debug']) echo $errno."<br>".$errstr;
		return false;
	 }
 
	if (!server_parse($socket, "220", __LINE__,$config)) return false;
 
	fputs($socket, "HELO " . $config['smtp_host'] . "\r\n");
	if (!server_parse($socket, "250", __LINE__,$config)) {
		if ($config['smtp_debug']) echo '<p>Не могу отправить HELO!</p>';
		fclose($socket);
		return false;
	}
	fputs($socket, "AUTH LOGIN\r\n");
	if (!server_parse($socket, "334", __LINE__,$config)) {
		if ($config['smtp_debug']) echo '<p>Не могу найти ответ на запрос авторизаци.</p>';
		fclose($socket);
		return false;
	}
	fputs($socket, base64_encode($config['smtp_username']) . "\r\n");
	if (!server_parse($socket, "334", __LINE__,$config)) {
		if ($config['smtp_debug']) echo '<p>Логин авторизации не был принят сервером!</p>';
		fclose($socket);
		return false;
	}
	fputs($socket, base64_encode($config['smtp_password']) . "\r\n");
	if (!server_parse($socket, "235", __LINE__,$config)) {
		if ($config['smtp_debug']) echo '<p>Пароль не был принят сервером как верный! Ошибка авторизации!</p>';
		fclose($socket);
		return false;
	}
	fputs($socket, "MAIL FROM: <".$config['smtp_username'].">\r\n");
	if (!server_parse($socket, "250", __LINE__,$config)) {
		if ($config['smtp_debug']) echo '<p>Не могу отправить комманду MAIL FROM: </p>';
		fclose($socket);
		return false;
	}
	fputs($socket, "RCPT TO: <" . $mail_to . ">\r\n");
 
	if (!server_parse($socket, "250", __LINE__,$config)) {
		if ($config['smtp_debug']) echo '<p>Не могу отправить комманду RCPT TO: </p>';
		fclose($socket);
		return false;
	}
	fputs($socket, "DATA\r\n");
 
	if (!server_parse($socket, "354", __LINE__,$config)) {
		if ($config['smtp_debug']) echo '<p>Не могу отправить комманду DATA</p>';
		fclose($socket);
		return false;
	}
	fputs($socket, $SEND."\r\n.\r\n");
 
	if (!server_parse($socket, "250", __LINE__,$config)) {
		if ($config['smtp_debug']) echo '<p>Не смог отправить тело письма. Письмо не было отправленно!</p>';
		fclose($socket);
		return false;
	}
	fputs($socket, "QUIT\r\n");
	fclose($socket);
	return TRUE;
}
 
function server_parse($socket, $response, $line = __LINE__,$config) {
	while (@substr($server_response, 3, 1) != ' ') {
		if (!($server_response = fgets($socket, 256))) {
			if ($config['smtp_debug']) echo "<p>Проблемы с отправкой почты!</p>$response<br>$line<br>";
 			return false;
 		}
	}
	if (!(substr($server_response, 0, 3) == $response)) {
		if ($config['smtp_debug']) echo "<p>Проблемы с отправкой почты!</p>$response<br>$line<br>";
		return false;
	}
	return true;
}

function smtp_ssl_send($to,$subject,$message){
	$mailSMTP = new SendMailSmtpClass('yaposhka-info@yandex.ru', '1qaZ2wsX3edCyap', 'ssl://smtp.yandex.ru', 'info', 465);
	// заголовок письма
	$headers= "MIME-Version: 1.0\r\n";
	$headers .= "Content-type: text/html; charset=utf-8\r\n"; // кодировка письма
	$headers .= "From: info <yaposhka-info@yandex.ru>\r\n"; // от кого письмо
	$headers .= "To: ".$to."\r\n";
	$result =  $mailSMTP->send($to,$subject,$message, $headers); // отправляем письмо
	// $result =  $mailSMTP->send('Кому письмо', 'Тема письма', 'Текст письма', 'Заголовки письма');
	if($result === true){
			echo "Письмо успешно отправлено";
	}else{
			echo "Письмо не отправлено. Ошибка: " . $result;
	}
	return 1;
}
?>