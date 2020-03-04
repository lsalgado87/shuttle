let shuttleName = "Determination"
let speed = 17500
let mars = 225000000
let moon = 384400
let miles = 0.621

console.log(typeof shuttleName)
console.log(typeof speed)
console.log(typeof mars)
console.log(typeof moon)
console.log(typeof miles)

let milesToMars = (mars * miles)

let hoursToMars = (milesToMars / speed)

let daysToMars = (hoursToMars / 24)

console.log(milesToMars)
console.log(hoursToMars)
console.log(daysToMars)

console.log(hoursToMars)

console.log(shuttleName + " will take " + daysToMars + " days to reach Mars.")

let milesToMoon = (moon * miles)

let hoursToMoon = (milesToMoon / speed)

let daysToMoon = (hoursToMoon / 24)

console.log(shuttleName + " will take " + daysToMoon + " days to reach the Moon.")