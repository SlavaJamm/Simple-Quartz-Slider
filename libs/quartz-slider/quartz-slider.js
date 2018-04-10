/*$(document).ready(function(){
	$('.quartz-slider__item').first().addClass('active');
	$('.right').click(function(){
		$('.quartz-slider__item').removeClass('active');
		$('.quartz-slider__item').nextS().addClass('active');
	});
});
*/
$(document).ready(function(){
	$('.quartz-slider__item').each(function(e){
		if ( e != 0) 
			$(this).hide();
	});

	$('.nav-quartz-slider.right').click(function(){
		if ($('.quartz-slider__item:visible').length != 0) 
			$('.quartz-slider__item:visible').next().show().prev().hide();
		else {
			$('.quartz-slider__item:visible').hide();
			$('.quartz-slider__item:first').show();
		}
		return false;
	});

	$('.nav-quartz-slider.left').click(function() {
		if ($('.quartz-slider__item:visible').length != 0)
			$('.quartz-slider__item:visible').prev().show().next().hide();
		else {
			$('.quartz-slider__item:visible').hide();
			$('.quartz-slider__item:last').show();
		}
		return false;
	});
});

