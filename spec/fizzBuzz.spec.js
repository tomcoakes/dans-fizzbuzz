
var fizzBuzz = require('../src/fizzBuzz.js');

var expect = require('chai').expect;

describe('fizzBuzz game', function() {
  it('should return 1 when we pass it the number 1', function() {
    expect(fizzBuzz.play(1)).to.equal(1);
  });

  it('should return 2 when we pass it the number 2', function() {
    expect(fizzBuzz.play(2)).to.equal(2);
  });

  it('should return Fizz when we pass it a multiple of 3', function() {
    expect(fizzBuzz.play(3)).to.equal('Fizz');
  });

  it('should return Buzz when we pass it a multiple of  5', function() {
    expect(fizzBuzz.play(5)).to.equal('Buzz');
  });

  it('should return FizzBuzz when we pass it a multiple of 3 and 5', function() {
    expect(fizzBuzz.play(15)).to.equal('FizzBuzz');
  });

  describe('autoplay feature', function() {
    it('plays only the first round of fizzBuzz when you pass it a 1', function() {
      expect(fizzBuzz.autoplay(1)).to.eql([1]);
    });

    it('plays two rounds of fizzBuzz when you pass it a 2', function() {
      expect(fizzBuzz.autoplay(2)).to.eql([1, 2]);
    });
  });
});


