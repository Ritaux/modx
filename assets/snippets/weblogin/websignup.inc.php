<?php
/**
* WebSignup 1.0
* Created By Raymond Irving April, 2005
*
* Modified by jen March, 2011 <http://jenweb.info>
* - added gender field;
* - more efficient captha implemented:
*   freeCap v1.4.1. Copyright 2005 Howard Yeend <www.puremango.co.uk>
* - Ну и перевел на русский :)
* - Как с умом распорядиться полем zip code (почтовый индекс) придумайте сами.
*/
require_once('mail.php');

defined('IN_PARSER_MODE') or die();

// load tpl
if (is_numeric($tpl)) $tpl = ($doc=$modx->getDocuments($tpl)) ? $doc['content']:"Document '$tpl' not found.";
else if ($tpl) $tpl = ($chunk=$modx->getChunk($tpl)) ? $chunk:"Chunk '$tpl' not found.";
if (!$tpl) $tpl = getWebSignuptpl($useCaptcha);

if ($useCaptcha) $modx->regClientStartupScript('
<script type="text/javascript">
// freeCap v1.4.1. Copyright 2005 Howard Yeend <www.puremango.co.uk>
function new_freecap()
{
	// loads new freeCap image
	if(document.getElementById)
	{
		// extract image name from image source (i.e. cut off ?randomness)
		thesrc = document.getElementById("freecap").src;
		thesrc = thesrc.substring(0,thesrc.lastIndexOf(".")+4);
		// add ?(random) to prevent browser/isp caching
		document.getElementById("freecap").src = thesrc+"?"+Math.round(Math.random()*100000);
	} else {
		alert("Sorry, cannot autoreload freeCap image\nSubmit the form and a new freeCap will be loaded");
	}
}
</script>
');

// extract declarations
$declare = webLoginExtractDeclarations($tpl);
$tpls = explode((isset($declare["separator"]) ? $declare["separator"]:"<!--tpl_separator-->"),$tpl);

// added by jen - path to $language_country file
$clPath = $modx->config['base_path']."manager/includes/lang/country/";
if (isset($language)) 
// language variables for modx placeholders
	include_once $clPath.$language."_country.inc.php";
else
	include_once $clPath.$modx->config['manager_language']."_country.inc.php";

// added by jen - build multilingual dropdown list of countries
for ($i=1; $i<=count($_country_lang); $i++) {
	$countries .= "<option value=\"" . $i. "\">" . $_country_lang[$i] . "</option>\n";
}

if (!$isPostBack){
		// display signup screen
		$tpl = $tpls[0];
		$tpl = str_replace("[+action+]",$modx->makeURL($modx->documentIdentifier),$tpl);
		$tpl = str_replace("[+countries+]",$countries,$tpl);
		$tpl.="<script type='text/javascript'>
				if (document.websignupfrm) document.websignupfrm.username.focus();
				</script>";
		$output .= $tpl;
} 
else if ($isPostBack) {

		$username = $modx->db->escape($modx->stripTags($_POST['username']));
		$password = $modx->db->escape($modx->stripTags($_POST['password']));
		$fullname = $modx->db->escape($modx->stripTags($_POST['fullname']));
		$email = $modx->db->escape($modx->stripTags($_POST['email']));
		$gender = $modx->db->escape($modx->stripTags($_POST['gender']));
		$country = $modx->db->escape($modx->stripTags($_POST['country']));
		$state = $modx->db->escape($modx->stripTags($_POST['state']));
		$zip = $modx->db->escape($modx->stripTags($_POST['zip']));
		$formcode = $_POST['formcode'];

		// load template section #1
		$tpl = $tpls[0];
		$tpl = str_replace("[+action+]",$modx->makeURL($modx->documentIdentifier),$tpl);
		$tpl = str_replace("[+username+]",$username,$tpl);
		$tpl = str_replace("[+fullname+]",$fullname,$tpl);
		$tpl = str_replace("[+email+]",$email,$tpl);
		$tpl = str_replace("[+gender+]",$gender,$tpl);
		$tpl = str_replace("[+countries+]",$countries,$tpl);
		$tpl = str_replace("[+country+]",$country,$tpl);
		$tpl = str_replace("[+state+]",$state,$tpl);
		$tpl = str_replace("[+zip+]",$zip,$tpl);
		$tpl.="<script type='text/javascript'>
		if (document.websignupfrm) document.websignupfrm.username.focus();
		</script>";

		// check for duplicate user name
		if ($username=="") {
				$output = webLoginAlert("Вы забыли указать логин!").$tpl;
				return;
		}
		else {
				$sql = "SELECT id FROM ".$modx->getFullTableName("web_users")." WHERE username='$username'";
				if (!$rs = $modx->db->query($sql)){
						$output = webLoginAlert("Ошибка при проверке уникальности логина $username.").$tpl;
						return;
				} 
				$limit = $modx->db->getRecordCount($rs);
				if ($limit>0) {
						$output = webLoginAlert("Этот логин уже используется!").$tpl;
						return;
				}        
		}
		
		// if there is no password, randomly generate a new one 	 
	if (isset($_POST['password'])) { 	  	 
		// verify password 	  	 
			if ($_POST['password'] != $_POST['confirmpassword']) { 	  	 
				$output = webLoginAlert("Неверное подтверждение пароля!"). $tpl; 	  	 
					return; 	  	 
			} 	  	 

			// check password
			if (strlen($password) < 6 ) {
					$output = webLoginAlert("Пароль должен состоять не менее, чем из 6 символов!").$tpl;
					return;
			} 
			elseif ($password=="") {
					$output = webLoginAlert("Вы забыли ввести пароль!").$tpl;
					return;        
			}
	} else {
		$password = webLoginGeneratePassword();
	}
	
		// verify email
		if ($email=='' || !preg_match("/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,6}$/i", $email)){
				$output = webLoginAlert("Проверьте правильность написания Email!").$tpl;
				return;
		}

		// check for duplicate email address
		$sql = "SELECT internalKey FROM ".$modx->getFullTableName("web_user_attributes")." WHERE email='$email'";
		if (!$rs = $modx->db->query($sql)){
				$output = webLoginAlert("Ошибка при проверке уникальности Email $email.").$tpl;
				return;
		} 
		$limit = $modx->db->getRecordCount($rs);
		if ($limit>0) {
				$row=$modx->db->getRow($rs);
				if ($row['internalKey']!=$id) {
						$output = webLoginAlert("Этот Email уже используется!").$tpl;
						return;
				}
		}

		// verify form code
		if ($useCaptcha && $_SESSION['veriword']!=$formcode) {
				$output = webLoginAlert("Ошибка при ввооде антиспам-кода! Повторите попытку.").$tpl;
				return;
		}

	// freeCap v1.4.1. Copyright 2005 Howard Yeend <www.puremango.co.uk>
	/*if ($useCaptcha) {
		if (!empty($_SESSION['freecap_word_hash']) && !empty($_POST['formcode'])) {
			// all freeCap words are lowercase.
			// font #4 looks uppercase, but trust me, it's not...
			if ($_SESSION['hash_func'](strtolower($_POST['formcode']))==$_SESSION['freecap_word_hash']) {	
				// reset freeCap session vars
				// cannot stress enough how important it is to do this
				// defeats re-use of known image with spoofed session id
				$_SESSION['freecap_attempts'] = 0;
				$_SESSION['freecap_word_hash'] = false;
			}	
			else {
				$output = webLoginAlert("Ошибка при вводе антиспам-кода! Повторите попытку.").$tpl;
				return;
			}
		}
		else {
			$output = webLoginAlert("Вы забыли ввести антиспам-код! Повторите попытку.").$tpl;
			return;
		}
	}*/
	// end of freeCap

	// create the user account
		$sql = "INSERT INTO ".$modx->getFullTableName("web_users")." (username, password) 
						VALUES('".$username."', md5('".$password."'));";
		$rs = $modx->db->query($sql);
		if (!$rs){
				$output = webLoginAlert("Ошибка при попытке создания пользователя.").$tpl;
				return;
		}         
		// now get the id
		$key=$modx->db->getInsertId();

		// save user attributes
		$proverka='';
		for ($i = 0; $i < 30; $i++){
			$proverka.=rand(0,9);
		}
		$sql = "INSERT INTO ".$modx->getFullTableName("web_user_attributes")." (internalKey, fullname, email, gender, country, state, zip, proverka) VALUES($key, '$fullname', '$email', '$gender', '$country', '$state', '$zip', '$proverka');";
		$rs = $modx->db->query($sql);
		if (!$rs){
			$output = webLoginAlert("Ошибка при попытке сохранения данных пользователя.").$tpl;
			return;
		}
		$message='Для подтверждения email - пройдите по следуюдей ссылке <a href="http://yaposhka64.ru/confirmemail.html?email='.trim($email).'&kod='.$proverka.'">Подтвердить</a>';
		//mail_send_html_from(trim($email),'info@yaposka64.ru','Подтверждение эмейл',$message);
		smtp_ssl_send(trim($email), 'Подтверждение эмейл', $message);

		// add user to web groups
		if (count($groups)>0) {
				$ds = $modx->dbQuery("SELECT id FROM ".$modx->getFullTableName("webgroup_names")." WHERE name IN ('".implode("','",$groups)."')");
				if (!$ds) return $modx->webAlert('Ошибка при попытке присоединения пользователя к группе.');
				else {
						while ($row = $modx->fetchRow($ds)) {
								$wg = $row["id"];
								$modx->dbQuery("REPLACE INTO ".$modx->getFullTableName("web_groups")." (webgroup,webuser) VALUES('$wg','$key')");
						}
				}
		}
	
		// invoke OnWebSaveUser event
		$modx->invokeEvent("OnWebSaveUser",
												array(
														"mode"         => "new",
														"userid"       => $key,
														"username"     => $username,
														"userpassword" => $password,
														"useremail"    => $email,
														"userfullname" => $fullname
												));

		
		// send email notification
		$rt = webLoginSendNewPassword($email,$username,$password,$fullname);
		if ($rt!==true) { // an error occured
				$output = $rt.$tpl;
				return;
		}

		// display change notification
		$newpassmsg = "Новый пароль отправлен на указанный Email.";
		$tpl = $tpls[1];
		$tpl = str_replace("[+newpassmsg+]",$newpassmsg,$tpl);    
		$output .= $tpl;
}

// Returns Default WebChangePwd tpl
function getWebSignuptpl($useCaptcha){
	
		ob_start();
		?>
		<!-- #declare:separator <hr> --> 
		<!-- login form section-->
	<!-- jen - added gender field -->
		<form method="post" name="websignupfrm" action="[+action+]" style="margin: 0px; padding: 0px;">
			<table>
				<tr>
					<td>
					<table>
						<tr>
							<td>Логин *</td>
							<td>
							<input type="text" name="username" class="inputBox" style="width:300px" size="20" maxlength="15" value="[+username+]"></td>
						</tr>
						<tr>
							<td>Пароль *</td>
							<td>
							<input type="password" name="password" class="inputBox" style="width:300px" size="20"></td>
						</tr>
						<tr>
							<td>Подтвердите пароль *</td>
							<td>
							<input type="password" name="confirmpassword" class="inputBox" style="width:300px" size="20"></td>
						</tr>
						<tr>
							<td>Ваше имя</td>
							<td>
							<input type="text" name="fullname" class="inputBox" style="width:300px" size="20" maxlength="100" value="[+fullname+]"></td>
						</tr>
						<tr>
							<td>Email *</td>
							<td>
							<input type="text" name="email" class="inputBox" style="width:300px" size="20" value="[+email+]"></td>
						</tr>
						<tr>
							<td>Пол</td>
							<td><select size="1" name="gender">
				<option selected="selected" value="">&nbsp;</option>
				<option value="1">Мужской</option>
				<option value="2">Женский</option>
				</select></td>
						</tr>
						<tr>
							<td>Страна</td>
							<td><select size="1" name="country">
				<option selected="selected" value="">&nbsp;</option>
				[+countries+]
				</select></td>
						</tr>
						<tr>
							<td>Регион/город</td>
							<td>
							<input type="text" name="state" class="inputBox" style="width:300px" size="20" maxlength="50" value="[+state+]"></td>
						</tr>
						<tr>
							<td>Почтовый индекс</td>
							<td>
							<input type="text" name="zip" class="inputBox" style="width:300px" maxlength="50" size="20" value="[+zip+]"></td>
						</tr>
						<?php if ($useCaptcha){ ?>
						<tr>
							<td colspan="2" style="padding-top: 1em;"></td>
						</tr>
						<tr>
							<td style="vertical-align: top;">Защита от спама</td>
							<td>
							<a href="[+action+]" onClick="this.blur();new_freecap();return false;">
				<img id="freecap" src="manager/includes/freecap/freecap.php" />
				</a>
				</td>
						</tr>
			<tr>
				<td>Слово на картинке: *</td>
				<td><input type="text" name="formcode" /></td>
			</tr>
						<?php } ?>
						<tr>
							<td colspan="2">* Поля, обязательные для заполнения</td>
						</tr>
					</table>
					</td>
				</tr>
				<tr>
					<td>
			<input type="submit" value="Создать учетную запись" name="cmdwebsignup" />
					<input type="reset" value="Очистить форму" name="cmdreset" />
					</td>
				</tr>
			</table>
		</form>
		<script type="text/javascript">
		// jen - add code for "gender" item
				var gen = "[+gender+]";
				var ctr = "[+country+]";
				var g = parseInt(gen);
				var c = parseInt(ctr);
				var f = document.websignupfrm;
				if (!isNaN(g)) f.gender.options[g].selected = true;
				if (!isNaN(c)) f.country.options[c].selected = true;
		</script>
		<hr>
		<!-- notification section -->
		<p>Новый аккаунт успешно зарегистрирован.</p>
		<p>Детали учетной записи отправлены на указанный вами email.</p>
		<?php 
		$t = ob_get_contents();
		ob_end_clean();
		return $t;
}

?>
