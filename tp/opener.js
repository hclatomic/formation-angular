$( document ).ready(function() {

	$('pre').each( function() {
		console.log($(this));
		$(this).css('display', 'none');
		$(this).prev().css('cursor', 'pointer');
		$(this).prev().css('text-decoration', 'underline');
		$(this).prev().on('click', function() {
			if($(this).next().css('display') == 'block') {
				$(this).next().css('display', 'none')
			}
			else {
				$(this).next().css('display', 'block')
			}	
		})
	});
	
	
});

