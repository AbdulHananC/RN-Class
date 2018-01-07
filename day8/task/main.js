///////////////////////Object For Menu/////////////////////
var menu = [
    {
        item1: "samosa",
        quantity: 100,
        sale: 0
    },
    {
        item2: "sandwich",
        quantity: 50,
        sale: 0
    },
    {
        item3: "tea",
        quantity: 100,
        sale: 0
    },
    {
        item4: "water",
        quantity: 100,
        sale: 0
    },
]
///////////////////Object for Final Order////////////////
var order = [{

}]
////////////Objects for Student and Employee////////////
var student = {

}

var employee = {

}

/////////////All Global Variables//////////////////////
var samqty = 1;
var order;
var Tprice;
var samcount = 0;
var sancount = 0;
var tcount = 0;
var wcount = 0;
var samprice = 0;
var sanprice = 0;
var tprice = 0;
var wprice = 0;

///////////////////////////////////////
//functions for samosa item
/////////////////////////////////////////
// for buttons
document.getElementById('samosa').innerHTML = "<button id='samosa' onclick='plus1(menu),minus1(menu)'> Samosa/20rs </button>"



function plus1(menu) {              //+
    document.getElementById('samosa').innerHTML = "<button id='samosa'  > samosa </button><button id='plus1' onclick='add1(menu)'> + </button>"
}
function minus1(menu) {             //-
    document.getElementById('samosa').innerHTML += "<button id='minus1' onclick='sub1(menu)'> - </button>"
}
function add1(menu) {

    samcount++;
    menu[0].quantity--;
    document.getElementById('samosaPrice').innerHTML = "<span> samosa Price</span>";
    document.getElementById('price').innerHTML = "<h2>Total Price :</h2>";
    menu[0].sale += 10;
    samprice = 10;
    samprice = samprice * samcount;
    document.getElementById('samosaPrice').innerHTML = "<span> Samosa Price :" + samprice + "</span>";
    totalPrice(menu);
    tqty(menu);
}
function sub1(menu) {
    samcount--;
    menu[0].quantity++;
    document.getElementById('samosaPrice').innerHTML = "<span> Samosa Price</span>";
    document.getElementById('price').innerHTML = "<h2>Total Price :</h2>";
    menu[0].sale -= 10;
    samprice = 10;
    samprice = samprice * samcount;
    document.getElementById('samosaPrice').innerHTML = "<span> Samosa Price :" + samprice + "</span>";
    totalPrice(menu);
    tqty(menu);
}

//////////////////////////////////
// functions for sandwitch item
/////////////////////////////////

document.getElementById('sandwich').innerHTML = "<button id='sandwich' onclick='plus2(menu),minus2(menu)' > Sandwich/40rs </button>";

function plus2(menu) {
    document.getElementById('sandwich').innerHTML = "<button id='sandwich'  > sandwich </button><button id='plus2' onclick='add2(menu)'> + </button>"
}
function minus2(menu) {
    document.getElementById('sandwich').innerHTML += "<button id='minus1' onclick='sub2(menu)'> - </button>"
}
function add2(menu) {

    sancount++;
    menu[1].quantity--;
    document.getElementById('sanPrice').innerHTML = "<span> Sandwich Price </span>";
    document.getElementById('price').innerHTML = "<h2>Total Price :</h2>";
    menu[1].sale += 40;
    sanprice = 40;
    sanprice = sanprice * sancount;
    document.getElementById('sanPrice').innerHTML = "<span> Sandwich Price :" + sanprice + "</span>";
    totalPrice(menu);
    tqty(menu);
}
function sub2(menu) {

    sancount--;
    menu[1].quantity++;
    document.getElementById('sanPrice').innerHTML = "<span> Sandwich Price </span>";
    document.getElementById('price').innerHTML = "<h2>Total Price :</h2>";
    menu[1].sale -= 40;
    sanprice = 40;
    sanprice = sanprice * sancount;
    document.getElementById('sanPrice').innerHTML = "<span> Sanwich Price :" + sanprice + "</span>";
    totalPrice(menu);
    tqty(menu);
}

// /////////////////////////////////////
// // functions for tea item
// ////////////////////////////////////

document.getElementById('tea').innerHTML = "<button id='tea' onclick='plus3(menu),minus3(menu)' > Tea/30rs </button>";

function plus3(menu) {
    document.getElementById('tea').innerHTML = "<button id='tea'  > tea </button><button id='plus3' onclick='add3(menu)'> + </button>"
}
function minus3(menu) {
    document.getElementById('tea').innerHTML += "<button id='minus3' onclick='sub3(menu)'> - </button>"
}
function add3(menu) {

    tcount++;
    menu[2].quantity--;
    document.getElementById('teaPrice').innerHTML = "<span> Tea Price </span>";
    document.getElementById('price').innerHTML = "<h2>Total Price :</h2>";
    menu[2].sale += 30
    tprice = 30;
    tprice = tprice * tcount;
    document.getElementById('teaPrice').innerHTML = "<span> Tea Price :" + tprice + "</span>";
    totalPrice(menu);
    tqty(menu);
}
function sub3(menu) {

    tcount--;
    menu[2].quantity++
    document.getElementById('teaPrice').innerHTML = "<span> Tea Price </span>";
    document.getElementById('price').innerHTML = "<h2>Total Price :</h2>";
    menu[2].sale -= 30
    tprice = 30;
    tprice = tprice * tcount;
    document.getElementById('teaPrice').innerHTML = "<span> Tea Price :" + tprice + "</span>";
    totalPrice(menu);
    tqty(menu);
}

// /////////////////////////////////
// // functions for water item
// /////////////////////////////////

document.getElementById('water').innerHTML = "<button id='water' onclick='plus4(menu),minus4(menu)' > water/20rs </button>";

function plus4(menu) {
    document.getElementById('water').innerHTML = "<button id='water'  > water </button><button id='plus4' onclick='add4(menu)'> + </button>"
}
function minus4(menu) {
    document.getElementById('water').innerHTML += "<button id='minus4' onclick='sub4(menu)'> - </button>"
}
function add4(menu) {
    //function for increment of item
    wcount++;
    menu[3].quantity--
    document.getElementById('waterPrice').innerHTML = "<span> Water Price </span>";
    document.getElementById('price').innerHTML = "<h2>Total Price :</h2>";
    menu[3].sale += 20
    wprice = 20;
    wprice = wprice * wcount;
    document.getElementById('waterPrice').innerHTML = "<span> Water Price :" + wprice + "</span>";
    totalPrice(menu);
    tqty(menu);
}
function sub4(menu) {
    //function for decrement of item
    wcount--;
    menu[3].quantity++
    document.getElementById('waterPrice').innerHTML = "<span> Water Price </span>";
    document.getElementById('price').innerHTML = "<h2>Total Price :<h2>";
    menu[3].sale -= 20
    wprice = 20;
    wprice = wprice * wcount;
    document.getElementById('waterPrice').innerHTML = "<span> Water Price :" + wprice + "</span>";
    totalPrice(menu);
    tqty(menu);
}
////////////////LocalStorage of menu using JSON////////

if (JSON.parse(localStorage.getItem('prrice')) == null) {
    localStorage.menu = JSON.stringify(menu);
    menu = JSON.parse(localStorage.getItem('menu'));
}
else {
    menu = JSON.parse(localStorage.getItem('prrice'));
}

/////////////////////////////////
//total addition of price function
///////////////////////////////

function totalPrice(menu) {
    localStorage.setItem('prrice', JSON.stringify(menu));           //stores value in json object and then parse it
    menu = JSON.parse(localStorage.getItem('prrice'));
    var addit = samprice + sanprice + tprice + wprice;
    document.getElementById('price').innerHTML = "<span><h2>Total Price :</h2> " + addit + "</span>"; //shows total price

}

/////////////////////////////////
//total quantity function
///////////////////////////////

function tqty(menu) {
    localStorage.setItem('prrice', JSON.stringify(menu));         // for quantity
    menu = JSON.parse(localStorage.getItem('prrice'));
    var additqty = menu[0].quantity + menu[1].quantity + menu[2].quantity + menu[3].quantity;  //to get total quantity of items
    var buyingcount = samcount + sancount + tcount + wcount;
    document.getElementById('quantity').innerHTML = "<span> <h2>Item Quantity </h2></span> ";
    document.getElementById('quantity').innerHTML += "<span> " + buyingcount + " </span> ";
    items();                                                                                    //invoks item function to get quantity of items
}


//////////////////////////////////////////
//////////For Quantity of Each Items
/////////////////////////////////////////

function items() {
    ///////////////////////////////////////
    ////////counting of items
    ///////////////////////////////////////
    document.getElementById('Item').innerHTML = "<span><h2> Items </h2></span> ";
    document.getElementById('Item').innerHTML = "<li><span><h2> ITEMS :</h2> Samosa :" + samcount + "</li><li> Sandwich :" + sancount + "</li>Tea :" + tcount + "<li> Water :" + wcount + "</li></span> ";
}

///////////////////////////////////////////////////////
///////will add whole order with student name
//////////////////////////////////////////////////////

function addAnything() {
    document.getElementById('input').innerHTML = '';                //it will get employee name n stores it in student object
    let input = document.getElementById('input').value;
    student = "Student :" + input;
    localStorage.setItem('studentId', JSON.stringify(student));
    student = JSON.parse(localStorage.getItem('studentId'));
    console.log(student);
    document.getElementById('container2').innerHTML = "<div id='IdCon'><span><h2>" + student + " <h2></span></div><br>";
    document.getElementById('container1').innerHTML = "";
    orderSlip(student);
}

///////////////////////////////////////////////////////
///////will add whole order with employee name
//////////////////////////////////////////////////////

function addAnything2() {
    document.getElementById('input').innerHTML = '';                //it will get employee name n stores it in employee object
    var input = document.getElementById('input').value;
    employee = "Employee :" + input;
    localStorage.setItem('employeeId', JSON.stringify(employee));
    student = JSON.parse(localStorage.getItem('employeeId'));
    console.log(employee);
    document.getElementById('container2').innerHTML = "<div id='IdCon'><span><h2>" + employee + " <h2></span></div><br>";
    document.getElementById('container1').innerHTML = "";
    orderSlip(employee);
}
console.log(menu);
///////////LocalStorage of Final Order//////////////
localStorage.order = JSON.stringify(order);
if (JSON.parse(localStorage.getItem('order1')) == null) {
    order = JSON.parse(localStorage.getItem('order'));
}
else {
    order = JSON.parse(localStorage.getItem('order1'));
}
/////////////////////////////////////////////////////////////////
//////////Executing Order slip and updating it in storage
////////////////////////////////////////////////////////////////
//var arr = {};
function orderSlip(input) {
    //loop to store new bills in order object
    for (var i = 0; i <= order.length; i++) {
        let arr = {                                                                 //stores total bill details n an array object which will transfer 
            name: input,                                                            //in another object which will store all orders one by one
            samosa: samcount,
            sandwich: sancount,
            tea: tcount,
            water: wcount,
            totalPrice: samprice + sanprice + tprice + wprice,
        }
        order.push(arr);
        localStorage.setItem('order1', JSON.stringify(order));                  //frstly it will convert object named by order into string than
        order = JSON.parse(localStorage.getItem('order1'));                     //then it will store it in order1 json object and then it will get
        console.log(order);                                                     //back in basic object #ItIsReallyConfusingIknow
        break;
    }
}
//localStorage.clear();