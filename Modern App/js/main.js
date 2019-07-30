$( document ).ready(function() 
{

	'use strict';
	
	/* Start Header */
	function setupHeader()
	{

		var navmenu = $('.header-wrapper .header-menu ul');

		// Set Menu Item Active
		navmenu.on('click', function(e) 
		{
			
			var target = $(e.target);
			var activeClass = 'active';

			if ( target.is('li') ) 
			{
				target.addClass(activeClass).siblings().removeClass(activeClass);	
			}
			else if ( target.is('a') ) 
			{
				target.parent().addClass(activeClass).siblings().removeClass(activeClass);	
				if ( target.parent().data('name') == 'features' ) 
				{
					$('html, body').animate(
					{
					  scrollTop: $("#FeaturesWrapper").offset().top
					}, 1000);
				}
				else if ( target.parent().data('name') == 'pricing' ) 
				{
					$('html, body').animate(
					{
					  scrollTop: $("#PricingWrapper").offset().top
					}, 1000);
				}
				else if ( target.parent().data('name') == 'download' ) 
				{
					$('html, body').animate(
					{
					  scrollTop: $("#AppDownload").offset().top
					}, 1000);
				}
				else if ( target.parent().data('name') == 'contact' ) 
				{
					$('html, body').animate(
					{
					  scrollTop: $("#ContactSupport").offset().top
					}, 1000);
				}
			}
			
		});

	}
	/* End Header */
	/* Start FAQ */
	function setupFAQ()
	{

		var frequestlyAskedQuestion = $('.faq-wrapper #frequestlyAskedQuestions .faq');

		// Set FAQ Active/Inactive
		frequestlyAskedQuestion.on('click', function(e)
		{
			
			var target = $(e.target);
			var activeClass = 'active';
			if ( target.is('.question') ) 
			{
				target.parent().addClass(activeClass).siblings().removeClass(activeClass);
			}

		});

	}
	/* End FAQ */

	// Call Functions
	setupHeader();
	setupFAQ();


});