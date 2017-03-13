
<div class="order-info">
    <h3>Заказ № [+id+] <span>Поступил: [+date+] в [+time+]</span></h3>
    <div class="content">
        <form class="changestatus" action="[+action.url+]" method="POST">   
            [+state.select+]
        </form>
        <ul class="inf-list">
            <li><span>Имя заказчика:</span>  <span>[+name+]</span></li>
            <li><span>Контактный телефон:</span> <span>[+phone+]</span></li>
            <li><span>E-Mail:</span> <span>[+email+]</span></li>
            <li><span>Адрес доставки:</span> <span>[+adress+]</span></li>
            <li><span>Сообщение:</span> <span>[+message+]</span></li>
        </ul>
        
        <div class="order-items">
            [+items+]
        </div> 
    </div>
</div>    
