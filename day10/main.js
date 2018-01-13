var mehranCar;
function greeting(carname, noofpassengers, category, color, model, modelyear) {
    this.carName;
    this.noOfPassengers;
    this.category;
    this.color;
    this.model;
    this.modelYear;

    this.carName = carname;
    this.noOfPassengers = noofpassengers;
    this.category = category;
    this.color = color;
    this.model = model;
    this.modelYear = modelyear
    console.log(carName, noOfPassengers, category, color, model, modelYear);
}

function setValues(carName, noOfPassengers, category, color, model, modelYear) {
    return greeting(carName, noOfPassengers, category, color, model, modelYear);
}
var input = prompt("enter car name");
let setValue = setValues.bind(greeting);
if (input === "mehran") {

    var mehran = new setValue("Mehran", 4, "regular", "red", "vx", 2001);
}
else if (input === "corolla") {
    var corolla = new setValue("Corolla", 4, "regular", "white", "gli", 2011);
}
