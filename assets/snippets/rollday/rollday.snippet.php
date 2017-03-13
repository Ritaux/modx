<?php
include ('error.php');
include ('data.rollday.php');

// Config:
$defaultTpl = '
        <div class="roll_day">
            <div class="title">Ролл дня</div>
            до конца акции осталось<br />
            <div class="timer">
                [+time+]
            </div>
            <a href="[+url+]"><img src="[+image+]"/></a> 
            <a href="[+url+]">[+name+]</a>
        </div>
    ';

$tvTypes = array(
    'price',
    'image',
    'rollday',
    'dayprice'
);


$tpl = ($tpl) ? $modx->getChunk($tpl) : $defaultTpl;
$startId = ($startId) ? intval($startId) : 8;

//Process:
$doc = array();
$currentDay = date('N'); // Порядковый номер текущего дня недели


if ($startId >= 0) {

    //Where search?

    $allIds = $modx->getChildIds($startId, $depth = 10);

    if (!empty($allIds)) {
        foreach ($allIds as $docid) {
            $tv = $modx->getTemplateVarOutput($tvTypes, $docid, $published = 1);
            if (!empty($tv['dayprice'])) {
                $doc[$docid]['document'] = $modx->getDocument($docid, '*', 1);
                $doc[$docid]['tv'] = $tv;
            }
        }
    }


    foreach ($dayrollsArray as $dayNum => $doc_id) {
        if ($currentDay == $dayNum) {
            $endDate = mktime(0, 0, 0, date("m"), date("d") + 1, date("Y"));
            $dayPrice = $doc[$doc_id]['tv']['dayprice'];
            $head = '
                <script type="text/javascript" src="/assets/snippets/rollday/js/jquery.countdown.js"></script>
                <link rel="stylesheet" href="/assets/snippets/rollday/css/rd.css" type="text/css"/>
                <script type="text/javascript">
                    var endDate="' . $endDate . '"; 
                    var dayprice="' . $dayPrice . '";
                    var rolldayname="' . $doc[$doc_id]['document']['menutitle'] .
                '";
                </script>
                <script language="javascript" type="text/javascript" src="/assets/snippets/rollday/js/rd.js"></script>
            ';
            $modx->regClientStartupHTMLBlock($head);
            $data = array(
                'image' => $doc[$doc_id]['tv']['image'],
                'price' => $doc[$doc_id]['tv']['price'],
                'url' => $modx->makeUrl($doc_id),
                'name' => $doc[$doc_id]['document']['menutitle'],
                );
            $out .= parseTpl($data, $tpl);
        }
    }
}


// Lib:

function parseTpl($ph, $tpl)
{
    $keys = array();
    $values = array();
    if (is_array($ph)) {
        foreach ($ph as $key => $value) {
            $keys[] = '[+' . $key . '+]';
            $values[] = $value;
        }
        return str_replace($keys, $values, $tpl);
    } else {
        return $tpl;
    }
}

?>