/* //how to link jsfile in htmlfile
<body>
-------------
-------------
<script src = "main.js"> </script>
</body>

//#######data types###
//number
//string
//boolean
//undefined
//null

/*
let myNumber = 15;
let myVariable = "apple";
let aliveIs = "true";
myName;
myName ="";
*/

//variable 

//var
//let(changeable)
//const(fixed)


/*var name = "ganesh";
var msg = "he is a app developer " +name+ "& is a student"
console.log(msg);*/

/*let myVariable = "apple";
//length property
console.log(myVariable.length);
*/

/*const myNumber = 34;
const myFloat = 55.5;
console.log(myNumber);
*/


/* //object in js

let name = "ganesh";
let age = 22;
let gender = "male";

let person = {
    name: "ganesh",
    age: "21",
    gender: "male"
}
console.log(person);
*/


/* //****Array in js******
let favColors = ["red", "white", "black"];
// {} - Object
// [] Array

favColors[3] = "pink"
console.log(favColors.length);
*/

// function

/*function greetUser(firstName, lastName) {
    // Set of statements
    let msg = "Hello " +firstName + " " +lastName+ " I'm learning JavaScript!";
    console.log(msg)
}
greetUser("Ganesh", "Dhanabalan")
*/
/*
function add(num1, num2){
    console.log(num1 + num2)
}
//-
//*
add(6666,34)
*/

//###js operators is backbone of programming

/*Arithmetic Operators
Comparison Operators
Assignment Operators
Logical Operators
bitwise Operators
*/

//assignment Operators

/*let x = 5;
x += 10;
console.log(x)*/

//arithmatic operator

/*let num1 = 6;
let num2 = 45;

//increment(++)
//console.log(num1++);
//console.log(num1);

//decrement(--)
console.log(num1--);
console.log(num1);

/*console.log(num1 + num2)
console.log(num1 - num2)
console.log(num1 * num2)
console.log(num1 / num2)
console.log(num1 % num2)
console.log(num1 ** num2)*/


//comparison Operators

//let x = 5;
//relational operators 
/*console.log(x < 5); 
console.log(x <= 5);
console.log(x >= 5);*/

//equality operators

/*console.log(x === 5);
console.log(x !== 5);*/

//string comparison
//console.log('Alen' < 'Anbu');

//Comparison of different type
/*console.log('1'< 5);  //1<5
console.log(true==0);
console.log(true==1);*/
//1 - TRUE
//0 - FALSE

//Strict Equality operators (datatype + value)
//console.log(1===1); //number === number
//console.log('1'===1); //string===number

//lose equality operator(take it first number only)
//console.log(1==1); //number==number
//console.log('1'==1); //string==number
//console.log(true==1); //boolean==number


//  @@@@ Ticket APP @@@ Ternary operator
// If person's age is more than 18,
// They are 'Adult' category, otherwise,
// They are a 'Child' category
/*let age=16;
let type = age>18? "Adult ticket" : "child ticket";
// condition ? 'value1' : 'value2'
console.log(type);*/
//if (conditon){
    // condition runs
//    let type = 'Adult Ticket';
//    } else {
//    let type = 'Child Ticket';
//    // else runs}

//logical operators

//logical AND(&&)
// return TRUE if both operands are TRUE
//console.log(true&&true);

//logical OR (||)
// return TRUE if anyone opserands are TRUE
//console.log(true||true);

//NOT (!)
//opposit
//console.log(true);

//highincome, CIBILscore -> Loan Eligible, Ineligible

/*let highIncome = true; //AND
let CIBILscore = true;

let eligiblePerson = highIncome && CIBILscore;
console.log("Status: " + eligiblePerson);*/


/*let highIncome = 0; //OR & NOT
let CIBILscore = true;

let eligiblePerson = highIncome || CIBILscore;
let applicationStatus = !eligiblePerson;
console.log("loan Status: " + eligiblePerson);
console.log("Application Status: " + applicationStatus);*/


//OR mechanism

// falsy (False)
//undefined
//null
//0
//false
//'' -> ""
//NaN (NOt a Number)

//Truty -> Anything is not falsy is -> truthy

/*let useColor =0;
let defaultColor = "blue";
let currentColor = useColor || defaultColor;

console.log("Selected Color: " + currentColor);*/

// BITWISE OPERATORS

//HUMAN code -> Machine code
// 1-> 00000001 ->1
// 2-> 00000010 ->2 
// 3-> 00000011 ->3

/*console.log(1 | 2); // you'r using single (|) it is Bitwise OR


console.log(1 & 2); // you'r using single (&) it is Bitwise AND*/





// W -> 00000100 -> Write
// R -> 00000010 -> Read
// E -> 00000001 -> Execute


/*const readPermission = 4;
const writePermission = 2;
const executePermission = 1;


let myPermission = 0;
myPermission = myPermission | writePermission | readPermission;

let msg = (myPermission&readPermission)? 'yes':'No';
console.log(msg);*/

//JS precedence

/*let X = (2+5)*10;
console.log(X);*/

//############################## conditional statements ############################
//if else statement
//switch statement

/*let weather = "hot";
if(weather === "hot") {
     console.log("Weather is hot!");
}
else {
console.log("Weather is cold!se");
}*/


/*let isRainy = false;
let isCloudy = true;

if(isRainy || isCloudy) {
     console.log("Don't forget to take your fav umberla");
}
else {
console.log("Sky is normal so go with your lover & enjoy");
}*/

// If hour is between 12AM (0) to 1PM(13) -> Good Morning
// Else if hour is between 1PM(13) to 5PM (17) -> GoodAfternoon
// Else hour is between 5PM (17) to 12AM (0) -> Good Evening

/*let hour = 17;

if(hour>=0 && hour <13 ){
console.log("Good MOrning");
}else if(hour >=13 && hour <17){
console.log("Good Afernoon");
}else {
console.log("Good Evening");
}*/

//current date and time calculation

/*let hour = new Date().getHours();


if(hour>=0 && hour <13 ){
    console.log("Good MOrning");
    }else if(hour >=13 && hour <17){
    console.log("Good Afernoon");
    }else {
    console.log("Good Evening");
    }*/

//#################### Switch Case ####################################################

//conditions is true cases is execute 

//syntax
/*switch(condition){
    case 1:
        console.log("1");
    case 2:
        console.log("2");
    default:
        console.log("default is behaviour");
}*/

/*let grade = "A";

switch (grade) {
    case "S":
        console.log("distinction & Super grade");
        break;
    case "A":
        console.log("Firstclass & Excellent grade");
        break;
    case "E":
        console.log("Average & just pass!");
        break;
    case "U":
        console.log("! Fail !");
        break;
    default:
        console.log("unknown grade");
}*/



// Switch Case
/*let marks = 60;
switch(true){
    case (marks > 50):
         console.log("Pass");
         break;
    case (marks > 90):
         console.log("Super Grad");
         break;
    case (marks < 50):
         console.log("Fail");
         break;
    default:
        console.log("you need more effort");
}*/


// Examples: Mobile buying suggestion
// If given saving amount is> 10K Buy Android Mobile 
//Else If given amount is > 60k Buy iPhone Mobile 
// Else if given amount is > 5 && < 10 Buy Basic Mobile 
// Else Print "You can't afford mobile phone now!"


/*let savingAmount = 60000;

switch(savingAmount){
    case (savingAmount = 10000):
        console.log("10K Buy Android Mobile");
        break;
    case (savingAmount = 60000):
        console.log("60k Buy iPhone Mobile");
        break;
case (savingAmount>5000 && savingAmount<10000):
        console.log("Buy Basic Mobile");
        break;
default:
        console.log("You can't afford mobile phone now!");
}*/

//############################## Javascript Loops #################################

//For
//While
//Do while
//For-in
//For-of


//FOR LOOP 

/*for(initialExpression; CSSConditionRule; step){
    console.log("Number #1");
}*/
//increment
/*for(let i = 0; i <= 14; i++){
    
    if(i%2!==0){
    console.log("Number #" + i);
    }
}*/
//decremenrt
/*for(let i = 10; i >= 1; i--){
    
    if(i%2!==0){
    console.log("Odd Number #" + i);
    }
}*/


// WHILE LOOPS

/*let i = 0;
while(i <= 10){
    
    if(i%2!==0){
    console.log("Odd Number #" + i);
    }
    i++;
}*/


// DO WHILE

/*let i = 10;
do {
    
    if(i%2!==0){
    console.log("Odd Number #" + i);
    }
    i--;
}while(i >= 1);
*/

//FOR - IN

/*const person = {
    name: 'ganesh',
    age:22,
    gender:'male'
};

for (let key in person) {
    // code
    console.log(key + ":", person[key]);
    }*/

  /* //array
    let colors = ['red', 'blue', 'green' ];
    
    for(let key in colors){
        console.log(colors[key]);
    }*/

// DOT Notation
//person.name
// Bracket Notation
//person['name']


// ### FOR OF LOOP ####

/*let colors = ['red', 'blue', 'green' ];
    
    for(let key in colors){
        console.log(colors[key]);
    }

    for(let color of colors){
        console.log("COlor: " + color);
    } */


// creating object & function

//function 
/*let name = "Anbu";
let age = 24;
let interest = ['Creating, teaching new things.'];

let address = {
    city: "Chennai",
    state: "Tamil Nadu",
} 

function greeting(){
    //let msg = "My name is " + name + ", i love " + interest;
    
    let msg = 'My name is ${name}, i love ${interest}';
    console.log(msg);
}
    //console.log(msg);
}

greeting(); */ //function call

// object in function (OOP)

/*let person = {
    name: "Anbu",
    age: 24,
    interest: ['Creating, teaching new things.'],
    isAlive: true,
    address: {
    city: "Chennai",
    state: "Tamil Nadu",
    },
   
greeting: function(){
    let msg = `My name is ${this.name}, i love ${this.interest}`;
    console.log(msg);
}
};

console.log(person.greeting());*/


//factory functions
/*function createPersion(name){ //camelcase-> myName
return{
    //name: name, 
    name, 
    greeting(){
        let msg = `My name is ${this.name}`;
        console.log(msg);
    }
    
        
     };
}

let ganesh = createPersion("Ganesh");
ganesh.greeting();
let trisha = createPersion("Trisha");
trisha.greeting();*/

// Constructor Function

/*function Person(name){  //pascal-> MyFirstName
     this.name = name;
     this.greeting = function(){
        console.log(`My name is ${this.name}`);
     }

}  

let person = new Person("Ganesh");
let x = {}
person.greeting();*/

//DYNAMIC OBJECT

/*const person = {
    name: "Ganesh"
}

person.age = 22;
person.greeting = function(){}

delete person.greeting;
delete person.age;

console.log(person);*/

//reference data types

/*let x = {
    value: 10
};

let y = x;
x.value = 20;*/

//primitive
/*let cart = 5;

function updateCart(cart){ //localscope
    cart++;
}

updateCart(cart);

console.log("Carts available:" +cart);*/

/*let cartObj = { //reference type
    value: 5
};

function updateCart(cart){ //localscope
    cart.value++;
}

updateCart(cartObj);

console.log("Carts available:", cartObj);*/

//enumurating properties of an bject

/*const user = {
    name: 'Ganesh',
    getFullName(){
        console.log(`My name is ${this.name}`);
    }
}

for (let key in user)
    console.log(key, user[key]);


for (let key of Object.keys(user))
    console.log(key);



for (let entry of Object.entries(user))
    console.log(entry);
*/
/*const user = {
    name: 'Ganesh',
    getFullName(){
        console.log(`My name is ${this.name}`);
    }
}

if('name' in user){
    console.log("yes!");
}*/

const user = {
    name: 'Ganesh',
    getFullName(){
        console.log(`My name is ${this.name}`);
    }
}

/*let another = Object.assign({
    age: 22
}, user);

console.log(another);*/

let another = {
    ...user     //spread operator
}
console.log(another);
































































































