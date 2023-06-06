let myVariable1 = 10
let myVariable2 = '5'

const compVar = (num1, num2) => parseInt(num1) <= parseInt(num2)

console.log(compVar(myVariable1, myVariable2))

myVariable1 = '20'
myVariable2 = 100
console.log(compVar(myVariable1, myVariable2))