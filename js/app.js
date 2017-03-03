$(document).foundation();

function getHeight(element){
    return $(element).height() + 20 +'px';
}
frmHeight = getHeight('.search-form');
console.log(frmHeight);
$('.fit').css('height', frmHeight);

$(function(){
    $('.datepicker').datepicker({
        dateFormat: 'dd-mm-yy' 
    });
    $('#flightDepartureDate').datepicker('setDate', new Date());
    $('#flightReturnDate').datepicker('setDate', 'Now'+1);
    $('#busdeparture').datepicker('setDate', new Date());
    $('#busreturn').datepicker('setDate', 'Now'+1);

 });

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

$('#flightOneWay').click(function(){ 
        $('.hide-return-date').hide();
        $('#flightMultipleDest').removeClass('active');
        $('#flightRoundTrip').removeClass('active');
        $(this).addClass('active');
});
$('#flightRoundTrip').click(function(){ 
        $('.hide-return-date').show();
        $('#flightMultipleDest').removeClass('active');
        $('#flightOneWay').removeClass('active');
        $(this).addClass('active');
});
$('#flightMultipleDest').click(function(){ 
        $('.hide-return-date').hide();
        $('#flightRoundTrip').removeClass('active');
        $('#flightOneWay').removeClass('active');
        $(this).addClass('active');
   });
    


/**************** Search form ends here **********************/

