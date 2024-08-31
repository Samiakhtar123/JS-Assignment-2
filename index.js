//Ques 1

let A=2;
let B=5;

let C=A+B;

console.log(`Addition of two numbers is ${C}`);

//Ques 2

let num1=5;
let num2=3;

let num3=(num1>num2 && num1==num2);
console.log(num3);

//Ques 3

let n1=12;
let n2=20;

if(((n1 % 10)==0) && ((n2 % 10)==0))
    console.log("true");
else if(((n1 % 10)!=0) && ((n2%10)!=0))
    console.log("false");
else if(((n1 % 10)==0) || ((n2 % 10)==0))
    console.log("true");
else
    console.log("The numbers are invalid");
         
//Ques 4

let number=4567;
let result=(number)/1000;

console.log(Math.floor(result));

//Ques 5

let n=4567;
let lastDigit =4567%10;

console.log(`lastDigit nummber ${lastDigit}`);

//Ques 6

let dividend=9;
let divisor=2;

remainder=dividend%divisor;
console.log(`Remainder is ${remainder}`);

//Ques 7

let input1=5;
let input2=5;

let output=input1*input2;
console.log(`the multiplications are ${output}`);


//Ques 8

let English=50;
let Maths=70;
let Science=80;

let sum=(English+Maths+Science);
let avg=(English+Maths+Science)/3;
console.log(`the sum of the total subjects ${sum}`);
console.log(`the Avg are ${avg}`);





    

