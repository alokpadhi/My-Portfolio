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
/*
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    document.getElementById("navbar").style.top = "0";
  } else {
    document.getElementById("navbar").style.top = "-50px";
  }
}*/