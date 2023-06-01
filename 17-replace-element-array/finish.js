const parametrArray = [23, '', undefined, 'something', {name: 'Vladislav'}]
console.log(parametrArray)

const temp = parametrArray[4]
parametrArray[4] = parametrArray[0]
parametrArray[0] = temp

console.log(parametrArray)