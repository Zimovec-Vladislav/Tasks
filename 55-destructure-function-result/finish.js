function minMax(...nums) {
    const avg = [...nums].reduce((total, el) => total + el/[...nums].length).toFixed(0)
    return [Math.min(...nums), Math.max(...nums), avg]
}

let min, max, avg
/* Вызовите здесь функцию "minMax" с аргументами 24, 5, 34, 10 
и используя деструктуризацию массивов присвойте значения переменным "min" и "max" */
;[min, max, avg] = minMax(24, 5, 34, 10)
console.log(min, max, avg) // 5, 34

/* Вызовите здесь функцию "minMax" еще раз с аргументами 18, 23, 103, 70, 80, 25 */
;[min, max, avg] = minMax(18, 23, 103, 70, 80, 25)
console.log(min, max, avg) // 18, 103
