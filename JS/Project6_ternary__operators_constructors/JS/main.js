

function Age_Function () {
    var Age, Can_Vote;
    Age = document.getElementById("Age").value;
    Can_Vote = (Age < 18) ? "You are too young":"You are old enough";
    document.getElementById("Vote").innerHTML = Can_Vote + " to vote.";
}


function Computer(Make, Model, Year, Color) {
    this.Computer_Make = Make;
    this.Computer_Model = Model;
    this.Computer_Year = Year;
    this.Computer_Color = Color;
}
var Jordan = new Computer ("Toshiba", "Satellite", 2017, "Silver");
var Chevy = new Computer("Lenovo", "laptop", 2020, "Black");
function Computer_Function () {
    document.getElementById("Keywords_and_Constructors2").innerHTML =
    "Chevy has a " + Chevy.Computer_Color + "-colored " + Chevy.Computer_Make + " " + Chevy.Computer_Model;
}

function count_Function () {
    document.getElementById("Nested_Function").innerHTML = Count();
    function Count() {
        var Starting_point = 9;
        function Plus_one() {Starting_point += 1;}
        Plus_one();
        return Starting_point;
    }
}