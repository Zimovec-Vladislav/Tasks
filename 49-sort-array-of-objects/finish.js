const sortProductsByPrice = (products) => products.map(el => el).sort((a, z) => a.price - z.price)

const inputProducts = [
  {
    title: 'Phone case',
    price: 23,
    quantity: 2,
    category: 'Accessories',
  },
  {
    title: 'Android phone',
    price: 150,
    quantity: 1,
    category: 'Phones',
  },
  {
    title: 'Headphones',
    price: 78,
    quantity: 1,
    category: 'Accessories',
  },
  {
    title: 'Sport Watch',
    price: 55,
    quantity: 2,
    category: 'Watches',
  },
]

const sortedProducts = sortProductsByPrice(inputProducts)

 console.log(sortedProducts) // Массив отсортированных товаров

 console.log(inputProducts) // Оригинальный массив не должен измениться
