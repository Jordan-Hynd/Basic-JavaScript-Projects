function Call_Loop() {
    var num = "";
    var X = 10;
    while (X > 0) {
        num += "<br>" + X;
        X--;
    }
    document.getElementById("Loop").innerHTML = num;
}

function String_Function() {
    var str = "This is my function.";
    var n = str.length;
    document.getElementById("strf").innerHTML = n;
  }

  var Instruments = ["Guitar", "Drums", "Piano", "Bass", "Violin", "Trumpet", "Flute"];
  var Content = "";
  var Y;
  function for_loop() {
      for (Y = 0; Y < Instruments.length; Y++) {
          Content += Instruments[Y] + "<br>";
      }
      document.getElementById("List_of_Instruments").innerHTML = Content;
  }

  function array_function() {
      var schedule = [];
      schedule[0] = "wake up";
      schedule[1] = "get dressed";
      schedule[2] = "go to work";
      schedule[3] = "go home";
      document.getElementById("array").innerHTML = "it is time to " + schedule[0] + ".";
  }



  function constant_function() {
      const musical_instrument = {type: "guitar", brand:"fender", color:"black"};
      musical_instrument.color = "blue";
      musical_instrument.price = "$900";
      document.getElementById("constant").innerHTML = "The cost of the " + musical_instrument.type + " was " + musical_instrument.price;
  }
  constant_function["musical_instrument.wh"] = "heavy";
  constant_function["musical_instrument.price"] = "$800";
