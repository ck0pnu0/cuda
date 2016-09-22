;(function($, window, document, undefined) {
	var $win = $(window);
	var $doc = $(document);	

	$doc.ready(function() {

		//chart circle
		$('.skill').each(function() {
			var $this = $(this);
			var skillsSecionPos = $('.section-skills').offset().top;
			var winH = $win.height()/3;
			var maxPos = skillsSecionPos - winH;

			$doc.on('scroll', function(){
				var bodyScroll = $doc.scrollTop();

				if ( bodyScroll >= maxPos ) {
					$this.find('input[type="checkbox"]').attr('checked', true);
					$this.find('.chart').addClass('active');
				}
			});
		});

		//isotope filter
		var $grid = $('.tabs-body');

		$grid.isotope({ 
			itemSelector: '.element-item',
			layoutMode: 'fitRows'			
		})

		// bind filter button click
		$('.filters-button-group').on( 'click', 'li a', function(e) {
			e.preventDefault();

			var $this = $(this);
			var filterValue = $this.attr('data-filter');

			$grid.isotope({ filter: filterValue });
			$this.closest('li').addClass('current').siblings().removeClass();
		});

		//testimonial height
		$('.testimonial').each(function(){
			var $this = $(this);
			var $thisCnt = $this.find('.testimonial-cnt');
			
		});

		// add current class to the home
		if ( $doc.scrollTop() == 0 ) {
			$('.navigation li:eq(0)').addClass('current');
		}

		// fixed header on scroll and change the current class
		$doc.on('scroll', function() {
			var topPos = $doc.scrollTop();

			if ( topPos >= 1 ) {
				$('.header').addClass('fixed');
			} else {
				$('.header').removeClass('fixed');
			}

			$('.section').each(function() {
				var $this = $(this);
				var sectionTop = $this.offset().top;

				if ( sectionTop <= topPos ) {
					var href = $this.attr('id');			
					$('.navigation li').removeClass('current');
					$('.navigation li').find('a[href="#'+ href +'"]').closest('li').addClass('current');
				}
			});
		});

		//navigation scroll to functionality
		$('.navigation li a').on('click', function(e) {
			e.preventDefault();

			var $this = $(this);
			var href = $this.attr('href').replace('#', '');
			var $parent = $this.closest('li');

			var sectionScroll = $('.section#'+ href ).offset().top + 1;

			if ( href == 'home' ) {
				sectionScroll = 0;
			}

			$('html, body').animate({
				scrollTop: sectionScroll
			}, 600);

			if ( !$parent.hasClass('current') ) {
				$parent.addClass('current').siblings('li').removeClass('current');
			}

			if ( $win.width() < 768 ) {
				$('.navigation, .con').removeClass('active');
			}
		});

		$('.con').on('click', function(e) {
			e.preventDefault();

			var $this = $(this);
			var $navUl = $('.navigation');

			if ( $this.hasClass('active') ) {
				$this.removeClass('active');
				$navUl.removeClass('active');
			} else {
				$this.addClass('active');
				$navUl.addClass('active');
			}
		});
		
	});

})(jQuery, window, document);
