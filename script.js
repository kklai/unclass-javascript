$(document).ready(function(){


	var cat_pics=['cat.jpg','cat-two.jpg', 'cat-three.jpg', 'cat-four.jpg'];


	// ('one').onmouseover=function(){
	// 	$('#cat').fadeOut();
	// 	console.log("mouseover image one");
	// };

	$('.thumbs').mouseover(function(){
		var index = $('.thumbs').index($(this));
		$('#cat').attr('src', cat_pics[index]);
		counter = index;
	});


	var counter = 0;


	$('#previous').click(function(){
		if (counter !=0) {
			counter--;
		console.log(counter);
		$('#cat').attr('src', cat_pics[counter]);
	}
		else {
			counter=(cat_pics.length-1);
		$('#cat').attr('src', cat_pics[counter]);
		}
	});


	$('#next').click(function(){
		if (counter !=3)
		{
			counter++;
		console.log(counter);
		$('#cat').attr('src', cat_pics[counter]);
		}
		else	{
			counter=0;
		$('#cat').attr('src', cat_pics[counter]);
		}
	});


	$('.thumbs').click(function(){
		var index = $('.thumbs').index($(this));
		$('#cat').attr('src', cat_pics[index]);
		counter = index;
	});


	// $('#one').click(function(){
	// 	console.log("You clicked on the first drunk cat!");
	// 	$('#cat').fadeOut(function(){
	// 		$('#cat').attr('src', 'cat.jpg');
	// 	});
	// 	$('#cat').fadeIn();
	// });

	// $('#two').click(function(){
	// 	console.log("Second drunk cat!");
	// 	$('#cat').fadeOut(function(){
	// 		$('#cat').attr('src', 'cat-two.jpg');
	// 	})
	// 	$('#cat').fadeIn();
	// });

	// $('#three').click(function(){
	// 	console.log("Third drunk kitty");
	// 	$('#cat').fadeOut(function(){
	// 		$('#cat').attr('src', 'cat-three.jpg');
	// 	})
	// 	$('#cat').fadeIn();
	// });

	// $('#four').click(function(){
	// 	console.log("Fourth scary tiger");
	// 	$('#cat').fadeOut(function(){
	// 		$('#cat').attr('src', 'cat-four.jpg');
	// 	})
	// 	$('#cat').fadeIn();
	// });

});