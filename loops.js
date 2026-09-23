//Q7   

for(let i=0;i<=5;i++)
{
alert(i);
}
//Q8 

let result ="";
for(let i=0;i<=5;i++)
{
    result += i+ " ";
}
alert(result);

//Q9

for(let i=0;i<=20;i++)
{
    if(i%3==0)
    {
        console.log(i + " is a multiple of 3");
    }
}

//Q10 
let number = Number(prompt("Enter a number from 0 to 100:"));

while (number < 0 || number > 100) {
    alert("You are out of range");

    number = Number(prompt("Enter a number from 0 to 100:"));
}

alert("Valid number: " + number);


//Q11

let number1 = Number(prompt("Enter a number from 0 to 100:"));

while (isNaN(number1) || number1 < 0 || number1 > 100) {
    alert("Invalid input. Please enter a number from 0 to 100.");

    number1 = Number(prompt("Enter a number from 0 to 100:"));
}

alert("Valid number: " + number); 
//Q12
let num= Number(prompt("Enter a number : "));
let sum=0;
for(let x=0;x<=num ;x++)
{
sum+=x;
}
alert("sum from 0 to "+num +" = " +sum);

//Q13

let sum1 = 0;
let count = 0;

let num1 = Number(prompt("Enter a valid number:"));

for (let y = 0; y <= num1; y++) {
    sum1 += y;
    count++;
}

alert("The average = " + (sum / count));
