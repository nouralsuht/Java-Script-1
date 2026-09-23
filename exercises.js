// Ex1

console.log(-9 * 3);
console.log("value is " + 50);
console.log(17 % 5);
console.log(5 / 10);
console.log(4 == 4);
console.log(4 != 5);
console.log(Math.ceil(5.9) - Math.floor(4.5));
console.log(typeof (100));//number
console.log(typeof (73.9));//number
console.log(typeof (NaN));//number
console.log(typeof ("Water"));//string
console.log(typeof (false));//boolean
console.log("Orange " + "e");
console.log("Orange" - "s");//nan
console.log("4" + "8");//48
console.log("4" - "8");//-4
console.log("name" + 3);//name3
console.log("name" - 3);//nan
console.log(typeof (Infinity));//number
console.log(1 == '1');//true
console.log(1 === '1');//false

Ex2
alert("welcome " + prompt("enter you name :"));
//Ex3 
let first = Number(prompt("Enter the first number:"));
let second = Number(prompt("Enter the second number:"));
if (first <= second) {
    alert(first + " , " + second);
}
else {
    alert(second + " , " + first);
}

//Ex4
let number1 = Number(prompt("Enter the first number"));
let number2 = Number(prompt("Enter the second number"));
if (number1 > number2) {
    alert("The larger  number is = " + number1)
}
else if (number2 > number1) {
    alert("The larger number is = " + number2);
}
else {
    alert("The two numbers are equal ")
}
//Ex5
let num1 = Number(prompt("enter the first number : "));
let num2 = Number(prompt("enter the second number : "));
let num3 = num1 + num2;
alert("Sum = " + num3);

//Ex6
var num = Number(prompt("Enter a value:"));

switch (num) {
    case 1:
        alert("ONE");
        break;
    case 2:
        alert("TWO");
        break;
    case 3:
        alert("THREE");
        break;
    case 4:
        alert("FOUR");
        break;
    case 5:
        alert("FIVE");
        break;
    case 6:
        alert("SIX");
        break;
    case 7:
        alert("SEVEN");
        break;
    case 8:
        alert("EIGHT");
        break;
    case 9:
        alert("NINE");
        break;
    default:
        alert("PLEASE TRY AGAIN");
}

//Ex7
var birthYear = Number(prompt("Enter your birth year:"));

var currentYear = new Date().getFullYear();
var age = currentYear - birthYear;

if (age > 60) {
    alert("You may join the seniors' program.");
} else if (age > 30) {
    alert("You are not eligible. You may join other programs.");
} else if (age >= 18) {
    alert("You are eligible. Start your application.");
} else {
    alert("You may join the kids' program.");
}
Ex8 
 
function switchCase(text) {
    let result = "";
    for (let i = 0; i < text.length; i++) {
        if (text[i] === text[i].toUpperCase()) {
            result += text[i].toLowerCase();
        }
        else {
            result += text[i].toUpperCase();
        }
    }
    return result;
}
console.log(switchCase("OrAnGe"));

Ex9
function camelCase(text) {
    let words = text.split(" ");
    let result = "";

    for (let i = 0; i < words.length; i++) {
        result += words[i][0].toUpperCase() + words[i].slice(1);
    }

    return result;
}

console.log(camelCase("Coding Academy by Orange"));

 