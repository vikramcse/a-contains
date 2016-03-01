var expect = require('chai').expect;
var contains = require('./index.js');

describe('Tests for contains in list or object', function () {
  it('should return true if the value contains in object', function () {
    var arr = { 0: 'a', 1: 'b', 2: 'c' };
    expect(contains(arr, 'a')).to.be.eql(true);
  });

  it('should return true if the value contains in list of numbers', function () {
    var arr = [1, 2, 3, 4, 5, 6];
    expect(contains(arr, 5)).to.be.eql(true);
  });

  it('should return true if the value contains in object from given index', function () {
    var arr = { 0: 'a', 1: 'b', 2: 'c' };
    expect(contains(arr, 'c', 1)).to.be.eql(true);
  });

  it('should return true if the value contains in list of numbers  from given index', function () {
    var arr = [1, 2, 3, 4, 5, 6];
    expect(contains(arr, 3, 2)).to.be.eql(true);
  });

  it('should return false if the value contains in object', function () {
    var arr = { 0: 'a', 1: 'b', 2: 'c' };
    expect(contains(arr, 'z')).to.be.eql(false);
  });

  it('should return false if the value contains in list of numbers', function () {
    var arr = [1, 2, 3, 4, 5, 6];
    expect(contains(arr, 8)).to.be.eql(false);
  });

  it('should return false if the value contains in object from given index', function () {
    var arr = { 0: 'a', 1: 'b', 2: 'c' };
    expect(contains(arr, 'a', 1)).to.be.eql(false);
  });

  it('should return false if the value contains in list of numbers  from given index', function () {
    var arr = [1, 2, 3, 4, 5, 6];
    expect(contains(arr, 2, 2)).to.be.eql(false);
  });
});
