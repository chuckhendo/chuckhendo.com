$(document).ready(function() {
	$('.site').on('mouseenter', function() {
		var $video = $(this).find('video');
		$video.css('display', 'block');
		$video[0].play();
	}).on('mouseleave', function() {
		var $video = $(this).find('video');
		$video.css('display', 'none');
		$video[0].stop();
	})
})
