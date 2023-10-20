//js inbuild object
//Math object
//console.log(Math.abs(-3));

/*let marks = [45, 74, 15, 35]

let result = Math.max(...marks);
console.log("Maximum mark:" + result);*/


//JS String object
// primitive string values

//let firstName = "Ganesh";
//let lastName = "Dhanabalan";

//const firstName2 = new String("Ganesh");

// TEmplate literals
/*const name = "Trisha";

const message = `Thank you ` + name +` for watching \n"javascript" in tamil`;
const message2 = `Hello ${name},thank you for watching 
"javascript" in tamil
with love,
Ganesh`;
console.log(message);
console.log(message2);*/
//object : {}
//boolean : true, false
//string : '',""
//Template:`` backtick

// DATE Object

/*const date = Date();// string

const now = new Date(); //object

const anotherDate = new Date("July 6 1996");

console.log(date);
console.log(now.getFullYear());
console.log(anotherDate.getFullYear());
*/


/*let [month, date, year] = new Date().toLocaleDateString("en-US").split("/");
console.log(month, date, year);
*/

// adding element to javascriopt Array

/*const number = ["Apple", "Lemon", "Orange"]
//push
number.push("grapes", "banana") // end or last
//unshift
number.unshift("Gauva") //frunt or first

//splice
number.splice(3, 0, "Watermelons")

console.log(number);
*/

//Finding element in js Array

/*const items = ["Apple", "Lemon", "Grapes"]

console.log(items.indexOf("Lemon"))*/

/*const items = ["Apple", "Lemon", "Grapes", "Apple"]

console.log(items.lastIndexOf("Apple"))*/

/*const items = ["Apple", "Lemon", "Grapes", "Apple"]

//console.log(items.indexOf("red") !== -1)

console.log(items.includes("Lemon")) // check element
*/

// find method with using function

/*const vegetable = [
    {id: 1, item: "carrot", quantity: 1 },
    {id: 2, item: "beetroot", quantity: 2 },
    {id: 3, item: "brocoli", quantity: 3 },
]

let result = vegetable.find(function(veg){ // it's called callback function
    return veg.item == "brocoli"
})
console.log(result);
*/

//Arrow function or fat arrow function

/*const vegetable = [
    {id: 1, item: "carrot", quantity: 1 },
    {id: 2, item: "beetroot", quantity: 2 },
    {id: 3, item: "brocoli", quantity: 3 },
]
//  => -this is arrow function
let result = vegetable.find((veg) => veg.item == "brocoli")
console.log(result);
*/


// remove element in array
// .pop() using remove last element in the array
// .shift() remove first element 
// .splice(delete element positn, howmany elemnt del) middle

/*const number = [1, 2, 3, 4, 5, 6, 7, 8];

number.splice(2, 4)

console.log(number);
*/
// empty on array
/*let numbers = [1, 2, 3, 4];

//solution1
 numbers = [];

//solution2
//numbers.length = 0;

console.log(numbers);
*/


//combining array (primitive type)

/*const shopping_cart = ["Chicken", "Masala", "Rice"];
const additional_cart = ["Oil", "Salt"];
//combine
let recipe = shopping_cart.concat(additional_cart);

//extract
let extractedInfo = recipe.slice(1, 3);

console.log(recipe);
console.log(extractedInfo);*/

/*const shopping_cart = [{
    item: "Chicken"
}];
const additional_cart = ["Oil", "Salt"];
//combine
let recipe = shopping_cart.concat(additional_cart);
shopping_cart[0].item = "Mutton";
//extract
let extractedInfo = recipe.slice(1, 3);

console.log(recipe);
console.log(extractedInfo);
*/

/*const shopping_cart = ["Maggi", "Beans", "Masala"];
const additional_cart = ["Matchbox", "Salt"];

//let recipe = shopping_cart.concat(additional_cart);
//spread operator
let recipe = [...shopping_cart, 45, {name: "Ganesh"}, ...additional_cart];
console.log(recipe);
*/

// combine  Array
/*const dailyRoutine = ["Wake up", "Eat", "Sleep"];

//for-of
for(let routine of dailyRoutine){
    //logics
    console.log(routine);
}

// for-in

for(let routine in dailyRoutine){
    console.log(routine, dailyRoutine[routine]);
}

//for-each
dailyRoutine.forEach(function(routine, RoutineIndex){
    console.log(RoutineIndex, routine);

});

//fat arrow

dailyRoutine.forEach(routine=> console.log(routine));
*/

//joining & spliting an array

/*const dailyRoutine = ["Wake up", "Eat", "Sleep"];

let dailyRoutines = dailyRoutine.join(", ");

console.log(dailyRoutines);*/ 


/*let fullName = "Ganesh Dhanabalan";

let UserName = fullName.split(" ");

let firstName = UserName[0];
let lastName = UserName[1];
 
console.log(`My First name is ${firstName} and last name is ${lastName}`);
*/

/*let postTitle = "This is my post".toLocaleLowerCase()

let postSlug = postTitle.split(" ");

let finalSlug = postSlug.join('_')

console.log(finalSlug);
*/


// sorting js Array

//const students = [3, 8, 6];

//students.sort();//ascending
/*students.sort(function(a, b) {
    return b-a;
}); */ //descending order

//students.reverse(); // reverse

/*const students = [
    {id:3, name:"Surya"},
    {id:8, name:"Ganesh"},
    {id:1, name:"akash"},
];

/*students.sort(function(a, b){

    //a<b => -1
    if(a.name < b.name) return -1;
    //a>b => 1
    if(a.name > b.name) return 1;
    //a==b => 0
    return 0;
});*/

/*students.sort((a, b) => {
    nameA = a.name.toLowerCase();
    nameB = b.name.toLowerCase();

    //a<b => -1
    if(nameA < nameB) return -1;
    //a>b => 1
    if(nameA > nameB) return 1;
    //a==b => 0
    return 0;
});


console.log(students);
*/

//testing element in a javascript array primitive types

/*const age = [22, 33, 44];

//array.every() => all elements are true then result is true

let isAllowed = age.every(function(value, index, array){
    return value>=18;


});

console.log("isAllowed:", isAllowed);*/

//array.some() => any one element true by comndition then result is true

/*const age = [14, 33, 44];
let isAllowed = age.some(function(value, index, array){
    return value>=18;


});

console.log("isAllowed:", isAllowed);
*/
// testing is odd or even

//const numbers = [1, 2, 3, 4, 5];

//every()

/*let evenNum = numbers.every(function(value){
    return value % 2 === 0;
});
console.log("Even numbers:", evenNum);*/

//some()

/*let oddNum = numbers.some(function(value){
    return value %2 === 1;
});

console.log("Odd numbers", oddNum);
*/

// testing element in javascript array - reference type
/*const items = [
    {id:1, name:"Mobiles", isdeliverable: true },
    {id:2, name:"Accessories", isdeliverable: true },
    {id:2, name:"TV", isdeliverable: false },
];

let allDeliverables = items.every(function(value){
    return value.isdeliverable == true;
});

let notDeliverables = items.some(function(value){
    return value.isdeliverable == true;
});

console.log("AllDeliverables", allDeliverables);
console.log("NotDeliverables", notDeliverables);
*/
/*const cart_items = [
    {id:1, item:"Android Mobiles", cost: 7000},
    {id:2, item:"iphone Mobiles", cost: 30000 },
    {id:3, item:"windows mobiles", cost: 8000 },
];

//let order_phones = cart_items.filter(function(value){
  //return value.cost < 10000;
//});

let order_phones = cart_items.filter((value)=>value.cost < 10000);

console.log("Your order phone : ", order_phones);
*/

// different b/w find() & filter() methopds

/*const cart_items = [
    {id:1, item:"Android Mobiles", cost: 7000},
    {id:2, item:"iphone Mobiles", cost: 30000 },
    {id:3, item:"windows mobiles", cost: 8000 },
];

let phonesFilter = cart_items.filter(function(value){
  return value.cost < 10000;
}); // check full [......]

let order_phonesFind = cart_items.find(function(value){
    return value.cost < 10000;
  }); // check value & result any one

  console.log("phonesfilters", phonesFilter);
  console.log("phonesfind", order_phonesFind);
*/

//### Mapping in a js array ### // own behavoiour 

// any changing is costomized 

/*const numbers = [1, 2, 3, 4, 5];

let final = numbers.map(function(val){
    return val * 2;
});

console.log();
*/

/*const students = [
    {id:1, first_name: "Surya", last_name: "Vijay"},
    {id:2, first_name: "Ganesh", last_name: "Balan"},
    {id:3, first_name: "Aakash", last_name: "Rajesh"},   
];


let final = students.map(function(val){
    let fullName = [val.first_name, val.last_name].join(" ");
    let obj = {id: val.id, fullName: fullName };
    return obj;
});

console.log(final);
*/

// chaining methods in array

/*const products = [
    {id:1, item:"Android Phone", cost: 7500},
    {id:2, item:"Gaming Computer", cost: 90000 },
    {id:3, item:"Headphones", cost: 2300 },
];
     //sortin by lowest price
let sortByLowestPrice = products.sort(function(a, b){
    return a.cost - b.cost; //ascending
    //return b.cost-b.cost; //decending
});

     // sort it by item ascending
let sortByItem = sortByLowestPrice.sort(function(a, b){
    if(a.item < b.item) return -1;

    if(a.item > b.item) return 1;

    return 1;
});
// filter products less than 8000
let filtered = sortByItem.filter(function(value){
    return value.cost <= 8000; 
});

// map it like this: // Android phone - ₹7500
let final = filtered.map(function(val){
    return val.item + " - ₹" + val.cost;
});
console.log(final);*/

  // this is chaining method   
/*const products = [
    {id:1, item:"Android Phone", cost: 7500},
    {id:2, item:"Gaming Computer", cost: 90000 },
    {id:3, item:"Headphones", cost: 2300 },
];
let final = products.sort(function(a, b){
    return a.cost - b.cost; //ascending
    //return b.cost-b.cost; //decending
}).sort(function(a, b){
    if(a.item < b.item) return -1;

    if(a.item > b.item) return 1;

    return 1;
}).filter(function(value){
    return value.cost <= 8000; 
}).map(function(val){
    return val.item + " - ₹" + val.cost;
});
console.log(final);
*/

// fat arrow

/*const products = [
    {id:1, item:"Android Phone", cost: 7500},
    {id:2, item:"Gaming Computer", cost: 90000 },
    {id:3, item:"Headphones", cost: 2300 },
];
let final = products.sort((a, b) =>{
    return a.cost - b.cost; 
}).sort((a, b) => {
    if(a.item < b.item) return -1;

    if(a.item > b.item) return 1;

    return 1;
})
.filter((value) =>  value.cost <= 8000) 
.map((val) => val.item + " - ₹" + val.cost);
console.log(final);*/

// array reduce method in primitive

/*const donations = [55, 65, 75, 85, 95, 105];

let totalDonations = donations.reduce(function (previousval, currentval){
    return previousval + currentval;

});

console.log("TotalDonations : ", totalDonations);
*/
// reduce method in object

/*const cart_thing = [
    {id: 1, item: "Milk", cost: 45 },
    {id: 2, item: "Bread", cost: 20 },
    {id: 3, item: "Maggi", cost: 12 },
];// reduce rigjht
/*let totalCost = cart_thing.reduce(function(accumulator, crrentval){
    return accumulator + crrentval.cost;
}, 10); //initial value
console.log("your total amount is: ", totalCost);
*/

/*const addCost = (accumulator, currentval) => accumulator +
currentval.cost;

let totalCost = cart_thing.reduce(addCost, 10);
console.log("Your total amount is:", totalCost);
*/

// ******** different between js method **************

//const numbers = [34, 4, 65, 12, 78];

//sort()
//let result = numbers.sort(); 

//find()
//let result = numbers.find((value) => {return value > 50;});

//filter()
/*let result = numbers.filter((value) => {
    return value > 50;
});
console.log(result);
*/

//map
/*let result = numbers.map((value)=> {
    return value > 50;
});

console.log(result);*/

//reduce
/*let result = numbers.reduce((acc, value)=> {
    return acc + value;
});

console.log(result);
*/
 