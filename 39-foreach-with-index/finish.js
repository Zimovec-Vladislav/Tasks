const myCities = ['London', 'New York', 'Singapore']

const cityInfo = (myCity, index) => {
    return `${myCity} is at the index ${index} in the myCities array`
}

for (const index in myCities) {
    console.log(cityInfo(myCities[index], index));
}
