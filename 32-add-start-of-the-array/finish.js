const myArray = [true, null]

// Напишите код здесь
myArray.shift('Hello')
myArray.unshift(100)
console.log(myArray.length)

console.log(myArray) // [100, "Hello", true, null]
