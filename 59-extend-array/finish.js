class ExtendedArray extends Array {
    sum() {
        return this.reduce((sum, num) => sum + num, 0)
    }
    onlyNumbers() {
        return this.filter( el => typeof el === 'number')
    }
}

const instanceClass1 = new ExtendedArray(2, 9, 10)
console.log(instanceClass1)
console.log(instanceClass1.sum())

const instanceClass2 = new ExtendedArray(33, 2, 99, undefined, 's')
console.log(instanceClass2)
console.log(instanceClass2.onlyNumbers())
console.log(instanceClass2.onlyNumbers().map(el => el**2))

