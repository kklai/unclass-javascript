$(document).ready(function(){

$('.cat').attr('src', cat.jpg);

$('#cat1').click(function(){
	console.log("You clicked on the first image!");
	$('#cat').fadeOut(function(){;
		$('#cat').attr('src', 'cat.jpg');
	})
	$('#cat').fadeIn();
});

$('#cat2').click(function(){
	console.log('You clicked on the second image!');
	$('#cat').fadeOut(function(){;
		$('#cat').attr('src', 'cat-two.jpg');
	})
	$('#cat').fadeIn();
});

$('#cat3').click(function(){
	console.log('You clicked on the third image!');
	$('#cat').fadeOut(function(){;
		$('#cat').attr('src', 'cat-three.jpg');
	})
	$('#cat').fadeIn();
});

$('#cat4').click(function(){
	console.log('You get the idea...');
	$('#cat').fadeOut(function(){;
		$('#cat').attr('src', 'cat-four.jpg');
	})
	$('#cat').fadeIn();
});


});