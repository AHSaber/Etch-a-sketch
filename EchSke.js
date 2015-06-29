$(document).ready(function(){
	//Function for spawning a Grid for the given user input
	$('.submit').on('click', function(){
		var input = $('input').val();
		$('#Table').remove();
		$('.grid').append('<table id="Table"></table>');
		for(i = 0; i < input; i++)
		{
			$('#Table').append('<tr></tr>');
		}
		for(j = 0; j < input; j++)
		{
			$('#Table tbody tr').append('<td class="Tile"></td>');

		}

		$('.Tile').on('mouseenter', function(){
			$(this).css({'background-color':'blue'});
		});
		$('.Tile').height(960/input);
		$('.Tile').width(960/input);
	});

	$('#Header').on('mouseenter', function(){
		$('#Header').animate({'height':'1.75em', 'width':'11em'}, 300);
	});
	$('#Header').on('mouseleave', function(){
		$('#Header').animate({'height':'1.5em', 'width':'10em'}, 300);
	});

	

});