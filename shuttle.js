const shuttleName = "Determination"
const speed = 17500
const mars = 225000000
const moon = 384400
const miles = 0.621

console.log(typeof shuttleName)
console.log(typeof speed)
console.log(typeof mars)
console.log(typeof moon)
console.log(typeof miles)

const milesToMars = (mars * miles)

const hoursToMars = (milesToMars / speed)

const daysToMars = (hoursToMars / 24)

console.log(milesToMars)
console.log(hoursToMars)
console.log(daysToMars)

console.log(hoursToMars)

console.log(shuttleName + " will take " + daysToMars + " days to reach Mars.")

const milesToMoon = (moon * miles)

const hoursToMoon = (milesToMoon / speed)

const daysToMoon = (hoursToMoon / 24)

console.log(shuttleName + " will take " + daysToMoon + " days to reach the Moon.")