<?php
	$groun_unconfirmed=7;
	$groun_confirmed=17;
	$sq='select `id` from '.$modx->getFullTableName('web_user_attributes').' where `email`=\''.$_GET['email'].'\' and `proverka`=\''.$_GET['kod'].'\'';
	$result =mysql_query($sq);
	if($result){
		$row=mysql_fetch_array($result);
		$id=$row['id'];
		if($id){
			$sq='delete from '.$modx->getFullTableName('web_groups').' where `webgroup`='.$groun_unconfirmed.' and `webuser`='.$id;
			mysql_query($sq);
			$sq='select * from '.$modx->getFullTableName('web_groups').' where `webgroup`='.$groun_confirmed.' and `webuser`='.$id;
			$result_groug=mysql_query($sq);
			if(mysql_num_rows($result_groug)==0){
				$sq="insert into ".$modx->getFullTableName('web_groups')."(
					`webgroup`,
					`webuser`
					)
					value(
					'".$groun_confirmed."',
					'".$id."'
					)";
				mysql_query($sq);
				echo '<div class="message ok">Ваш эмейл подтвержден, теперь Вы можете оставлять отзывы.</div>';
			} else echo '<div class="message ok">Вы уже подтверждали Ваш емейл ранее</div>';
		}else echo '<div class="message error">Неверная ссылка, возможно пользователь удален</div>';
	}
?>