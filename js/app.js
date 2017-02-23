$(document).foundation();

$('#dropdown').click(function(){
	console.log('clicked');
});
/**************** Search form begins here **********************/

$('.wide-menu').click(function(){
	if($(this).attr('id') == 'flight-search-menu-item'){
		$('#hotel-search-menu-item').removeClass('active');
		$('#bus-search-menu-item').removeClass('active');
		$(this).addClass('active');
		$('.hotels-search-form').addClass('hide');
		$('.bus-search-form').addClass('hide');
		$('.flight-search-form').removeClass('hide')
		

	}else if($(this).attr('id') == 'hotel-search-menu-item'){
		$('#flight-search-menu-item').removeClass('active');
		$('#bus-search-menu-item').removeClass('active');
		$(this).addClass('active');
		$('.flight-search-form').addClass('hide');
		$('.bus-search-form').addClass('hide');
		$('.hotels-search-form').removeClass('hide')
		
	}else if($(this).attr('id') == 'bus-search-menu-item'){
		$('#flight-search-menu-item').removeClass('active');
		$('#hotel-search-menu-item').removeClass('active');
		$(this).addClass('active');
		$('.flight-search-form').addClass('hide');
		$('.hotels-search-form').addClass('hide');
		$('.bus-search-form').removeClass('hide')
		
	}

});

/**************** Search form ends here **********************/