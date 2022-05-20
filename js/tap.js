$('.tab-menu a').on('click', function(){
	var a = $(this);
	var idx = a.index();
	var box = a.closest('.tab-area');
	box.find('.hidden-area').removeClass('on');
	box.find('.tab-menu a').removeClass('on');
	box.find('.hidden-area:eq('+idx+')').addClass('on');
	a.addClass('on');
	return false;
});