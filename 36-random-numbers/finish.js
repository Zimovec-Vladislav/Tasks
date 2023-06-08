const MIN = 1000
const MAX = 9999

const myNumbers = [2355, 7235, 8135, 1762, 2361, 8351]

const randomNumber = getRandomNumber(MAX, MIN)
function getRandomNumber (MAX, MIN) {
    const num = Math.floor(Math.random() * (MAX - MIN)) + MIN
    return num
}

function addOrGener (myNumbers, randomNumber) {
    
    if (myNumbers.includes(randomNumber)) {
        getRandomNumber(MAX, MIN)
    } else {
        myNumbers.push(randomNumber)
    }
}

addOrGener(myNumbers, randomNumber)

console.log(myNumbers)