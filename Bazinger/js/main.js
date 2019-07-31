$( document ).ready(function() 
{

	'use strict';
	
	/* Start Header */
	function setupHeader()
	{

		var navmenu = $('.header-wrapper .header-navbar .navbar-menu ul');

		// Set Menu Item Active
		navmenu.on('click', function(e) 
		{
			
			var target = $(e.target);
			var activeClass = 'active';

			if ( target.is('li') ) 
			{
				target.addClass(activeClass).siblings().removeClass(activeClass);	
				$('html, body').animate(
				{
				  scrollTop: $( target.data('section') ).offset().top
				}, 1000);
			}
			else if ( target.is('a') ) 
			{
				target.parent().addClass(activeClass).siblings().removeClass(activeClass);	
				$('html, body').animate(
				{
				  scrollTop: $( target.parent().data('section') ).offset().top
				}, 1000);
			}
			
		});

	}
	/* End Header */
	function setupVideo()
	{

		var playVideo = $('.video-wrapper .video #playVideo');

		// Open Video Popup
		playVideo.on('click', function(e)
		{
			e.preventDefault();
			popupVideo('sK50VeGnqeY');
		});

	}
	/* Start Video */
	function popupVideo(videoID)
	{

		if ( videoID == '' || videoID == undefined )
			return false;

		var videoHTML = `
			<div class="container p-0 video-popup" id="videoDemo">
				<div class="header">
					<a href="javascript:void()" class="dismiss" id="dismiss">&times;</a>
				</div>
				<div class="content">
					<iframe class="playing-video" src="https://www.youtube.com/embed/`+videoID+`" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"></iframe>
				</div>
			</div>
		`;

		// Add Video to Window Overlay
		addToWindowOverlay(videoHTML);
		// Add Handler To Close Video and Remove HTML From Window Overlay
		var dismiss = $('#videoDemo #dismiss');

		dismiss.on('click', function(e)
		{
			e.preventDefault();
			removeFromWindowOverlay();
			$(this).off('click');
		});

	}
	/* End Video */
	/* Start Window Overlay */
	// Change HTML
	function addToWindowOverlay(html)
	{

		if ( html == '' || html == undefined )
			return false;

		var windowOverlay = $('#windowOverlay');

		if ( windowOverlay == undefined )
			return false;

		windowOverlay.html(html);
		windowOverlay.fadeIn(200);

	}
	// Remove HTML
	function removeFromWindowOverlay()
	{

		var windowOverlay = $('#windowOverlay');

		if ( windowOverlay == undefined )
			return false;
		
		windowOverlay.html('');
		windowOverlay.fadeOut(200);

	}
	/* End Window Overlay */

	// Call Functions
	setupHeader();
	setupVideo();


});