// let input = prompt("Enter any value");
// if(typeof input === "string") {
//     input = parseInt(input);
//     console.log(input + 3);
// } else {
//     console.log(input + 3);
// }

// let greeting = "english";
// if(greeting === "english") {
//     console.log("Hello World");
// } else {
//     console.log("Hola");
// }

// if(greeting === "english") {
//     if(location === "Pakistan") {
//         console.log("Hello");
//     }
// } else {
//     console.log("hola");
// }

// greeting === "english" ? location === "Pakistan" ? console.log("hello") : '' : console.log('Hola');

//ternary operator
// greeting === "spanish" ? console.log("Hello World") : console.log("hola");

// let greeting = "english";

// switch(greeting) {
//     case "english" :
//         console.log("Hello");
//         break;
//     case "spanish" :
//         console.log("Hola");
//         break;
//     case "arabic" :
//         console.log("Salam");
//         break;
// }

// for(let i = 0; i<=10; i++) {
//     console.log(i);
// }

// let i = 0;
// while(i<10) {
//     console.log(i);
// }


// let arr = ["english","spanish","arabic"];
// for(let i = 0; i<arr.length; i++) {
//     console.log(arr[i]);
// }

/*
    1. declare array
    2. check which array is it
        2.1. if array is even then print "even Array"
        2.2. if array is Odd then print "Odd array";
        2.3. if array is equal then print "equal array";
*/

let arr = [];
let counter = 0;
let arrInput;
let noOfTime = 0;

let message = ""; //variable for message
let even = 0; //Even counter
let odd = 0; //Odd counter

noOfTime = parseInt(prompt("How many values you want to add in array"));

while(counter < noOfTime) {
    arrInput = parseInt(prompt("Enter array value"));
    arr.push(arrInput);
    counter++;
}

//Check array is even or odd
for(let i = 0; i<arr.length; i++) {
    if(arr[i] % 2 === 0) {
        //Even number detected
        even++;
    } else if(arr[i] % 2 !== 0) {
        //Odd number detected
        odd++;
    }
}

if(even > odd) {
    message = "Array is Even";
    console.log(message);
} else if(odd > even) {
    message = "Array is Odd";
    console.log(message);
} else if(even === odd) {
    message = "Array is equal";
    console.log(message);
}