const posts = [
  { postId: 1355, commentsQuantity: 5 },
  { postId: 5131, commentsQuantity: 13 },
  { postId: 6134, commentsQuantity: 2 },
]

const findPostById = (postId, posts) => {
  return posts.find((post) => post.postId === postId)
}

console.log(findPostById(6134, posts)) 

console.log(findPostById(4511, posts)) 
