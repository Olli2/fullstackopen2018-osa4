const mongoose = require('mongoose')

const Blog = mongoose.model('Blog', {
    title: String,
    author: String,
    url: String,
    likes: Number
  })
  
const mongoUrl = 'mongodb://user:pass@ds155663.mlab.com:55663/fullsdb'
mongoose.connect(mongoUrl, { useNewUrlParser: true })

module.exports = Blog