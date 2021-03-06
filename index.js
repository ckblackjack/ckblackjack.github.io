function getCardValue(card) {
  if ($('#' + card).hasClass('2')) {
    return 2;
  } else if ($('#' + card).hasClass('3')) {
    return 3;
  } else if ($('#' + card).hasClass('4')) {
    return 4;
  } else if ($('#' + card).hasClass('5')) {
    return 5;
  } else if ($('#' + card).hasClass('6')) {
    return 6;
  } else if ($('#' + card).hasClass('7')) {
    return 7;
  } else if ($('#' + card).hasClass('8')) {
    return 8;
  } else if ($('#' + card).hasClass('9')) {
    return 9;
  } else if ($('#' + card).hasClass('10')) {
    return 10;
  } else if ($('#' + card).hasClass('Jack')) {
    return 10;
  } else if ($('#' + card).hasClass('Queen')) {
    return 10;
  } else if ($('#' + card).hasClass('King')) {
    return 10;
  } else if ($('#' + card).hasClass('Ace')) {
    numAce += 1;
    return 11;
  }
}

function newPlayerCount() {
  playerCount += getCardValue(deck[x]);
}

function checkIfBusted() {
  if (playerCount2 > 21) {
    bust();
  }
}

function bust() {
  $('li').hide();
  $('.Card').hide();
  $('#Deal').show();
}

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

var x = 0;

var downCard = 0;

var playerCount = 0;

var numAce = 0;

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
    playerCount = 0;
    $('.Back').show();
    downCard = deck[x];
    x += 1;
    $('#' + deck[x]).show();
    x += 1;
    $('#' + deck[x]).appendTo('.Hand');
    $('#' + deck[x]).show();
    newPlayerCount();
    x += 1;
    $('#' + deck[x]).appendTo('.Hand');
    $('#' + deck[x]).show();
    newPlayerCount();
    x += 1;
    $('li').show();
    $('#Deal').hide();
  });
  
  $('#Hit').on('click', function() {
    $('#' + deck[x]).appendTo('.Hand');
    $('#' + deck[x]).show();
    newPlayerCount();
    checkIfBusted();
    x += 1;
  });
});
