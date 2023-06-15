function areArraysEqual (firstArray, secondArray) {
    if (firstArray.length === secondArray.length &&
        firstArray.every((element, index) => element === secondArray[index])
        ) return true
    return false
}

const a = [1, 2, 3]
const b = [1, 2, 3]

console.log(a === b) // false (Почему?)

const c = [2, 1, 3]
const d = [1, 2, 3, 4]

console.log(areArraysEqual(a, b)) // true
console.log(areArraysEqual(a, c)) // false
console.log(areArraysEqual(a, d)) // false