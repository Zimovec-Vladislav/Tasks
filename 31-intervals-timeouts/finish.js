let num = 0
const myFunction = (userNum) => {
const myInterval = setInterval(() => {
    
    if (num == userNum) {
        clearInterval(myInterval)
    } else {
        num++
        console.log(`Сообщение номер ${num}`)
    }
}, 2000)
}

myFunction(1)