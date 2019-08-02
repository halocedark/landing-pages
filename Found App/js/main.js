$( document ).ready(function() 
{

	'use strict';

	/* Start Window Overlay Class */
	function WindowOverlay(overlayNode = '#windowOverlay')
	{

		this.overlay = $(overlayNode);
		if ( this.overlay == undefined )
			return false;

		// Get Window Overlay
		this.current = function()
		{
			return this.overlay;
		}
		// Toggle Window Overlay
		this.toggleOverlay = function(duration = 200)
		{
			if ( this.overlay.css('display') == 'block' )
				this.overlay.fadeOut(duration);
			else
				this.overlay.fadeIn(duration);
		}
		// Show Window Overlay
		this.showOverlay = function(duration = 200)
		{
			this.overlay.fadeIn(duration);
		}
		// Hide Window Overlay
		this.hideOverlay = function(duration = 200)
		{
			this.overlay.fadeOut(duration);
		}

	}
	/* End Window Overlay Class */
	/* Start Page Scroll */
	function setupPageScroll()
	{

		var page = $(window);
		var downloadsWrapper = $('#downloadsWrapper');
		var downloadsCounter = $('#downloadsWrapper .total-downloads #counter');
		var IsDownCount = false;
		var howItWorksWrapper 		 = $('#howItWorksWrapper');
		var howItWorksWrapperImage = howItWorksWrapper.find('#display');
		var howItWorksWrapperSteps = howItWorksWrapper.find('.step');
		var benefitsWrapper 		   = $('#benefitsWrapper');
		var benefitsWrapperImage   = benefitsWrapper.find('#display');
		var benefitsWrapperBenefit = benefitsWrapper.find('.benefit');
		var featuresWrapper            = $('#featuresWrapper');
		var featuresWrapperFeatureIcon = featuresWrapper.find('.feature .feature-icon');
		var downloadAppWrapper  				 = $('#downloadAppWrapper');
		var downloadAppWrapperStoreLinks = downloadAppWrapper.find('.links .store-link');

		// On Scroll
		page.scroll(function()
		{
			
			var $this = $(this);
			if ( $this.scrollTop() >= ( downloadsWrapper.offset().top - downloadsWrapper.outerHeight() ) ) 
			{
				if ( !IsDownCount )
				{
					downloadsCounter.prop('Counter',0).animate(
					{
			      Counter: downloadsCounter.text()
			    }, {
			        duration: 4000,
			        easing: 'swing',
			        step: function (now) {
			          downloadsCounter.text(Math.ceil(now));
			        }
			    });	
			    IsDownCount = true;
				}
			}
			if ( $this.scrollTop() >= ( howItWorksWrapper.offset().top - howItWorksWrapper.outerHeight()  ) )
			{
				howItWorksWrapperImage.addClass('fadeInLeftBig');
				howItWorksWrapperSteps.addClass('fadeIn');
			}
			if ( $this.scrollTop() >= ( benefitsWrapper.offset().top - benefitsWrapper.outerHeight()  ) )
			{
				benefitsWrapperImage.addClass('fadeInRightBig');
				benefitsWrapperBenefit.addClass('fadeIn');
			}
			if ( $this.scrollTop() >= ( featuresWrapper.offset().top - featuresWrapper.outerHeight()  ) )
			{
				featuresWrapperFeatureIcon.addClass('fadeInUp');
			}
			if ( $this.scrollTop() >= ( downloadAppWrapper.offset().top - downloadAppWrapper.outerHeight()  ) )
			{
				downloadAppWrapperStoreLinks.addClass('fadeIn');
			}

		});

	}
	/* End Page Scroll */
	/* Start Header */
	function setupHeader()
	{

		var mainContent    = $('#mainContent');
		var navmenu 			 = $('#sidebarWrapper .navbar-menu ul');
		var sidebarToggle  = $('.header-wrapper .top-wrap #sidebarToggle');
		var sidebarWrapper = $(sidebarToggle.data('sidebar'));

		// Set Menu Item Active
		navmenu.on('click', function(e) 
		{
			
			var target = $(e.target);
			var scrollDuration = 500;

			if ( target.is('li') ) 
			{
				$('html, body').animate(
				{
				  scrollTop: $( target.data('section') ).offset().top
				}, scrollDuration);
			}
			else if ( target.is('a') ) 
			{
				$('html, body').animate(
				{
				  scrollTop: $( target.parent().data('section') ).offset().top
				}, scrollDuration);
			}
			
		});
		// Show Sidebar
		// Initialize Window Overlay Class
		var overlay  = new WindowOverlay();
		var duration = 500;
		var offsetSize = sidebarWrapper.width() + 1;
		sidebarToggle.on('click', function(e)
		{
			sidebarWrapper.animate({ marginRight: '0px' }, duration);
			mainContent.animate(
			{ 
				marginRight: offsetSize+'px', 
				marginLeft: '-'+offsetSize+'px'
			}, duration);
			overlay.showOverlay(duration);
		});
		// Hide Sidebar
		overlay.current().on('click', function()
		{
			sidebarWrapper.animate({ marginRight: '-'+offsetSize+'px' }, duration);
			mainContent.animate(
			{ 
				marginRight: '0px', 
				marginLeft: '0px'
			}, duration);
			overlay.hideOverlay(duration);
		});

	}
	/* End Header */

	// Call Functions
	setupHeader();
	setupPageScroll();


});