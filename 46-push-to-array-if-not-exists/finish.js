const pushIfUnique = (inputArray, newElement) => {
    if (inputArray.includes(newElement)) return console.log(`${newElement} уже находится в массиве`)
    return inputArray.push(newElement)
}

const myNumbers = [123, 50, 27]

pushIfUnique(myNumbers, 50) // "50 уже в массиве"
console.log(myNumbers) // [123, 50, 27]

pushIfUnique(myNumbers, 80)
console.log(myNumbers) // [123, 50, 27, 80]

pushIfUnique(myNumbers, 80) // "80 уже в массиве"
console.log(myNumbers) // [123, 50, 27, 80]

pushIfUnique(myNumbers, 77)
console.log(myNumbers) // [123, 50, 27, 80, 77]
