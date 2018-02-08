$(document).ready(function() {

	var direction = 'top';
	
	$('.main-link').click(function() {
		var color = $(this).css("color");
		console.log(color);
		var winHeight = $(window).height();

		var newDir = $(this).attr('name');

		
		if (newDir != direction)
			$('.hidden-page').addClass('hp-' + newDir)
				.removeClass('hp-' + direction);

		var options = {};
		options[newDir] = 0;
		$(".hidden-page").css("background-color", color);
		$('.hidden-page').removeClass('hp-'+newDir, 1250);
		direction = newDir;
	});

	$('.close, .title-close').click(function() {
		$('.hidden-page').addClass('hp-'+direction, 1250);
	})

});