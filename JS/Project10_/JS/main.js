//call loop function
function Call_Loop() {
    var num = "";
    let X = 10;
    while (X > 0) {
        num += "<br>" + X;
        X--;
    }
    document.getElementById("Loop").innerHTML = num;
}
//string function
function String_Function() {
    var str = "This is my function.";
    var n = str.length;
    document.getElementById("strf").innerHTML = n;
  }
//loop function
  var Instruments = ["Guitar", "Drums", "Piano", "Bass", "Violin", "Trumpet", "Flute"];
  var Content = "";
  var Y;
  function for_loop() {
      for (Y = 0; Y < Instruments.length; Y++) {
          Content += Instruments[Y] + "<br>";
      }
      document.getElementById("List_of_Instruments").innerHTML = Content;
  }
//function for array
  function array_function() {
      var schedule = [];
      schedule[0] = "wake up";
      schedule[1] = "get dressed";
      schedule[2] = "go to work";
      schedule[3] = "go home";
      document.getElementById("array").innerHTML = "it is time to " + schedule[0] + ".";
  }

//function for const
  function constant_function() {
      const musical_instrument = {type: "guitar", brand:"fender", color:"black"};
      musical_instrument.color = "blue";
      musical_instrument.price = "$900";
      musical_instrument.type = "guitar";
      document.getElementById("constant").innerHTML = "The cost of the " + musical_instrument.type + " was " + musical_instrument.price;
  }
//function for let
  function let_f() {
      let X = 100;
      document.getElementById("let_f").innerHTML = "x is equal to " + X;
  }
//return statement
var X = math_function(500, 624);

function math_function(A, B) {
    return A * B
}
document.getElementById("math").innerHTML = X;

//object data structure 
let feb_27 = {
    temp: "cold ",
    light: "dark ",
    wind: "windy ",
    description: function () {
        return "Today was a "  + this.temp + "and " + this.wind + "day";
    }
};
document.getElementById("today").innerHTML = feb_27.description();

//break loop
function break_loop() {
    var text = "";
    var A;
    for (A = 0; A < 8; A++) {
      if (A === 4) { break; }
      text += "The number is " + A + "<br>";
    }
document.getElementById("break").innerHTML = text;
}

//
function cont_loop() {
    var text = "";
    var A;
    for (A = 0; A < 8; A++) {
      if (A === 4) { continue; }
      text += "The number is " + A + "<br>";
    }
document.getElementById("cont").innerHTML = text;
}