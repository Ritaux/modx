$(document).ready(function(){        
    
    var t = 100;
    
    function check_new_orders() {
        return $('#Button1').load(moduleurl+'&page='+page+'&checknew=1');
        /*$('#aw-close').live('click',function(){
            $('.fader,.alert_win').remove();
        }) */ 
    } 
    
    function export_to() {
        $.ajax({
           type: "GET",
           url: moduleurl+'&export=1',
           success: function(data){
            alert(data); 
           }
        }); 
             
    }
    
    function reload_orders() { 
        $('.orders > .content').load(ajaxOrderListUrl);
    }
    
    $('.bar-change,.items-limit').change(function(){
        $('#filter').submit();    
    })
    
    if ($('.pages a').length <=1) {
        $('.pagination').hide()
    }
    
    check_new_orders();//reload_orders();
    setInterval(check_new_orders, checkorders_refreshtime);
    setInterval(reload_orders, orders_refreshtime);
    
    $('#export').click(function(){
        export_to();       
    })
    
    $('.view').live('click',function(e){
        e.preventDefault();
        $('.order-list tr').removeClass('clicked');
        $(this).parent().parent().addClass('clicked');
        $('.rightside').fadeOut(t);
        $('.orders').animate({'padding-right':'400px'},t);
        var submitUrl = $(this).attr('href');
        $.ajax({
           type: "GET",
           url: submitUrl,
           success: function(data){
                $('.orders').animate({'padding-right':'400px'},t,function(){
                    $('.rightside').fadeIn(t).html(data);
                    $('.status-change').change(function(){
                        $('.status-change option:selected').each(function(){
                            $.ajax({
                               type: "GET",
                               url: submitUrl,
                               data: 'status='+$(this).val(),
                               success: function(data){
                                   $('.orders > .content').load(submitUrl+'&page='+page+'&ordertable=1');
                                   //reload_orders();  
                               }
                            });    
                        })    
                    })     
                });
                   
           }
        });            
    })

       
})