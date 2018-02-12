const fs = require('fs');

let states = ['punjab','haryana','delhi'];

let india = {};   //initialising object with default value
states.map(state => {
  india[state] = {
    BPL : 123456,
    MPL : 45454,
    cities : []
  }
  //console.log(state);
});

india.haryana.cities.push({
  name : "Gurgaon",
  pinCode : 122001
});

india.punjab.cities = {};

let json = JSON.stringify(india,null,2);

fs.writeFile('data.json',json,'utf-8',(err) => {
  if(err) {
    console.log("error");
    return;
  }
  console.log("success");

});
//console.log(india);
//console.log(JSON.stringify(india,null,2));

/*
var x = function(let a) {
  return a*10;
}

let x = (let a) => {
  return a*10;
}

let x = (let a) => a*10;
*/
