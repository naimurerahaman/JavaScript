// const arr = [0, 1, 2, 3, 4]

// console.log(arr.length) //5

// console.log(arr[0]) //0

// console.log(arr[arr.length - 1]) //4

// arr[2] = 100

// console.log(arr) //[ 0, 1, 100, 3, 4 ]

// arr[5] = 200

// console.log(arr) //[ 0, 1, 100, 3, 4, 200 ]

// arr[arr.length] = 300

// console.log(arr) //[ 0, 1, 100, 3, 4, 200, 300 ]

// arr.push(400)

// console.log(arr) //[ 0, 1, 100, 3, 4, 200, 300, 400 ]

// arr.pop()

// console.log(arr) //[ 0, 1, 100, 3, 4, 200, 300 ]

// arr.unshift(-1)

// console.log(arr) //[ -1, 0, 1, 100, 3, 4, 200, 300 ]

// arr.shift()

// console.log(arr) //[ 0, 1, 100, 3, 4, 200, 300 ]    

// console.log(arr.indexOf(100)) //2

// console.log(arr.includes(100)) //true

// console.log(arr.includes(500)) //false

// console.log(arr.join(" - ")) //0 - 1 - 100 - 3 - 4 - 200 - 300

// console.log(arr.reverse()) //[ 300, 200, 4, 3, 100, 1, 0 ]

// console.log(arr.slice(2, 5)) //[ 4, 3, 100 ]

// console.log(arr) //[ 300, 200, 4, 3, 100, 1, 0 ]

// console.log(arr.slice(2)) //[ 4, 3, 100, 1, 0 ]
// console.log(arr) //[ 300, 200, 4, 3, 100, 1, 0 ]

// console.log(arr.slice(-4, -1)) //[ 3, 100, 1 ]
// console.log(arr) //[ 300, 200, 4, 3, 100, 1, 0 ]    

// console.log(arr.splice(1,3)) //[ 200, 4, 3 ]
// console.log(arr) //[ 300, 100, 1, 0 ]

const marvel_heros = ["thor", "Ironman", "spiderman"]
const dc_heros = ["superman", "flash", "batman"]

// marvel_heros.push(dc_heros)

// console.log(marvel_heros);
// console.log(marvel_heros[3][1]);

// const all_heros = marvel_heros.concat(dc_heros)

// console.log(all_heros);
// console.log(all_heros[5]);

// const all_heros2 = [...marvel_heros, ...dc_heros]
// console.log(all_heros2)

// console.log(Array.isArray(dc_heros)) //true

// console.log(Array.isArray({})) //false

// console.log(Array.isArray("Emon")) //false

// console.log(Array.from("Emon")) //['E', 'm', 'o', 'n']

// let names = "Emon"
// let age = 24

// console.log(Array.of(names, age)) //['Emon', 24]