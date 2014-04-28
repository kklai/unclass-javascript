$(document).ready(function(){

$("#cat-thumb").click(function(){
	$("#cat").fadeOut(function() {
		$("#cat").attr("src","cat.jpg");
		$("#cat").fadeIn();
		});
	console.log("You clicked on the first image.")
})

$("#cat-two").click(function(){
	$("#cat").fadeOut(function() {
		$("#cat").attr("src","cat-two.jpg");
		$("#cat").fadeIn();
		});
	console.log("You clicked on the second image.")
})

$("#cat-three").click(function(){
	$("#cat").fadeOut(function() {
		$("#cat").attr("src","cat-three.jpg");
		$("#cat").fadeIn();
		});
		console.log("You clicked on the third image.")

})

$("#cat-four").click(function(){
	$("#cat").fadeOut(function() {
		$("#cat").attr("src","cat-four.jpg");
		$("#cat").fadeIn();
		});
		console.log("You clicked on the fourth image.")

})

;

$("#photoID").attr("src",cat.jpg);

});