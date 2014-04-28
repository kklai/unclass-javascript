$(document).ready(function(){
	

	
	$('#cat').click(function(){
			alert("you are a cat");
			$('#kitty').attr('src', 'cat.jpg');
			$('#cat').fadeOut('slow', function() { //not sure if this works
				$('#kitty').fadeIn(); //....and the original picture doesn't come back?
		});	});	

	$('#cat2').click(function(){
			alert("you are a cat2");
			$('#kitty').attr('src', 'cat-two.jpg');
			$('#cat2').fadeOut('slow', function() {
				$('#kitty').fadeIn();
		});	});	
	$('#cat3').click(function(){
			alert("you are a cat3");
			$('#kitty').attr('src', 'cat-three.jpg');
			$('#cat3').fadeOut('slow', function() {
				$('#kitty').fadeIn();
		});	});	
	$('#cat4').click(function(){
			alert("you are a cat4");
			$('#kitty').attr('src', 'cat-four.jpg');
			$('#cat4').fadeOut('slow', function() {
				$('#kitty').fadeIn(); 
		});	});	

});