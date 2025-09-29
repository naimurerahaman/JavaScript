const name = 'Emon'
const cgpa = 3.55

console.log(`Hello my name is ${name} & my CGPA is ${cgpa}`)

const gameName = new String('PUBG-Mobile')
console.log(gameName[0])
console.log(__proto__)

console.log(gameName.split('-'))

console.log(gameName.lenth)
console.log(gameName.toLowerCase())

console.log(gameName.charAt(3))
console.log(gameName.indexOf('G'))

const newString = gameName.substring(0,6)
console.log(newString)

const anotherString = gameName.slice(0,1)
console.log(anotherString)

const newStringOne = "         PUBG           "
console.log(newStringOne.trim())

const url = "www.facebook.com/md%20%emon"
console.log(url.replace('%20%','-'))

console.log(url.includes('emon'))
console.log(url.includes('abid'))

