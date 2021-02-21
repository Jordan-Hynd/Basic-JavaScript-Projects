function Subtraction_Function () { //naming the function
    var Subtraction = 5 - 2; //creating the var
    document.getElementById("Math-").innerHTML = "5 - 2  = " + Subtraction; //id the function
}

function Add_Function () { //naming the function
    var Addition = 5 + 2; //creating the var
    document.getElementById("Math+").innerHTML = "5 + 2  = " + Addition; //id the function
}

function Divide_Function () { //naming the function
    var Division = 5 / 2; //creating the var
    document.getElementById("Math/").innerHTML = "5 / 2  = " + Division; //id the function
}

function Multiply_Function () { //naming the function
    var Multiplication = 5 * 2; //creating the var
    document.getElementById("Math*").innerHTML = "5 * 2  = " + Multiplication; //id the function
}

function Modulus_Function () { //naming the function
    var Modulus = 25 % 6; //creating the var
    document.getElementById("Math%").innerHTML = "25 % 6  = " + Modulus; //id the function
}

function Random_Number() { //naming the function
    document.getElementById("Random").innerHTML = "Your number is " + Math.random(); //id the function
  }

  function Plus1() { //naming the function
    var a = 5; //creating the var
    var b = a++; //creating the var
    document.getElementById("Math++").innerHTML = b; //id the function
  }

  function Minus1() { //naming the function
    var c = 6; //creating the var
    var d = --c; //creating the var
    document.getElementById("Math--").innerHTML = d; //id the function
  }