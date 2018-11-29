const dummy = (blogs) => {
    return 1
}

const totalLikes = (blogs) => {
    let sum = 0
    blogs.forEach(e => {
        sum += e.likes
    })
    return sum
}
  
  module.exports = {
    dummy,
    totalLikes
  }