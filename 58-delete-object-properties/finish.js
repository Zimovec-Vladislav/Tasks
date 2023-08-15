let person = {
  _id: '5ad8cefcc0971792dacb3f1f',//delete
  index: 4,
  processed: false,//delete
  cart: ['item1', 'item2', 'item3'],//delete
  email: 'slarsen@test.com',
  name: 'Samanta Larsen',
  cartId: 435,
}

{
  let _id, processed, cart
  ;({ _id, processed, cart, ...person } = person)
  console.log(_id, processed, cart)
}


console.log(person)
/*
{
  index: 4,
  email: "slarsen@test.com",
  name: "Samanta Larsen",
  cartId: 435
}
*/
