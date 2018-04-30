/*setTimeout(function(){
  console.log("Hello after 3 seconds");
}, 3000);
*/

var time = 0;

var timer = setInterval(function(){
  time = time + 2;
  console.log(time + " seconds have passed");

  if(time > 5)
  {
    clearInterval(timer);
  }
},2000);
