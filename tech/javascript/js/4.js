// A function example

function anotherFunc(fun){
  fun();
}

var sayBye = function() {
  console.log("bye");
}

sayBye();

var a = sayBye

a();

anotherFunc(sayBye);
