<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html>
    <head>
        <title>[+module.title+]</title>
        <link rel="stylesheet" type="text/css" href="/[+template.path+]css/style.css" />
        <script type="text/javascript" src="media/script/tabpane.js"></script>
        <script type="text/javascript" src="[+module.path+]js/jquery.min.js"></script>
        <script type="text/javascript">
    	       var moduleurl = '[+module.url+]';
               var templatepath = '[+template.path+]';
               var page = '[+module.page+]';
               var ajaxOrderListUrl = '[+module.ajaxorderlist.url+]';
               var orders_refreshtime = '[+module.orders.refreshtime+]';
               var checkorders_refreshtime = '[+module.checkorders.refreshtime+]';  	
		</script>
        <script type="text/javascript" src="[+module.path+]js/module.js"></script>
    </head>
    <body id="body">
        
        <div class="panel">
        <form id="filter" action="[+module.url+]" method="POST">
            <h4>[+module.title+]</h4>    
            Бар на: 
            [+panel.bar.change+]
            Показывать по:
            [+panel.limit.change+]
            [+panel.pagination+]
        </form>
        <div id="alert"></div>
        </div>
        
        
        <div id="actions">
            <ul class="actionButtons">
                <li id="Button1"></li>
                <li id="Button2"><a href="[+refresh.url+]"><img src="media/style/[+modx.managertheme+]/images/icons/refresh.png" /> Обновить</a></li>
                [+button.export+]
                <li id="Button3"><a href="index.php?a=106" onclick="document.location.href='index.php?a=106';"><img src="media/style/[+modx.managertheme+]/images/icons/stop.png" /> Закрыть</a></li>
            </ul>
        </div>
        
                
        <div class="sectionBody">
        <div class="orders">
            
            <!--
<a href="javascript:;" id="reload">Reload</a> echo: [+session.new.order+]
-->
            
            
            <ul class="tab-menu">
                <li><a href="[+module.url+]">Бар на [+bar.name+]</a></li>     
            </ul>
            
            <div class="content">
                [+bar.orders+]    
            </div>
            
            <div class="rightside"></div>
            
        </div> 
        </div>
        
        
        <div class="sectionBody">
                    
        </div>
        
    </body>
</html>