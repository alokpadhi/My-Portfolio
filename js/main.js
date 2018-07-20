
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
$(document).bind('keyup', function(e) {
  if(e.which == 39){
      $('.carousel').carousel('next');
  }
  else if(e.which == 37){
      $('.carousel').carousel('prev');
  }
});
// Initialize google maps
function myMap() {
  var myCenter = new google.maps.LatLng(19.319352,84.795025);
  var mapCanvas = document.getElementById("map");
  var mapOptions = {center: myCenter, zoom: 12};
  var map = new google.maps.Map(mapCanvas, mapOptions);
  var marker = new google.maps.Marker({position:myCenter});
  marker.setMap(map);
}

//google translator
function googleTranslateElementInit() {
  new google.translate.TranslateElement({pageLanguage: 'en'}, 'google_translate_element');
}