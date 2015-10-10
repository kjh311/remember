$( document ).ready(function() {
    // alert( "jquery works!!!!!" );

var places = ["England", "France", "Italy", "Switzerland",
"Italy", "Germany", "Greece", "Austria", "Netherlands", "Belgium",
"Denmark", "Sweden", "Ireland", "Spain", "Croatia", "Serbia",
"Czeck Republic", "Hungary", "Turkey", "Israel", "Jordan", "Egypt",
"Oahu", "Maui", "Panama", "Costa Rica", "Columbia", "Peru", "Chile",
"Brazil", "Argentina", "Uraguay", "India", "China", "Japan", "Vietnam",
"Malasia", "Thailand", "Laos", "Cambodia", "Indonesia", "South Korea"];

    // alert( "jquery works!!!!!" );


//function that shuffles the array
  function shuffle(array) {
  var currentIndex = array.length, temporaryValue, randomIndex ;
  // While there remain elements to shuffle...
  while (0 !== currentIndex) {
    // Pick a remaining element...
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;
    // And swap it with the current element.
    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }
  return array;
}

$('.btn').click(function() {
  shuffle(places);
  var item = places[0];
  $('span').html(item);
});

});
