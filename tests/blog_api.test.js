const supertest = require('supertest')
const { app, server } = require('../index')
const api = supertest(app)
const Blog = require('../models/blog')

const initialBlogs = [
    {title: 'g', author: 'gg', url: 'ggg', likes: 5},
    {title: 'a', author: 'aa', url: 'aaa', likes: 6},
    {title: 'b', author: 'bb', url: 'bbb', likes: 7}
]

const oneBlog = {title: 'myblog', author: 'myname', url: 'myurl', likes: 100}

beforeAll(async () => {
    await Blog.remove({})
  
    let blogObj = new Blog(initialBlogs[0])
    await blogObj.save()
  
    blogObj = new Blog(initialBlogs[1])
    await blogObj.save()

    blogObj = new Blog(initialBlogs[2])
    await blogObj.save()
  })

test('blogs returned as json', async () => {
    await api
      .get('/api/blogs')
      .expect(200)
      .expect('Content-Type', /application\/json/)
  })

test('all blogs are returned', async () => {
    const res = await api
        .get('/api/blogs')
    expect(res.statusCode).toBe(200)
    expect(res.body.length).toBe(initialBlogs.length)
})

test('new blog is saved', async () => {
    const res = await api
        .post('/api/blogs')
        .send(oneBlog)
    expect(res.statusCode).toBe(201) 
})
  
afterAll(() => {
    server.close()
})

