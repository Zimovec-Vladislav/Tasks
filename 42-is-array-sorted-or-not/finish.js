const a = [5, 'abc', 10, 1]
const b = [4, 10, 14, 25, 25, 50]
const c = [150, 132, 80, 40]
const d = [15, 26, 10, 23, 85]

function arraySortInfo(inputArray) {
    
    if (inputArray.some((element) => typeof element === 'string')) { return "Некоторые элементы не являются числами" }

    if (inputArray.every(
            (element, index) => index > 0 ? element >= inputArray[index - 1] : true)
        ) { 
            return "Массив отсортирован по возрастанию" 
        }

    if (inputArray.every(
        (element, index) =>index > 0 ? element <= inputArray[index - 1] : true
    )) { return "Массив отсортирован по убыванию" }

    return "Массив не отсортирован"
}

console.log(arraySortInfo(a)) // Некоторые элементы не являются числами
console.log(arraySortInfo(b)) // Массив отсортирован по возрастанию
console.log(arraySortInfo(c)) // Массив отсортирован по убыванию
console.log(arraySortInfo(d)) // Массив не отсортирован