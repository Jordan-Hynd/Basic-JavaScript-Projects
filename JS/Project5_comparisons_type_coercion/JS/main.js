function my_Function () { //creating the function
    document.getElementById("Test").innerHTML = 0/0; //id the function and call method
}

function my_Function2 () { //creating and naming function
    document.getElementById("Test2").innerHTML = isNaN("This is a string"); //id and call method
}

function my_Function3 () { //creating and naming function
    document.getElementById("Test3").innerHTML = isNaN("007"); //id and call method
}

function my_Function4 () { //creating and naming the function
    document.getElementById("Test4").innerHTML = 1.797631332432134513412E+10308 + "<br>" + -1.797631332432134513412E+10308 ; //id and call method
}

function Function1 () { //creating and naming the fuction
    document.write(10 == 10); //call method
    
}

function Function2 () { //creating and naming the function
    x = 100; //define var
    y = 100; //define var
    document.write(x === y); //call method and operator
}

function logic_function () { //creating and namming the fucntion
    document.write(5 > 2 &&  10 > 4); //call method and operator
}

function logic_function2 () { //creating and naming the function 
    document.write(5 > 10 ||  10 > 4); //call method and operator 
}

function logic_function3 () { //creating and naming function
    document.write(!(5 > 2 && 10 > 4)); //call method and operator
}


function Ride_Function () {
    var Height, Can_ride;
    Height = document.getElementById("Height").value;
    Can_ride = (Height < 52) ? "You are too short":"You are tall enough";
    document.getElementById("Ride").innerHTML = Can_ride + " to ride.";
}