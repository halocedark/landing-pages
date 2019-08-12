$( document ).ready(function() 
{

	'use strict';
	
	/* Start Marketing 02 */
	function setupMarketing02()
	{

		var feature = $('.marketing02-wrapper .features .feature');

		feature.on('click', function()
		{
			$(this).addClass('active').siblings().removeClass('active');
		});

	}
	/* End Marketing 02 */

	// Call Functions
	setupMarketing02();


});