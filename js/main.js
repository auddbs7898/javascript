// $("#box1").css("background-color","#ff0")

var color = "";
var r = "";
var g = "";
var b = "";
for(var i=0; i<100; i++){
    r = Math.floor(Math.random() * 255);
    g = Math.floor(Math.random() * 255);
    b = Math.floor(Math.random() * 255);
    color = 'style="background-color:rgb('+r+','+g+','+b+')"'
$(".box_wrap").append('<div class="box" '+color+'></div>');
}

/* $("#box1").hover(function(){
}, function(){
}); */
$(".box").on("mouseenter",function(){
 $(this).css({"animation-name":"bganiBack"})
});
$(".box").on("mouseleave",function(){
    $(this).css({"animation-name":"bgani"})
});
