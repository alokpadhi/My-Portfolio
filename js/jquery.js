$("#fadeinoutbtn").click(function(){
    $("#python").fadeToggle();
    $("#js").fadeToggle("slow");
    $("#bootstrap").fadeToggle(2000);
    $("#jquery").fadeToggle(2500);
    $("#django").fadeToggle(3000);
    $("#sklearn").fadeToggle(3500);
    $("#pandas").fadeToggle(4000);
    $("#linux").fadeToggle(4500);
    $("#sql").fadeToggle(5000);
});

$(document).bind('keyup', function(e) {
    if(e.which == 39){
        $('.carousel').carousel('next');
    }
    else if(e.which == 37){
        $('.carousel').carousel('prev');
    }
  });