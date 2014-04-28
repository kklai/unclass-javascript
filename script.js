$(document).ready(function(){
  // use $(“#INSERT-YOUR-OWN-ID”).attr(“src”, imgFileName.jpg); to change the image after click

	$('#one').click(function(){
		console.log("You clicked on the first drunk cat!");
		$('#cat').fadeOut(function(){
			$('#cat').attr('src', 'cat.jpg');
		});
		$('#cat').fadeIn();
	});

	$('#two').click(function(){
		console.log("Second drunk cat!");
		$('#cat').fadeOut(function(){
			$('#cat').attr('src', 'cat-two.jpg');
		})
		$('#cat').fadeIn();
	});

	$('#three').click(function(){
		console.log("Third drunk kitty");
		$('#cat').fadeOut(function(){
			$('#cat').attr('src', 'cat-three.jpg');
		})
		$('#cat').fadeIn();
	});

	$('#four').click(function(){
		console.log("Fourth scary tiger");
		$('#cat').fadeOut(function(){
			$('#cat').attr('src', 'cat-four.jpg');
		})
		$('#cat').fadeIn();
	});

});