const thatArray = ['ssix', null, null, 0, 777]
thatArray.push(99)
console.log('Length array equal ' + thatArray.length)

thatArray.push('Win')
console.log('Length array equal ' + thatArray.length)

thatArray.push('I', 'love', 'programming')
console.log(thatArray[7], thatArray[8], thatArray[9])
console.log('Length array equal ' + thatArray.length)
const lastElement = thatArray.pop()
console.log(lastElement)