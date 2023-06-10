const postsJSON = [
  '{"postId":1355,"commentsQuantity":5}',
  '{"postId":5131,"commentsQuantity":13}',
  '{"postId":6134,"commentsQuantity":2}',
  '{"postId":2351,"commentsQuantity":8}',
]

const parseJSON = postsJSON.map(JSON.parse)

console.log(parseJSON);
console.log(parseJSON[1].postId)
console.log(parseJSON[parseJSON.length-1].commentsQuantity)