// //  Primitive

// //  7 types : String, Number, Boolearn, null, undefined, Symbol, BigInt

// const score = 100
// const scoreValue = 100.3

// const isLoggedIn = false
// const outsideTemp = null
// let userEmail;

// const id = Symbol('123')
// const anotherId = Symbol('123')

// console.log(id === anotherId);

// // const bigNumber = 3456543576654356754n




// // Reference (Non primitive)

// // Array, Objects, Functions

// const heros = ["shaktiman", "naagraj", "doga"];
// let myObj = {
//     name: "hitesh",
//     age: 22,
// }

// const myFunction = function(){
//     console.log("Hello world");
// }

// console.log(typeof anotherId);

// // https://262.ecma-international.org/5.1/#sec-11.4.3


// //NOTE:

// // the typeof in primitive data types:-

// // 1. String => string
// // 2. Number => number
// // 3. Boolean => boolean
// // 4. Symbol  => symbol
// // 5. Undefined =>undefined
// // 6. BigInt => bigint
// // 7. Null => object

// // The typeof in non-primitive(Reference) data-types:-

// // 1. function() => function
// // 2. Obect => object
// // 3. Array => object


//**********************STACK & HEAP*************************

// let Name = "Emon"

// let anotherName = "Nishi"

// console.log(anotherName)

// let userA = {
//     id : 1 ,
//     email : "emon@email.com" ,
// }

// let userB = userA

// userB.email = "nishi@email.com"


// console.log(userA)
// console.log(userB)