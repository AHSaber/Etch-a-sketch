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

		$('.Tile').height(960/input);
		$('.Tile').width(960/input);
	});

	$('td').on('mouseenter', function(){
		$(this).css({'background-color':'white'});
	});
	
});