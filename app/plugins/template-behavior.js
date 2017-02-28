//============================== header =========================
jQuery(document).ready(function(){
	"use strict";
	$(window).load(function(){
		$('.body-wrapper').each(function(){
			var header_area = $('.header');
			var main_area = header_area.children('.navbar');

			var logo = main_area.find('.navbar-header');
			var navigation = main_area.find('.navbar-collapse');
			var original = {
				nav_top: navigation.css('margin-top')
			};

			$(window).scroll(function(){
				if( main_area.hasClass('bb-fixed-header') && ($(this).scrollTop() === 0 || $(this).width() < 750)){
					main_area.removeClass('bb-fixed-header').appendTo(header_area);
					navigation.animate({'margin-top': original.nav_top}, {duration: 100, queue: false, complete: function(){
						header_area.css('height', 'auto');
					}});
				}else if( !main_area.hasClass('bb-fixed-header') && $(this).width() > 750 &&
					$(this).scrollTop() > header_area.offset().top + header_area.height() - parseInt($('html').css('margin-top')) ){

					header_area.css('height', header_area.height());
					main_area.css({'opacity': '0'}).addClass('bb-fixed-header');
					main_area.appendTo($('body')).animate({'opacity': 1});

					navigation.css({'margin-top': '0px'});
				}
			});
		});

		$(window).trigger('resize');
		$(window).trigger('scroll');
	});
});


//============================== ALL DROPDOWN ON HOVER =========================
jQuery(document).ready(function(){
	if($(".navbar").width() > 1007)
	{
		$('.nav .dropdown').hover(function() {
        	$(this).addClass('open');
	    },
	    function() {
	        $(this).removeClass('open');
	    });
	}
	$('.nav-category .dropdown-submenu ').hover(function() {
    	$(this).addClass('open');
    },
    function() {
        $(this).removeClass('open');
    });
});
//============================== SEARCH =========================
jQuery(document).ready(function(){
	$('.search-box a').on("click",function() {
	    $(".search-box .dropdown-menu").toggleClass('display-block');
	    $(".search-box a i").toggleClass('fa-close').toggleClass("fa-search");
	});
});
//============================== RS-SLIDER =========================
jQuery(document).ready(function() {
	jQuery('.banner-v1 .fullscreenbanner').revolution({
		delay: 5000,
		startwidth: 1170,
		startheight: 500,
		fullWidth: "on",
		fullScreen: "off",
		hideCaptionAtLimit: "",
		dottedOverlay: "twoxtwo",
		navigationStyle: "preview4",
		fullScreenOffsetContainer: "",
		hideTimerBar:"on",
	});

	jQuery('.bannerV4 .fullscreenbanner').revolution({
		delay: 5000,
		startwidth: 835,
		startheight: 470,
		fullWidth: "off",
		fullScreen: "off",
		hideCaptionAtLimit: "",
		dottedOverlay: "twoxtwo",
		navigationStyle: "preview4",
		fullScreenOffsetContainer: "",
		hideTimerBar:"on",
		onHoverStop:"on",
	});
});

//============================== OWL-CAROUSEL =========================
jQuery(document).ready(function() {
	"use strict";
	var owl = $('.owl-carousel.featured-products-slider');
	  owl.owlCarousel({
		  loop:true,
		  margin:28,
		  autoplay:true,
		  autoplayTimeout:2000,
		  autoplayHoverPause:true,
		  nav:true,
		  moveSlides: 4,
		  dots: false,
		  responsive:{
			  320:{
				  items:1
			  },
			  768:{
				  items:3
			  },
			  992:{
			  	items:4
			  }
		  }
	  });
	var owl = $('.owl-carousel.partners-logo-slider');
	  owl.owlCarousel({
		  loop:true,
		  margin:28,
		  autoplay:true,
		  autoplayTimeout:3000,
		  autoplayHoverPause:true,
		  nav:true,
		  dots: false,
		  responsive:{
			  320:{
			  	slideBy: 1,
				  items:1
			  },
			  768:{
			  	slideBy: 3,
				  items:3
			  },
			  992:{
			  	slideBy: 5,
				  items:5
			  }
		  }
	  });

	var owl = $('.owl-carousel.featured-collectionSlider');
	  owl.owlCarousel({
		  loop:true,
		  margin:28,
		  autoplay:false,
		  autoplayHoverPause:true,
		  nav:true,
		  dots: false,
		  responsive:{
			  320:{
			  	slideBy: 1,
				  items:1
			  },
			  768:{
			  	slideBy: 2,
				  items:2
			  },
			  992:{
			  	slideBy: 2,
			  	items:2
			  }
		  }
	  });

	  var owl = $('.owl-carousel.dealSlider');
	  owl.owlCarousel({
		  loop:true,
		  margin:28,
		  autoplay:false,
		  nav:true,
		  moveSlides: 1,
		  dots: false,
		  responsive:{
			  320:{
			  	slideBy: 1,
				  items:1
			  },
			  768:{
			  	slideBy: 3,
				  items:3
			  },
			  992:{
			  	slideBy: 3,
			  	items:3
			  }
		  }
	  });

	  var owl = $('.owl-carousel.testimonialSlider');
	  owl.owlCarousel({
		  loop:true,
		  margin:28,
		  autoplay:true,
		  autoplayTimeout:4000,
		  autoplayHoverPause:true,
		  smartSpeed:1000,
		  nav:true,
		  moveSlides: 1,
		  dots: false,
		  responsive:{
			  320:{
				  items:1
			  },
			  768:{
				  items:1
			  },
			  992:{
			  	items:1
			  }
		  }
	  });

	  var owl = $('.owl-carousel.categorySlider');
	  owl.owlCarousel({
		  loop:true,
		  margin:28,
		  autoplay:false,
		  nav:true,
		  moveSlides: 1,
		  dots: false,
		  smartSpeed:1000,
		  responsive:{
			  320:{
				  items:1
			  },
			  768:{
				  items:1
			  },
			  992:{
			  	items:1
			  }
		  }
	  });

	var owl = $('.owl-carousel.bannerV3');
	  owl.owlCarousel({
		  loop:true,
		  autoplay:true,
		  autoplayTimeout:4000,
		  autoplayHoverPause:true,
		  nav:true,
		  moveSlides: 1,
		  dots: false,
		  margin: 15,
		  items: 1,
		  responsive:{
			  320:{
				  items:1,
				  stagePadding: 20
			  },
			  768:{
				  items:1,
				  stagePadding: 100,
				  margin: 50
			  },
			  992:{
			  	items:1,
			  	stagePadding: 250,
			  	 margin: 50
			  }
		  }
	  });

});
//============================== SELECT BOX =========================
jQuery(document).ready(function() {
	$('.select-drop').selectbox();
});

//============================== SIDE NAV MENU TOGGLE =========================
jQuery(document).ready(function() {
	$('.side-nav li a').click(function() {
		$(this).find('i').toggleClass('fa fa-minus fa fa-plus');
	});
});

//============================== PRICE SLIDER RANGER =========================
jQuery(document).ready(function() {
	var minimum = 20;
	var maximum = 300;

	$( "#price-range" ).slider({
		range: true,
		min: minimum,
		max: maximum,
		values: [ minimum, maximum ],
		slide: function( event, ui ) {
			$( "#price-amount-1" ).val( "$" + ui.values[ 0 ] );
			$( "#price-amount-2" ).val( "$" + ui.values[ 1 ] );
		}
	});

	$( "#price-amount-1" ).val( "$" + $( "#price-range" ).slider( "values", 0 ));
	$( "#price-amount-2" ).val( "$" + $( "#price-range" ).slider( "values", 1 ));
});
//============================== PRODUCT SINGLE SLIDER =========================
jQuery(document).ready(function() {
	(function($){
	  $('#thumbcarousel').carousel(0);
	  var $thumbItems = $('#thumbcarousel .item');
	    $('#carousel').on('slide.bs.carousel', function (event) {
	     var $slide = $(event.relatedTarget);
	     var thumbIndex = $slide.data('thumb');
	     var curThumbIndex = $thumbItems.index($thumbItems.filter('.active').get(0));
	    if (curThumbIndex>thumbIndex) {
	      $('#thumbcarousel').one('slid.bs.carousel', function (event) {
	        $('#thumbcarousel').carousel(thumbIndex);
	      });
	      if (curThumbIndex === ($thumbItems.length-1)) {
	        $('#thumbcarousel').carousel('next');
	      } else {
	        $('#thumbcarousel').carousel(numThumbItems-1);
	      }
	    } else {
	      $('#thumbcarousel').carousel(thumbIndex);
	    }
	  });
	})(jQuery);
});

$(".quick-view").on('show.bs.modal', function (e) {
	$(this).find("img").attr("src", $(e.relatedTarget).attr('data-image'));
	$(this).find("h2").html($(e.relatedTarget).attr('data-name'));
	$(this).find("h3").html($(e.relatedTarget).attr('data-price'));
	$(this).find("p").html($(e.relatedTarget).attr('data-name') + " is just what you're looking for.");
})

jQuery(document).ready(function() {
	$(".quick-view .btn-block").click(function(){
        $(".quick-view").modal("hide");
    });
});

//============================== Count down triger =========================
jQuery(document).ready(function() {
	"use strict";
 	$('#simple_timer').syotimer({
        year: 2017,
        month: 5,
        day: 9,
        hour: 20,
        minute: 30,
    });
    $('.bannerV3 #slider_timer').syotimer({
        year: 2017,
        month: 1,
        day: 9,
        hour: 20,
        minute: 30,
    });
});

// cart

jQuery(document).ready(function() {
	"use strict";

	var taxPercent = 0.16;
	var coupons = [
		{
			name: 'EMPLOYEECUOPON',
			discount: 10
		},
		{
			name: 'TAXFREE',
			discount: 16
		},
		{
			name: 'SPECIALCOUPON',
			discount: 20
		}
	];
//borrar
	//localStorage.clear();
	//localStorage.removeItem('isCouponApplied');

	if (localStorage.getItem('cartList') === null) {
		var cartList = [];
		localStorage.setItem('cartList', JSON.stringify(cartList));
	}

	if (localStorage.getItem('couponPercent') === null) {
		localStorage.setItem('couponPercent', 0);
	}

	setCartAmount();
	refreshCartResume();
	loadCartList();

	$('.apply-coupon').click(function(e) {
		e.preventDefault();
		var coupon = $('#coupon-name').val();
		if (Number(localStorage.getItem('couponPercent')) === 0 && coupon !== '') {
			coupons.filter(function(element) {
				if (element.name === coupon) {
					localStorage.setItem('couponPercent', element.discount);
					setCartAmount();
				}
			});
		}
	});

	$(".add-cart").click(function(e){
		e.preventDefault();

		var cart = JSON.parse(localStorage.getItem('cartList'));

		if (!isInProductList($(this).data('code'))) {
			var product = {
				code:$(this).data('code'),
				img: $(this).data('image'),
				product: $(this).data('name'),
				quantity: 1,
				price: $(this).data('price')
			};

			cart.push(product);
			localStorage.setItem('cartList', JSON.stringify(cart));
		}

		setCartAmount();
		refreshCartResume();

		window.location.href = 'cart-page.html';
  });

	$('.product-quantity').bind('keyup', function() {
		if ($(this).val() > 0 && $(this).val() <= 5) {
			var cartItems = JSON.parse(localStorage.getItem('cartList'));
			var code = $(this).data('code');
			var quantity = $(this).val();

			cartItems.filter(function(element) {
				if (element.code === code) {
					element.quantity = quantity;
					localStorage.setItem('cartList', JSON.stringify(cartItems));
					setCartAmount();
					refreshCartResume();
					updateProductSubtotal(element.code, element.quantity, element.price);
				}
			});
		}
	});

	function updateProductSubtotal(code, quantity, price) {
		var subtotal = (quantity*price).toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, '$1,');
		$('.product-subtotal[data-code="'+ code +'"]').html(subtotal);
	}

	function loadCartList() {
		var cartItems = JSON.parse(localStorage.getItem('cartList'));
		var cartList = '';

		for (var i in cartItems) {
			var subtotal = (cartItems[i].quantity * cartItems[i].price).toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, '$1,');

			cartList += `<tr>
				<td class="col-xs-2">
					<button type="button" class="close remove-product" data-code="`+ cartItems[i].code +`" data-dismiss="alert" aria-label="Close"><span aria-hidden="true">&times;</span></button>
					<span class="cart-image"><img src="`+ cartItems[i].img +`" alt="image" /></span>
				</td>
				<td class="col-xs-4">`+ cartItems[i].product +`</td>
				<td class="col-xs-2">$ `+ cartItems[i].price.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, '$1,') +`</td>
				<td class="col-xs-2"><input type="number" min="1" max="5" data-code="`+ cartItems[i].code +`" placeholder="`+ cartItems[i].quantity +`" class="product-quantity" /></td>
				<td class="col-xs-2">$<span class="product-subtotal" data-code="`+ cartItems[i].code +`">`+ subtotal +`</span></td>
			</tr>`;
		}

		$('.cart-list-body').html(cartList);
	}

	$('.remove-product').click(function() {
		var cartItems = JSON.parse(localStorage.getItem('cartList'));
		var code = $(this).data('code');
		var productRemoved = cartItems.filter(function(element) {
			return element.code !== code;
		});
		localStorage.setItem('cartList', JSON.stringify(productRemoved));
		$(this).closest('tr').remove();
		setCartAmount();
		refreshCartResume();
	});

	function isInProductList(code) {
		var cartItems = JSON.parse(localStorage.getItem('cartList'));
		for (var i in cartItems) {
			if (cartItems[i].code === code) {
				cartItems[i].quantity =  cartItems[i].quantity+1;
				localStorage.setItem('cartList', JSON.stringify(cartItems));
				return true;
			}
		}
		return false;
	}

	function setCartAmount(discountPercent) {
		var cartItems = JSON.parse(localStorage.getItem('cartList'));
		var discountPercent = Number(localStorage.getItem('couponPercent'));
		var total = 0

		for (var i in cartItems) {
			total += (cartItems[i].price * cartItems[i].quantity);
		}

		var tax = total * taxPercent;
		var subtotal = total - tax;

		if ( discountPercent > 0 ) {
			var discount = total * (discountPercent / 100);
			total = total - discount;
			$('.cart-discount').html('-$' + discount.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, '$1,'));
			localStorage.setItem('isCouponApplied', true);
		}

		$('.cart-subtotal').html('$' + subtotal.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, '$1,'));
		$('.cart-tax').html('$' + tax.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, '$1,'));
		$('.cart-amount').html('$' +  total.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, '$1,'));

		localStorage.setItem('cartAmount', total);
	}

	function refreshCartResume() {
		var cartItems = JSON.parse(localStorage.getItem('cartList'));
		var cartResume = ( cartItems.length > 0 )?'<li>Item(s) in your cart</li>':'';

		for (var i in cartItems) {
			cartResume += `<li>
											<a href="#">
												<div class="media">
													<img class="media-left media-object" src="`+ cartItems[i].img +`" alt="cart-Image" />
													<div class="media-body">
														<h5 class="media-heading">`+ cartItems[i].product +` <br /><span>`+ cartItems[i].quantity +` X $`+ cartItems[i].price +`</span></h5>
													</div>
												</div>
											</a>
										</li>`;
		}

		cartResume += ( cartItems.length > 0 )? `<li>
										<div class="btn-group" role="group" aria-label="...">
											<button type="button" class="btn btn-default" onclick="location.href='cart-page.html';">Shopping Cart</button>
											<button type="button" class="btn btn-default" onclick="location.href='checkout-step-1.html';">Checkout</button>
										</div>
									</li>`:'';

		$('#cart-resume').html(cartResume);
	}
});

//============================== ACCORDION OR COLLAPSE ICON CHANGE =========================

    var allIcons = $("#faqAccordion .panel-heading i.fa");
    $('#faqAccordion .panel-heading').click(function(){
      allIcons.removeClass('fa-chevron-down').addClass('fa-chevron-up');
      $(this).find('i.fa').removeClass('fa-chevron-up').addClass('fa-chevron-down');
    });

    var allIconsOne = $("#accordionOne .panel-heading i.fa");
    $('#accordionOne .panel-heading').click(function(){
      allIconsOne.removeClass('fa-chevron-down').addClass('fa-chevron-up');
      $(this).find('i.fa').removeClass('fa-chevron-up').addClass('fa-chevron-down');
    });

    var allIconsTwo = $("#accordionTwo .panel-heading i.fa");
    $('#accordionTwo .panel-heading').click(function(){
      allIconsTwo.removeClass('fa-chevron-down').addClass('fa-chevron-up');
      $(this).find('i.fa').removeClass('fa-chevron-up').addClass('fa-chevron-down');
    });

    var allIconsThree = $("#togglesOne .panel-heading i.fa");
    $('#togglesOne .panel-heading').click(function(){
      allIconsThree.removeClass('fa-chevron-down').addClass('fa-chevron-up');
      $(this).find('i.fa').removeClass('fa-chevron-up').addClass('fa-chevron-down');
    });

    var allIconsFour = $("#togglesTwo .panel-heading i.fa");
    $('#togglesTwo .panel-heading').click(function(){
      allIconsFour.removeClass('fa-chevron-down').addClass('fa-chevron-up');
      $(this).find('i.fa').removeClass('fa-chevron-up').addClass('fa-chevron-down');
    });
