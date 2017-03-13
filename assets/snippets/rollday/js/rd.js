$(document).ready(function(){

    //var endDate = '1376689999';
    var deadline = endDate - $.now()/1000;    

    $('.timer').countdown({
        until: deadline,
        format: 'HMS',
        compact: true, 
        description: '',
        onExpiry: function(){
            $('.roll_day').remove();        
        }
    }); 
    
    $('.simpleCart_shelfItem').each(function(){
        var name = $(this).find('.item_name');
        var price = $(this).find('.item_price');
        if (name.text() === rolldayname) {
            price.text(dayprice); 
            $(this).addClass('rolloftheday')   
        }
    })       

})