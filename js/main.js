/*
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    document.getElementById("navbar").style.top = "0";
  } else {
    document.getElementById("navbar").style.top = "-50px";
  }
}*/
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
var quotes = [
  "When something is important enough, you do it even if the odds are not in your favor.--Elon Musk",
  "If you get up in the morning and think the future is going to be better, it is a bright day. Otherwise, it's not.--Elon Musk",
  "There have to be reasons that you get up in the morning and you want to live. Why do you want to live? What's the point? What inspires you? What do you love about the future? If the future does not include being out there among the stars and being a multi-planet species, I find that incredibly depressing.--Elon Musk",
  "When Henry Ford made cheap, reliable cars, people said, 'Nah, what's wrong with a horse?' That was a huge bet he made, and it worked.--Elon Musk",
  "Persistence is very important. You should not give up unless you are forced to give up.--Elon Musk",
  "It's OK to have your eggs in one basket as long as you control what happens to that basket.--Elon Musk",
  "If you go back a few hundred years, what we take for granted today would seem like magic-being able to talk to people over long distances, to transmit images, flying, accessing vast amounts of data like an oracle. These are all things that would have been considered magic a few hundred years ago.",
  "We're going to make it happen. As God is my bloody witness, I'm hell-bent on making it work.--Elon Musk",
  "The first step is to establish that something is possible; then probability will occur.--Elon Musk",
  "I think it is possible for ordinary people to choose to be extraordinary.--Elon Musk",
  "I could either watch it happen or be a part of it.--Elon Musk",
  "Don't let the noise of others’ opinions drown out your own inner voice. --Steve Jobs",
  "Being the richest man in the cemetery doesn’t matter to me. Going to bed at night saying we’ve done something wonderful… that’s what matters to me. --steve jobs",
  "Creativity is just connecting things.--Steve Jobs",
  "Have the courage to follow your heart and intuition. They somehow already know what you truly want to become. Everything else is secondary.--Steve Jobs",
  "You can’t connect the dots looking forward; you can only connect them looking backwards. So you have to trust that the dots will somehow connect in your future.--Steve Jobs",
  "Sometimes when you innovate, you make mistakes. It is best to admit them quickly, and get on with improving your other innovations--Steve Jobs",
  "Simple can be harder than complex: You have to work hard to get your thinking clean to make it simple. But it’s worth it in the end because once you get there, you can move mountains--Steve Jobs",
  "Your time is limited, so don’t waste it living someone else’s life.--Steve Jobs",
  "Be a yardstick of quality. Some people aren’t used to an environment where excellence is expected--Steve Jobs",
  "Remembering that you are going to die is the best way I know to avoid the trap of thinking you have something to lose. You are already naked. There is no reason not to follow your heart.--Steve Jobs",
  "You have to be burning with an idea, or a problem, or a wrong that you want to right. If you’re not passionate enough from the start, you’ll never stick it out--Steve Jobs",
  "Stay hungry. Stay foolish.--Steve Jobs",
  "When you grow up you tend to get told that the world is the way it is and your life is just to live your life inside the world. Try not to bash into the walls too much. Try to have a nice family life, have fun, save a little money. That’s a very limited life. Life can be much broader once you discover one simple fact: Everything around you that you call life was made up by people that were no smarter than you. And you can change it, you can influence it… Once you learn that, you’ll never be the same again.--Steve Jobs",
  "The training is nothing! The will is everything! The will to act.",
  "Why do we fall? So we can learn to pick ourselves back up.",
  "If you’re good at something, never do it for free.",
  "It’s not who we are underneath, but what we do that defines us.",
  "A hero can be anyone. Even a man doing something as simple and reassuring as putting a coat around a little boy’s shoulders to let him know that the world hadn’t ended.",
  "Your anger gives you great power. But if you let it, it will destroy you… As it almost did me.",
  "Sometimes the truth isn’t good enough, sometimes people deserve more. Sometimes people deserve to have their faith rewarded",
  "If you make yourself more than just a man, if you devote yourself to an ideal, and if they can’t stop you, then you become something else entirely… Legend Mr Wayne."
]

function newQuote() {
  var randomNumber = Math.floor(Math.random() * (quotes.length));
  document.getElementById('quoteDisplay').innerHTML = quotes[randomNumber];
}

