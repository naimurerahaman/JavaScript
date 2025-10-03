//Signleton objects

// const obj = new Object() //object constructor(singleton) syntax

const FbUser = {} //object literal syntax

// console.log(FbUser) //object

FbUser.name = "Emon"
FbUser.age = 22
FbUser.hobbies = ["sleeping", "eating", "coding"]
FbUser.address = {
    street : "123 Main St",
    city : "Dhaka",
    country : "Bangladesh"
}
FbUser.email = "mdemon@gmail.com"
FbUser["phone number"] = "123-456-7890"

// console.log(FbUser)

const user = {
    fullname : {
        firstname : "MD",
        lastname : "Emon" 
    }
}

// console.log(user.fullname.firstname) //MD
// console.log(user["fullname"]["lastname"]) //Emon
// console.log(user.fullname) //{ firstname: 'MD', lastname: 'Emon' }

const obj1 = { a: 1, b: 2 }
const obj2 = { c: 3, d: 4 }

// console.log({obj1, obj2})
const merged_obj = Object.assign({}, obj1, obj2) //merging objects
// console.log(merged_obj) //{ a: 1, b: 2, c: 3, d: 4 }

const merged_obj2 = {...obj1, ...obj2} //merging objects using spread operator
// console.log(merged_obj2) //{ a: 1, b: 2, c: 3, d: 4 }

// getting the object keys, values, entries in an array
// console.log(Object.keys(merged_obj2)) //['a', 'b', 'c', 'd']
// console.log(Object.values(merged_obj2)) //[1, 2, 3, 4]
// console.log(Object.entries(merged_obj2)) //[ [ 'a', 1 ], [ 'b', 2 ], [ 'c', 3 ], [ 'd', 4 ] ]
// console.log(Object.entries(merged_obj2)[0]) //['a', 1]
// console.log(Object.entries(merged_obj2)[0][0]) //a
// console.log(Object.entries(merged_obj2)[0][1]) //1   

console.log(merged_obj2.hasOwnProperty('a')) //true
console.log(merged_obj2.hasOwnProperty('z')) //false