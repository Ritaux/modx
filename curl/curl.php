<?PHP
function print_arr($array)
{
	echo "<pre>" . print_r($array, true) . "</pre>";
}
$url = "http://yaposhka64.ru/curl/test.php";
$post_data = array (
	'val' => 'pVq4THZE7i2NUvE9q4aGaFu2C7qz',
	'name' => 'Вася Сидоркин',
	'email' => 'vasya@vasya.ru',
	'adress' => 'Кремль',
	'phone' => '+799912345678',
	'point' => '1',
	'message' => 'Всем привет',
	'items0' => array('Сяке темпура', '1 шт.', 170 ),
	'items1' => array('Набор', '1 шт.', 70 ),
	'items2' => array('Самурай', '3 шт.', 999 )
);

foreach($post_data as $key => $codeString) {
	$findme   = 'items';
	$pos = strpos($key, $findme);
	 if ($pos !== false) {
	 	$post_data[$key] = serialize($post_data[$key]);
	 }
}

$connection = curl_init();
curl_setopt($connection, CURLOPT_URL, $url);
curl_setopt($connection, CURLOPT_POST, 1);
curl_setopt($connection, CURLOPT_POSTFIELDS, $post_data);

curl_setopt($connection, CURLOPT_RETURNTRANSFER, 1);

$rezult=curl_exec($connection);

curl_close($connection);

echo $rezult ;
?>