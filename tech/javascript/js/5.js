/*var counter = function(arr){
  return 'There are ' + arr.length + ' elements in this array';
};

var adder = function(a,b){
  return `the sum of the two numbers is ${a+b}`;  //es6 format
};

var pi = 3.142;

module.exports.mycounter = counter;
module.exports.myadder = adder;
module.exports.mypi = pi;
*/
//see file 6.js

/*
module.exports.mycounter = function(arr){
  return 'There are ' + arr.length + ' elements in this array';
};

module.exports.myadder = function(a,b){
  return `the sum of the two numbers is ${a+b}`;  //es6 format
};

module.exports.mypi = 3.142;

*/


var counter = function(arr){
  return 'There are ' + arr.length + ' elements in this array';
};

var adder = function(a,b){
  return `the sum of the two numbers is ${a+b}`;  //es6 format
};

var pi = 3.142;

module.exports = {
  mycounter : counter,
  myadder : adder,
  mypi : pi
};
