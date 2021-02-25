function full_sentence() { //creating concat function
    var part_1 = "I have "; //defin var 1 - 4
    var part_2 = "made this ";
    var part_3 = "into a complete ";
    var part_4 = "sentence.";
    var whole_sentence = part_1.concat(part_2, part_3, part_4);
    document.getElementById("concatenate").innerHTML  = whole_sentence;
}

function slice_method() { //creating slice function
    var sentence = "This is my slice method string.";
    var section = sentence.slice(11,30);
    document.getElementById("slice").innerHTML = section;
}

function string_Method() { //creating to string function
    var A = 10;
    document.getElementById("Numbers_to_string").innerHTML = A.toString();
}

function precision_Method() { //creating toprecision function
    var A = 1645646321655465.65879865321796;
    document.getElementById("Precision").innerHTML = A.toPrecision(8)
}

function toFixed_Function() { //creating tofixed function
    var anw = 12.65896245;
    var r = anw.toFixed(5);
    document.getElementById("Round").innerHTML = r; 
}

function valueof_Function() { //creating valueof function
    var days = ["Monday ", "Tuesday ", "Wednesday"];
    document.getElementById("D").innerHTML = days.valueOf();
}