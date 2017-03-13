Mods by TS
----------

WLPE 1.3.1 plus bugfixes and ability to cohabit with the SMF connector
----------------------------------------------------------------------

OFFERED AS A SET OF BUGFIXES FOR 1.3.1. NOT INTENDED TO REPLACE DEVELOPMENT ON 1.3.2 BY OTHERS. 

PLEASE SEE FORUM FOR SUPPORT ON WLPE. PLEASE DON'T CONTACT ME (TS) - I MERELY OFFER
THESE FIXES FOR OTHERS, I AM NOT INTENDING TAKING ON DEVELOPMENT OR SUPPORT OF WLPE!




1. ctype_alnum added to webloginpe.class.php

2. Bugfixes in Logout event invoking:

function Logout($type, $loHomeId = '')
	{
		$this->Type = $type;
		$this->loHomeId = $loHomeId;
		
		$this->OnBeforeWebLogout(); // TS Bug fix
		$this->StatusToOffline();
		$this->SessionHandler('destroy');
		$this->OnWebLogout(); // TS Bug fix
		if ($type !== 'taconite')
		{
			$this->LogoutHomePage();
		}
	}

3. Webgroup names

line 2259 		    $this->UserWebGroups(); // (TS)

Inserted after function UserDocumentGroups()

	/**
	 *  UserWebGroups
	 *  Find the web groups that this user is a member of (NB: the above function actually gets the document groups)
	 *
	 *  (TS)
	 */
	function UserWebGroups()
		{
		global $modx;

		$web_groups = $modx->getFullTableName('web_groups');
		$webgroup_names = $modx->getFullTableName('webgroup_names');

		$currentUsersWebGroups = $modx->db->query("SELECT {$webgroup_names}.* FROM {$web_groups}, {$webgroup_names} WHERE {$webgroup_names}.id = {$web_groups}.webgroup AND webuser = ".$this->User['internalKey']);

		$_SESSION['webUserGroupNames'] = array();
		while($row = $modx->db->getRow($currentUsersWebGroups)) $_SESSION['webUserGroupNames'][$row['id']] = $row['name'];
		}			

4. eregi changed to preg_match (not my own edit - see MODx forums)

5. Fixes for SMF connector as per http://modxcms.com/forums/index.php?topic=26565.0

6. Fix so that username is stored in correct case in $_SESSION.
