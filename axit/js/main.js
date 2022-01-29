$(document).ready(function(){

	$('.tab-one').addClass('active');

	$('.one-content').show();
	$('.two-content').hide();
	$('.three-content').hide();

	$('.tab-one').click(function(){
		$('.one-content').show();
		$('.two-content').hide();
		$('.three-content').hide();

		$('.tab-one').addClass('active');
		$('.tab-two').removeClass('active');
		$('.tab-three').removeClass('active');
	});

	$('.tab-two').click(function(){
		$('.one-content').hide();
		$('.two-content').show();
		$('.three-content').hide();

		$('.tab-one').removeClass('active');
		$('.tab-two').addClass('active');
		$('.tab-three').removeClass('active');
	});

	$('.tab-three').click(function(){
		$('.one-content').hide();
		$('.two-content').hide();
		$('.three-content').show();

		$('.tab-one').removeClass('active');
		$('.tab-two').removeClass('active');
		$('.tab-three').addClass('active');
	});
});