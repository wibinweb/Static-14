$(function(){
	$("section").hover(function(e){
		e.preventDefault()
		$("section").toggleClass("open");
	});
});

$(function(){
	$("article").hover(function(e){
		e.preventDefault()
		$("article").toggleClass("open");
	});
});

$(function(){
	$("footer").hover(function(e){
		e.preventDefault()
		$("footer").toggleClass("open");
	});
});

