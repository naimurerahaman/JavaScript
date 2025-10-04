//object literals.js
const mySymbol = Symbol("symbol01")
const person = {
    name : "Emon",
    age : 22,
    hobbies : ["sleeping", "eating", "coding"],
    address : {
        street : "123 Main St",
        city : "Dhaka",
        country : "Bangladesh"
    },
    email : "emon@gmail.com",
    "phone number" : "123-456-7890",
    [mySymbol] : "ihavemyownsymbol"
}

// console.log(person)

console.log(person.name) //Emon //dot notation //NOTE: its not a good prcatise
console.log(person["name"]) //Emon //bracket notation

console.log(person[mySymbol]) //ihavemyownsymbol
