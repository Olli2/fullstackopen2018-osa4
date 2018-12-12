const http = require('http')
const express = require('express')
const app = express()
const cors = require('cors')
const Blog = require('./models/blog')
const blogsRouter = require('./controllers/blog')
const usersRouter = require('./controllers/user')
const config = require('./utils/config')
const mongoose = require('mongoose')

mongoose.connect(config.mongoUrl, { useNewUrlParser: true })
  .then(() => {
    console.log('Connected to database: ', config.mongoUrl)
  }).catch( error => {
    console.log('mongoURL: ', config.mongoUrl)
    console.log('Error connecting to database:', error)
  })


app.use(cors())
app.use('/api/blogs', blogsRouter)
app.use('/api/users', usersRouter)

const server = http.createServer(app)

server.listen(config.port, () => {
  console.log(`Server running on port ${config.port}`)
})

server.on('close', () => {
  mongoose.connection.close
})

module.exports = {
  app, server
}