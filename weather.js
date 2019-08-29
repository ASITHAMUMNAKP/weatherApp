
//let wether=[{cities: ["bangalore,karnataka", "chennai,tamilnadu", "calicut,kerala", "kochi,kerala"]},
//{temp:[20, 22, 24, 27]},  {ses:["rainy", "sunny", "rainy", "sunny"]} ];
let cities = ["bangalore,karnataka", "chennai,tamilnadu", "calicut,kerala", "kochi,kerala"];
let temp = [20, 22, 24, 27];
let ses = ["rainy", "sunny", "rainy", "sunny"];
var day = new Date();
var n = day.getDay();
let week = ['sunday', 'Monday', 'Tuesday', 'Wenesday', 'Thursday', 'friday', 'saturday'];
function changeCity(unit = 0) {
    var id = Number(document.getElementById("citySelect").value);//get element by id returns string so convrt to number
    document.getElementById("place").innerText = cities[id];//wether.cities[id];
    document.getElementById("date").innerText = week[n] + " " + new Date().getHours() + ":" + new Date().getMinutes();
    document.getElementById("cityDegValue").innerText = temp[id];//wether.temp[id];
    document.getElementById("cond").innerText = ses[id];//wether.temp[id];
    document.getElementById("unit").innerText = 'C';
    if (unit == 1) {
        document.getElementById("unit").innerText = 'F';
        document.getElementById("cityDegValue").innerText = temp[id] * Math.round(((9 / 5) + 32));
    }
}