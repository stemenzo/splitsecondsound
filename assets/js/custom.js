/**	
	Custom JS
	
	1. SPOTIFY EMBED
	2. HOVER DROPDOWN MENU
	3. BOOTSTRAP ACCORDION
	4. SKILL PROGRESS BAR
	5. MIXIT SLIDER
	6. FANCYBOX
	7. MAIN SLIDER (SLICK SLIDER)
	8. DOUBLE CLICK HOVER FIX IOS
	
**/
// jQuery for page scrolling feature - requires jQuery Easing plugin
	$(function() {
		$('.page-scroll a').bind('click', function(event) {
			var $anchor = $(this);
			$('html, body').stop().animate({
				scrollTop: $($anchor.attr('href')).offset().top
			}, 1500, 'easeInOutExpo');
			event.preventDefault();
		});
	});
	/* ----------------------------------------------------------- */
	/*  1. SPOTIFY EMBED
	/* ----------------------------------------------------------- */ 


	jQuery(function($){
		

	$(window).on('load resize', function() {
	  $('iframe[src*="embed.spotify.com"]').each( function() {
		$(this).css('width', $(this).parent().css('width'));
		$(this).attr('src', $(this).attr('src'));
		$(this).removeClass('loaded');
		
		$(this).on('load', function(){
		  $(this).addClass('loaded');
		});
	  });
	});

	
			
	/* ----------------------------------------------------------- */
	/*  2. HOVER DROPDOWN MENU
	/* ----------------------------------------------------------- */ 
	
	// for hover dropdown menu
  	$('ul.nav li.dropdown').hover(function() {
      $(this).find('.dropdown-menu').stop(true, true).delay(200).fadeIn(200);
    }, function() {
      $(this).find('.dropdown-menu').stop(true, true).delay(200).fadeOut(200);
    });

  	/* ----------------------------------------------------------- */
	/*  3. BOOTSTRAP ACCORDION
	/* ----------------------------------------------------------- */ 
	
	$('#accordion .panel-collapse').on('shown.bs.collapse', function () {
	$(this).prev().find(".fa").removeClass("fa-plus-square").addClass("fa-minus-square");
	});
	
	//The reverse of the above on hidden event:
	
	$('#accordion .panel-collapse').on('hidden.bs.collapse', function () {
	$(this).prev().find(".fa").removeClass("fa-minus-square").addClass("fa-plus-square");
	});	

	
	jQuery(function(){
	    $('#mixit-container').mixItUp();
	});
		
	/* ----------------------------------------------------------- */
	/*  6. FANCYBOX 
	/* ----------------------------------------------------------- */

	jQuery(document).ready(function() {
		var $fb = $(".fancybox")
		if ($fb.fancybox !== undefined) {
			$fb.fancybox();
		}
	});	 

	/* ----------------------------------------------------------- */
	/*  7. MAIN SLIDER (SLICK SLIDER)
	/* ----------------------------------------------------------- */

	jQuery('.main-slider').slick({
		dots: false,
		infinite: true,
		speed: 500,
		autoplay: true,
		accessibility: false,
		fade: true,
		cssEase: 'linear'
	});


	$(window).scroll(function(){
	    if ($(this).scrollTop() > 300) {
	      $('.scrollToTop').fadeIn();
	    } else {
	      $('.scrollToTop').fadeOut();
	    }
	});	  

	/* ----------------------------------------------------------- */
	/*  8. Double CLick Fix ios
	/* ----------------------------------------------------------- */

	/*$(function() {
		$('a').on('click touchend', function(e) {
			var el = $(this),
				link = el.attr('href');
			if((navigator.userAgent.match(/iPhone/i)) || (navigator.userAgent.match(/iPod/i)) || (navigator.userAgent.match(/iPad/i))) {
				window.location = link;
			}
		});
	});	*/



	   
	//Click event to scroll to top

	$('.scrollToTop').click(function(){
	    $('html, body').animate({scrollTop : 0},800);
	    return false;
	});

	
	wow = new WOW(
      {
        animateClass: 'animated',
        offset:       100,
        live:         true,
        callback:     function(box) {
          console.log("WOW: animating <" + box.tagName.toLowerCase() + ">")
        }
      }
    );
    wow.init(); 
	
});