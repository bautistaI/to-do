$(document).ready(function() 
{
	
	$('form').on('submit', function(e) 
	{
		e.preventDefault();
		var item = $('#item').val();
		$('.todos').append('<li>' + item + '</li>');
		$('#item').val('');

	});
	
	
	$('.todos').on('click', 'li', function() 
	{
			if ($(this).hasClass('done')) 
			{
				$(this).remove();
			}else {
				$(this).addClass('done');
			}
	});
	
	
});