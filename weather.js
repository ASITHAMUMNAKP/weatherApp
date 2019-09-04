const cities = new Array("bangalore,karnataka", "chennai,tamilnadu", "calicut,kerala", "kochi,kerala");
const temp = new Array(20, 22, 24, 27);
const ses = new Array("Rainy 🌧️", "Sunny ☀️", "Cloudy ☁️", "Fog 🌫️");
var day = new Date();
let n = day.getDay();
const week = new Array('sunday', 'Monday', 'Tuesday', 'Wenesday', 'Thursday', 'friday', 'saturday');
class changeCity {
    constructor(unit = 0) {
        console.log("here");
        this.id = Number(document.getElementById("citySelect").value);
        document.getElementById("place").innerText = cities[this.id];
        document.getElementById("date").innerText = week[n] + " " + new Date().getHours() + ":" + new Date().getMinutes() + " " + "am";
        document.getElementById("cond").innerText = ses[this.id];
        document.getElementById("cityDegValue").innerText = temp[this.id];

        if (unit == 1) {

            document.getElementById("cityDegValue").innerText = Math.round((temp[this.id] * 1.8) + 32);
        }
    }
}


