function Add_Function() { //add function calling global var
    document.write(A + C)
}


var A = 10, B = 20, C = 30; //global var

function Add_Function2() { //add function calling local var
    var D = 18;
    document.write(25 + D)
}

function Add_Function3() { //add function with undefined var. using console.log
    console.log(A + D)
}

function Get_Data() { //conditional statement
    if (new Date().getHours()>18) {
        document.getElementById("Greeting").innerHTML = "Good evening."
    }
}

function Lunch_Time() { //conditional statements
    if (new Date().getHours()>12) {
        document.getElementById("Lunch").innerHTML = "Did you eat lunch?"
    }
}

function Age_Function() {
    Age = document.getElementById("Age").value;
    if (Age >= 18) {
        Vote = "You are old enough to vote!";
    }
    else {
        Vote = "You are not old enough to vote!";
    }
    document.getElementById("How_old_are_you?").innerHTML = Vote;
}

function Oil_Change() { //oil change if else function
    Miles = document.getElementById("Miles").value; //getting input info
    if (Miles >= 5000) { //if statement for input
        Change = "It is time for an oil change!";
    }
    else { //else statement for input
        Change = "Not time to change your oil yet!";
    }
    document.getElementById("How_many_miles?").innerHTML = Change; //response to input
}

function Time_function() { //time of day function
    var Time = new Date().getHours(); //define var and getting real time
    var Reply; //define var
    if (Time < 12 == Time > 0){ //if statement for time of day
        Reply = "It is morning time!";
    }
    else if (Time >= 12 == Time < 18) {
        Reply = "It is afternoon.";
    }
    else {
        Reply = "It is evening time.";
    }
    document.getElementById("Time_of_day").innerHTML = Reply; //response for time of day
}