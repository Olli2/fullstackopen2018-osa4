const blogsRouter = require('express').Router()
const Blog = require('../models/blog')
const bodyParser = require('body-parser')

blogsRouter.use(bodyParser.json())

blogsRouter.get('/', async (request, response) => {
    const blogs = await Blog
      .find({})
    response.json(blogs)
  })
  
blogsRouter.post('/', async (request, response) => {
    const blog = new Blog(request.body)
    const savedBlog = await blog.save()
    response.status(201).json(savedBlog)
})

blogsRouter.delete('/:id', async (request, response) => {
  try {
    await Blog
      .findByIdAndDelete(request.params.id)
    response.status(204).end()
  } catch(e) {
    console.log('Error: ', e);
    response.status(500).json({ error: 'There was an error.' })
  }
      
})

module.exports = blogsRouter