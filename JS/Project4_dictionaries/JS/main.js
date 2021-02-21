function my_Dictionary() {
    var Cars = {
        Make: "Jeep",
        Model: "Wrangler",
        Color: "Red",
        Year: 1995,
    };
    delete Cars.make;
    document.getElementById("Dictionary").innerHTML = Cars.Make;
}