function shuffle(array) {
  var currentIndex = array.length, temporaryValue, randomIndex;

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

var theDeck = [
  'AC', 'AD', 'AH', 'AS', '2C', '2D', '2H', '2S', '3C', '3D', '3H', '3S', '4C', '4D', '4H', '4S', '5C', '5D', '5H', '5S', 
  '6C', '6D', '6H', '6S', '7C', '7D', '7H', '7S', '8C', '8D', '8H', '8S', '9C', '9D', '9H', '9S', '10C', '10D', '10H', 
  '10S', 'JC', 'JD', 'JH', 'JS', 'QC', 'QD', 'QH', 'QS', 'KC', 'KD', 'KH', 'KS'
];

var deck = shuffle(theDeck);

$('.Card').hide();
$('li').hide();

$(document).ready(function() {
  $('#Deal').show();
  
  $('li').mouseenter(function() {
    $(this).css("opacity", "1");
  });
  
  $('li').mouseleave(function() {
    $(this).css("opacity", ".5");
  });
  
  $('#Deal').on('click', function() {
    $('.Back').show();
    $('#' + deck[0]).show();
    $('#' + deck[1]).appendTo('.Hand');
    $('#' + deck[2]).appendTo('.Hand');
    $('#' + deck[1]).show();
    $('#' + deck[2]).show();
    $('li').show();
    $('#Deal').hide();
  });
  
  $('#Hit').on('click', function() {
    var x = 3;
    $('#' + deck[x]).appendTo('.Hand');
    $('#' + deck[x]).show();
  });
});
