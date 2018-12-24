/* $("#bt_run").click(function () {
	$("#box1").animate({
		"margin-left":"90%"
	}, 1000, "linear", function() {
		$(this).css({
     		"margin-left":0
		});
	}); 첫번째자리에는 동작할 css를 삽입한다 
});*/
$("#bt_run").click(function () {
  $(".box").eq(0).animate()	
})