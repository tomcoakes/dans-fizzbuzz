
module.exports = {
  play: play,
  autoplay: autoplay
}


function play(number) {
  if(number % 15 === 0) {
    return 'FizzBuzz';
  } else if (number % 3 === 0) {
    return 'Fizz';
  } else if (number % 5 === 0) {
    return 'Buzz';
  } else {
    return number;
  }
};


function autoplay(numberOfRounds) {
  var output = [];
  for(var i = 1; i <= numberOfRounds; i = i + 1) {
    output.push(play(i));
  }

  return output;
};
