// ES6 Features

// Arrow Function : () => 

// var numbers = [1,2,3,4,5];
// // ES5 / Vanilla JS
// var doubleValue = numbers.map(function(val){
//     return val * 2;
// })

// // Arrow Function
// var tripleValue = numbers.map((val, index) =>{ 
//     console.log("Index : ", index)
//     return val * 3
// })

// console.log(doubleValue);
// console.log(tripleValue);


// Destructuring : Array | Objects

// var arr = [3,4,5]
// var newArr = [1,2,...arr, 6,7,8];

// console.log(newArr);    

// 1,2,3,45,6,7,8
// 1,2,[3,4,5],6,7,8


// var friends = ["foo","Bar","bam","baz"]

// var [arr1, , arr3, arr4] = friends;

// console.log(arr3);          // ?

// var user = {
//     firstName : "Foo",
//     lastName : "BAr",
//     age : 32
// }

// var { lastName, age, firstName } = user;
// console.log(lastName, age)


// var user = {
//     email : "test@test.com",
//     age : 32,
//     address : {
//         city : "Bengaluru",
//         street : "201 Main Road, Marathahalli"
//     },
//     friends : ["f1", "f2", "f3"]
// }

// var { email, age, address : { city, street } } = user;

// console.log(email, city, street, f2)

// var user = {
//     email : "test@test.com",
//     age : 32,
//     address : {
//         city : "Bengaluru",
//         street : "201 Main Roa, Marathahalli"
//     },
//     friends : ["f1", "f2", "f3"]
// }

// var {email, age, address : {city,street}, friends : [f1,f2,f3]} = user;
// console.log(city,street);


// Template String Syntax - "" | '' | ``
//  - Embed variable within string
// - Multiline String

// var username = "Foo Bar";

// var greet = `Hello from ${username},
// How are you?
// `;

// console.log(greet);


// Block Scope Variables
// - let : 
// - const : 

// function display(arr){
//     if(arr.length > 2) {
//         let LOAD = "LOADING..."
//         console.log(FLASH);             // undefined
//     }else{
//         let FLASH = "FLASHING..."
//     }
// }

// display([1,2,3,4])

// const USERNAME = "Foo";

// const user = {
//     firstName : "Foo"
// }

// user.firstName = "Bar";

// console.log(user);          // ?

// // Primitive Types - String, Boolean, Number, Date 
// // Reference Types - Object | Array | Functions


// user = {
//     firstName : "Bam"
// }



// REST / SPREAD Operators (...)

// function demo(email, ...args){
//     console.log(args[0]);               // 32
// }

// demo("test@test.com")
// demo("test@test.com", 32)
// demo("test@test.com", 32, true)



// REDUX
// let state = {
//     counter : 0,
//     todos : []
// }

// let newState = {
//     ...state,
//     result : [],
//     counter : 11
// }

// console.log(newState);      // {counter : 0, todos : [], result : []}