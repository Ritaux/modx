$(function() {
	var flyBlock = $(".flyBlock");
	var offset = flyBlock.offset();
	var topPadding = 15;
	var leftColHeight = $('.content').height();
	$(window).scroll(function() {
		if ($(window).scrollTop() > offset.top) {
			var mTop = ($(window).scrollTop() - offset.top + topPadding);
			var current = mTop + flyBlock.height();
			if (current > leftColHeight) {
				return;
			} else {
				flyBlock.stop().animate({
					marginTop: mTop
				});
			}
		} else {
			flyBlock.stop().animate({
				marginTop: 0
			});
		}
	});
});

$(document).ready(function() {
	$('.header .login .caption').click(function(){$('.header .login').removeClass('close').addClass('open');});
	$('.header .login .close').click(function(){$('.header .login').removeClass('open').addClass('close');});

	$('#content').hide();
	$('#content').fadeIn(800);

		$("a[rel=ms]").fancybox({
		'titleShow': false,
		'transitionIn': 'elastic',
		'transitionOut': 'elastic'
	});

	$("a[rel=catalog]").fancybox({
		'titleShow': true,
		'transitionIn': 'elastic',
		'transitionOut': 'elastic'
	});

	$("#ms").easySlider({
		'auto': true,
		'continuous': true,
		'speed': 300,
		'pause': 5000
	});

	$(".main-artciles").easySlider({
		'auto': false,
		'prevId': 'ma-prev',
		'nextId': 'ma-next',
		'continuous': true
	});

	// Shoppingcart:
	simpleCart({
		currency: "RUR",
		beforeAdd: function() {
			alert('Товар добавлен в корзину!');
		},
		update: function() {
			addItems2Form($('.datafield'));
			showCart();
		},
		cartStyle: "table",
		cartColumns: [{
			attr: "name",
			label: false
		},
		{
			view: "decrement",
			label: false
		},
		{
			attr: "quantity",
			label: false
		},
		{
			view: "increment",
			label: false
		},
		{
			attr: "total",
			label: false,
			view: 'currency'
		},
		{
			view: "remove",
			text: "",
			label: false
		}]
	});

	var get_sum_form = function(field) {
		field.val(simpleCart.total());
	}

	var addItems2Form = function(field) {
		var inff = $('.inff');
		var name = '',
			price = '',
			count = '',
			total = '',
			table = '',
			tr = '';
		table = '<table border="0" cellpadding="2" cellspacing="0" width="60%" align="center"><tbody><tr><td  style="text-align: center; background-color: rgb(204, 204, 204); color: white; font-weight: bold; width: 283px;">Наименование</td><td style="background-color: rgb(204, 204, 204); text-align: center; color: white; font-weight: bold; width: 74px;">Кол-во</td><td style="background-color: rgb(204, 204, 204); text-align: center; color: white; font-weight: bold; width: 86px;">Цена</td></tr>';
		simpleCart.each(function(item, x) {
			name = item.get('name');
			price = item.get('price') * item.quantity();
			count = item.quantity();
			total = simpleCart.total();
			table += '<tr><td>' + name + '</td><td>' + count + ' шт.</td><td>' + price + ' руб.</td></tr>';
		});
		table += '</tbody></table><br />Общая сумма: <span style="font-weight:bold;text-decoration: underline;" class="total">' + total + '</span> р.';
		if (count > 0) {
			field.html('<textarea cols="1" id="messagetext" name="orderitems" rows="1" maxlength="500">' + table + '</textarea>');
		} else {
			field.html('');
		}
	}

		var showCart = function() {
		var total = simpleCart.quantity();
		if (total <= 0) {
			$('.shoppingcart').hide();
		} else {
			$('.shoppingcart').show();
		}
	}

	$('.sc_info').click(function() {
		 var t = 400;
			var win = $('#order_win');
			var cart = $('.cart');
			var check = $('.order-form-wrap');
			var startpoint = ($(window).width() - 380) / 2 + 'px';

			win.fadeIn(t);
			if (cart.css('left') == '0px') {
					cart.css('left',startpoint);
			}

			 $(".to_buy").click(function(e){
				 e.preventDefault();
					var newwidth = cart.width() + 420;
					var l = ($(window).width() - newwidth) / 2 + 'px';

					cart.stop().animate({'left':l},t,function(){
					check.fadeIn(t);
					$('.to_buy').hide();
					});

					var formurl = $(this).attr('href');

			$('#order-form-container').load(formurl,function(){
				addItems2Form($('.datafield'));
				//get_sum_form($('#orderform input[name="InvId"]'));
				$('#orderform').live('submit',function(e){
					var formObj = $(this);
					var formURL = formObj.attr("action");
					var formData = new FormData(this);
					$.ajax({
						url: formURL,
						type: 'POST',
						data:  formData,
						mimeType:"multipart/form-data",
						contentType: false,
						cache: false,
						processData:false,
						success: function(data, textStatus, jqXHR) {
							$('#order-form-container').html(data);
							addItems2Form($('.datafield'));
						},
					});
					e.preventDefault();
					e.unbind();
				})
			});
		});

	$('#order_win .close').click(function(){
			$('#order_win').fadeOut(t);
		})
	})

	$('.ci-2cart a').click(function(e) {
		e.preventDefault();
		var currentQty = Number($(this).parent().find('.item_quantity').val());
		if (currentQty <= 0) {
			$(this).parent().find('.item_quantity').val(1);
		} else {
			if ($(this).attr('class') == 'add') {
				$(this).parent().find('.item_quantity').val(currentQty + 1);
			}
			if ($(this).attr('class') == 'remove') {
				$(this).parent().find('.item_quantity').val(currentQty - 1);
			}
		}
	})




	$(function(){
            $('.tab').bind('click', function(e) {
                e.preventDefault();
                var tabNumber;
                if (!$(this).hasClass('active')) {
                    tabNumber = $(this).data('tab');
                    $('.tab').removeClass('active');
                    $('.widget').removeClass('active');
                    $(this).addClass('active');
                    $('.widgets').find("[data-widget='" + tabNumber + "']").addClass('active');
                }
            });
      });

})