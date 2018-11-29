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

const favoriteBlog = (blogs) => {
    let favorite = null
    if(blogs.length === 0) return 0
    favorite = blogs.shift()
    blogs.forEach(e => {
        if(e.likes > favorite.likes) favorite = e
    })
    return favorite
}
  
  module.exports = {
    dummy,
    totalLikes,
    favoriteBlog
  }