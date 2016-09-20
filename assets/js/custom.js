(function($){

	/* ---------------------------------------------- /*
	 * Preloader
	/* ---------------------------------------------- */

	$(window).load(function() {
		$('#status').fadeOut();
		$('#preloader').delay(350).fadeOut('slow');
	});

	$(document).ready(function() {

		/* ---------------------------------------------- /*
		 * Animated scrolling / Scroll Up
		/* ---------------------------------------------- */

		$('a[href*=#]').bind("click", function(e){
			var anchor = $(this);
			$('html, body').stop().animate({
				scrollTop: $(anchor.attr('href')).offset().top
			}, 1000);
			e.preventDefault();
		});

		$(window).scroll(function() {
			if ($(this).scrollTop() > 100) {
				$('.scroll-up').fadeIn();
			} else {
				$('.scroll-up').fadeOut();
			}
		});

		$(document).on('click','.navbar-collapse.in',function(e) {
			if( $(e.target).is('a') && $(e.target).attr('class') != 'dropdown-toggle' ) {
				$(this).collapse('hide');
			}
		});

		/* ---------------------------------------------- /*
		 * Background image
		/* ---------------------------------------------- */

		$('#intro').backstretch(['assets/images/bg3.jpg']);

		/* ---------------------------------------------- /*
		 * Navbar
		/* ---------------------------------------------- */

		$('body').scrollspy({
			target: '.navbar-custom',
			offset: 70
		})

		var navbar = $('.navbar');
		var navHeight = navbar.height();

		$(window).scroll(function() {
			if($(this).scrollTop() >= navHeight) {
				navbar.addClass('navbar-color');
			}
			else {
				navbar.removeClass('navbar-color');
			}
		});

		if($(window).width() <= 767) {
			navbar.addClass('custom-collapse');
		}

		$(window).resize(function() {
			if($(this).width() <= 767) {
				navbar.addClass('custom-collapse');
			}
			else {
				navbar.removeClass('custom-collapse');
			}
		});

		/* ---------------------------------------------- /*
		 * Knob Animation
		/* ---------------------------------------------- */

		$(".custom-knob").knob({
			font: 'Montserrat',
			bgColor: '#C4C4C4',
			fgColor: '#90C695',
			thickness: '0.05',
			readOnly: true,
			max: 100,
			min: 0,
			step: 1,
			value: 0,
			width: 150,
			height: 150
		});

		$('#skill').waypoint(function() {
			$('#skill .custom-knob').each(function() {
				counter = $(this).attr('data-count-to'),
				$(this).animate({ value: counter }, {
					duration: 1500,
					easing:'swing',
					progress: function() {
						$(this).val(Math.ceil(this.value)).trigger('change');
					}
				});
			});
		}, { offset: '70%', triggerOnce: true });

		/* ---------------------------------------------- /*
		 * WOW Animation When You Scroll
		/* ---------------------------------------------- */

		wow = new WOW({
			mobile: false
		});
		wow.init();

		/* ---------------------------------------------- /*
		 * Owl slider - (clients, testimonials)
		/* ---------------------------------------------- */

		$("#owl-testimonials").owlCarousel({
			items : 1,
			navigation: true,
			navigationText: ['<i class="fa fa-angle-left"></i>', '<i class="fa fa-angle-right"></i>'],
			slideSpeed : 300,
			paginationSpeed : 400,
			autoPlay: 5000,
			singleItem: true
		});

		$("#owl-clients").owlCarousel({
			items : 5,
			pagination: false,
			slideSpeed : 300,
			paginationSpeed : 400,
			autoPlay: 5000
		});

		/* ---------------------------------------------- /*
		 * Rotate
		/* ---------------------------------------------- */

		$(".rotate").textrotator({
			animation: "dissolve",
			separator: "|",
			speed: 3000
		});

		/* ---------------------------------------------- /*
		 * Portfolio pop up
		/* ---------------------------------------------- */

		$('#portfolio').magnificPopup({
			delegate: 'a.pop-up',
			type: 'image',
			gallery: {
				enabled: true,
				navigateByImgClick: true,
				preload: [0,1]
			},
			image: {
				titleSrc: 'title',
				tError: 'The image could not be loaded.',
			}
		});

		$('.video-pop-up').magnificPopup({
			type: 'iframe',
		});

		/* ---------------------------------------------- /*
		 * A jQuery plugin for fluid width video embeds
		/* ---------------------------------------------- */

		$(".video").fitVids();

		/* ---------------------------------------------- /*
		 * E-mail validation
		/* ---------------------------------------------- */

		function isValidEmailAddress(emailAddress) {
			var pattern = new RegExp(/^((([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+(\.([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+)*)|((\x22)((((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(([\x01-\x08\x0b\x0c\x0e-\x1f\x7f]|\x21|[\x23-\x5b]|[\x5d-\x7e]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(\\([\x01-\x09\x0b\x0c\x0d-\x7f]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]))))*(((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(\x22)))@((([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.)+(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.?$/i);
			return pattern.test(emailAddress);
		};

		/* ---------------------------------------------- /*
		 * Contact form ajax
		/* ---------------------------------------------- */

		$("#contact-form").submit(function(e) {

			e.preventDefault();

			var c_name = $("#c_name").val();
			var c_email = $("#c_email").val();
			var c_message = $("#c_message ").val();
			var responseMessage = $('#contact-form .ajax-response');

			if (( c_name== "" || c_email == "" || c_message == "") || (!isValidEmailAddress(c_email) )) {
				responseMessage.fadeIn(500);
				responseMessage.html('<i class="fa fa-warning"></i> Check all fields.');
			}

			else {
				$.ajax({
					type: "POST",
					url: "assets/php/contactForm.php",
					dataType: 'json',
					data: {
						c_email: c_email,
						c_name: c_name,
						c_message: c_message
					},
					beforeSend: function(result) {
						$('#contact-form button').empty();
						$('#contact-form button').append('<i class="fa fa-cog fa-spin"></i> Wait...');
					},
					success: function(result) {
						if(result.sendstatus == 1) {
							$('#contact-form .ajax-hidden').fadeOut(500);
							responseMessage.html(result.message).fadeIn(500);
						} else {
							$('#contact-form button').empty();
							$('#contact-form button').append('<i class="fa fa-retweet"></i> Try again.');
							responseMessage.html(result.message).fadeIn(1000);
						}
					}
				});
			}

			return false;

		});

		/* ---------------------------------------------- /*
		 * Google Map
		/* ---------------------------------------------- */

		map = new GMaps({
			el: '#map',
			lat: 27.998653,
			lng: -80.638855,
			zoom: 16,
			scrollwheel: false,
			zoomControl : false,
			panControl : false,
			streetViewControl : false,
			mapTypeControl: false,
			overviewMapControl: false,
			styles: [{"featureType":"all","stylers":[{"saturation":-100},{"gamma":0.5}]}]
		});

		var image = new google.maps.MarkerImage('assets/images/map-icon.png',
			new google.maps.Size(60, 60),
			new google.maps.Point(0, 0),
			new google.maps.Point(26, 30)
		);

		map.addMarker({
			lat: 27.998653,
			lng: -80.638855,
			icon: image,
			title: 'Elegant',
			infoWindow: {
				content: '<p><strong>Elegant</strong><br/> We are here</p>'
			}
		});

	});

	
	/*STEPFORM JS STARTS*/

	$.fn.stepsForm = function(settings){
			var defaults={
					width			:'100%',
					active			:0,
					errormsg		:'Check faulty fields.',
					sendbtntext		:'Create Account',
					posturl			:'core/demo_steps_form.php',
					theme			:'default'
				};
			var settings=$.extend(defaults,settings);

			return this.each(function(){
				var modul=$(this);
				var count=modul.find(".sf-steps-content").find("div").length;
				var nextbtntext=modul.find("#sf-next").text();
				var confirmval=new Array();
				var confirmobject=new Array();

				modul.css({"width":settings.width});
				modul.addClass("sf-theme-"+settings.theme);
				openActiveTab();
				modul.find(':input').on( "click", function() {
					var ax=$(this).parent().parent().find("input").attr("type");
					if (ax=="radio" || ax=="checkbox")
						$(this).parent().parent().find("input").removeClass("sf-error");
					else
						$(this).removeClass("sf-error");
				});

				//steps click events---------------------------------
				modul.find(".sf-steps-content>div").on( "click", function() {
					if ($(this).attr("class")!="sf-active")
					{
						if (settings.active>$(this).index())
						{
							settings.active=$(this).index();
							openActiveTab();
						}
						else
						{
							geriControl($(this).index());
						}
					}
                });

				//next click event ----------------------------------
				modul.find("#sf-next").on( "click", function() {
					//devam etmesi için önce validate ler kontrol edilecek
					requredcontrol=false;
					modul.find(".sf-steps-form>ul").eq(settings.active).find(':input').each(function (){
						if ($(this).attr("data-required")=="true" && $(this).val()=="")
						{
							$(this).addClass("sf-error");
							requredcontrol=true;
						}
						else if($(this).attr("data-required")=="true" && ( $(this).attr("type")=="radio" || $(this).attr("type")=="checkbox" ))
						{
							if ( $(this).attr("type")=="radio" )
							{
								if ($(this).parent().parent().find("input[type='radio']:checked").length<1)
								{
									$(this).addClass("sf-error");
									requredcontrol=true;
								}
							}
							else
							{
								if ($(this).parent().parent().find("input[type='checkbox']:checked").length<1)
								{
									$(this).addClass("sf-error");
									requredcontrol=true;
								}
							}
						}
						else if($(this).val()!="")
						{
							if ($(this).attr("data-email")=="true" && validateEmail($(this).val())==false)
							{
								$(this).addClass("sf-error");
								requredcontrol=true;
							}

							if ($(this).attr("data-number")=="true" && isNaN($(this).val()))
							{
								$(this).addClass("sf-error");
								requredcontrol=true;
							}

							if ($(this).attr("data-confirm")=="true")
							{
								confirmval.push($(this).val());
								confirmobject.push($(this));
								//$(this).addClass("sf-error");
								confirmvalControl();
							}

						}
					});
					confirmobjectControl();
					confirmval.length=0;


					if (!requredcontrol)
					{
						confirmobjectControlDelete();
						confirmobject.length=0;
						if (modul.find("#sf-next").text()==settings.sendbtntext)
						{
							modul.find("#sf-msg").text("");
							//event.preventDefault();
							$.ajax({
								type	: "POST",
								url		: settings.posturl,
								data	: modul.find("form").serialize()
							})
							.success(function( msg ) {
								modul.find("#sf-msg").html(msg);
							});
						}
						else
						{
							settings.active++;
							if (settings.active>count-1)
							{
								settings.active--;
								modul.find("#sf-msg").text("");
							}
							else
							{
								openActiveTab();
								requredcontrol=false;
								modul.find("#sf-msg").text("");
							}
						}
					}
					else
					{
						modul.find("#sf-msg").html(settings.errormsg);
					}

                });

				//previous click event ------------------------------
				modul.find("#sf-prev").on( "click", function() {
					settings.active--;
					if (settings.active<0)
					{
						settings.active++;
					}
					else
					{
						openActiveTab();
						requredcontrol=false;
					}
				});

				function geriControl(sayac)
				{
					requredcontrol=false;
					for (i=0; i<sayac; i++)
					{
						modul.find(".sf-steps-form>ul").eq(i).find(':input').each(function (){
							if ($(this).attr("data-required")=="true" && $(this).val()=="")
							{
								$(this).addClass("sf-error");
								requredcontrol=true;
							}
							else if($(this).attr("data-required")=="true" && ( $(this).attr("type")=="radio" || $(this).attr("type")=="checkbox" ))
							{
								if ( $(this).attr("type")=="radio" )
								{
									if ($(this).parent().parent().find("input[type='radio']:checked").length<1)
									{
										$(this).addClass("sf-error");
										requredcontrol=true;
									}
								}
								else
								{
									if ($(this).parent().parent().find("input[type='checkbox']:checked").length<1)
									{
										$(this).addClass("sf-error");
										requredcontrol=true;
									}
								}
							}
							else if($(this).val()!="")
							{
								if ($(this).attr("data-email")=="true" && validateEmail($(this).val())==false)
								{
									$(this).addClass("sf-error");
									requredcontrol=true;
								}

								if ($(this).attr("data-number")=="true" && isNaN($(this).val()))
								{
									$(this).addClass("sf-error");
									requredcontrol=true;
								}

								if ($(this).attr("data-confirm")=="true")
								{
									confirmval.push($(this).val());
									confirmobject.push($(this));
									//$(this).addClass("sf-error");
									confirmvalControl();
								}
							}
						});
					}

					confirmobjectControl();
					confirmval.length=0;

					if (!requredcontrol)
					{
						confirmobjectControlDelete();
						confirmobject.length=0;
						settings.active=sayac;
						if (settings.active>count-1)
						{
							settings.active--;
							modul.find("#sf-msg").text("");
						}
						else
						{
							openActiveTab();
							requredcontrol=false;
							modul.find("#sf-msg").text("");
						}
					}
					else
					{
						modul.find("#sf-msg").html(settings.errormsg);
					}
				}

				resizeEvent();
				$(window).resize(function(e) {
                    resizeEvent();
                });

				//resize event func-----------------------------------
				function resizeEvent()
				{
					if (modul.width()>500)
					{
						modul.find(".column_1").css({"width":"16.666666667%","margin-bottom":"0px"});
						modul.find(".column_2").css({"width":"33.333333334%","margin-bottom":"0px"});
						modul.find(".column_3").css({"width":"50%","margin-bottom":"0px"});
						modul.find(".column_4").css({"width":"66.666666667%","margin-bottom":"0px"});
						modul.find(".column_5").css({"width":"83.333333334%","margin-bottom":"0px"});
						modul.find(".column_6").css({"width":"100%","margin-bottom":"0px"});
						modul.find(".sf-content>li").css({"margin-bottom":"2rem"});
						modul.find(".sf-steps-content").removeClass("sf-steps-center");
						modul.find(".sf-steps-navigation").removeClass("sf-align-center").addClass("sf-align-right");
					}
					else
					{
						modul.find(".column_1").css({"width":"100%","margin-bottom":"2rem"});
						modul.find(".column_2").css({"width":"100%","margin-bottom":"2rem"});
						modul.find(".column_3").css({"width":"100%","margin-bottom":"2rem"});
						modul.find(".column_4").css({"width":"100%","margin-bottom":"2rem"});
						modul.find(".column_5").css({"width":"100%","margin-bottom":"2rem"});
						modul.find(".column_6").css({"width":"100%","margin-bottom":"2rem"});
						modul.find(".sf-content>li").css({"margin-bottom":"0px"});
						modul.find(".sf-steps-content").addClass("sf-steps-center");
						modul.find(".sf-steps-navigation").removeClass("sf-align-right").addClass("sf-align-center");
					}
				}

				//open new step --------------------------------------
				function openActiveTab()
				{
					modul.find(".sf-steps-content>div").removeClass("sf-active");
					modul.find(".sf-steps-form>.sf-content").css({"display":"none"});
					modul.find(".sf-steps-form>ul").eq(settings.active).fadeIn();
					modul.find(".sf-steps-content>div").eq(settings.active).addClass("sf-active");
					if (settings.active==count-1)
						modul.find("#sf-next").text(settings.sendbtntext);
					else
						modul.find("#sf-next").text(nextbtntext);

					if (settings.active==0)
						modul.find("#sf-prev").css({"display":"none"});
					else
						modul.find("#sf-prev").css({"display":"inline-block"});
				}

				//other scripts --------------------------------------
				function validateEmail(email) {
					var re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
					return re.test(email);
				}

				function confirmvalControl()
				{
					var firstval=confirmval[0];

					for (index = 0; index < confirmval.length; index++) {
						if (confirmval[index]!=firstval)
						{
							requredcontrol=true;
						}
						fisrctval=confirmval[index];
					}
					//alert(requredcontrol);
				}

				function confirmobjectControl()
				{
					for (index = 0; index < confirmobject.length; index++) {
						confirmobject[index].addClass("sf-error");
					}
				}

				function confirmobjectControlDelete()
				{
					for (index = 0; index < confirmobject.length; index++) {
						confirmobject[index].removeClass("sf-error");
					}
				}
			});


		};


})(jQuery);
