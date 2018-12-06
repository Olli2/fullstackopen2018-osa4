const listHelper = require('../utils/list_helper')

test('dummy is called', () => {
  const blogs = []

  const result = listHelper.dummy(blogs)
  expect(result).toBe(1)
})

describe('total likes', () => {
    const listWithOneBlog = [
      {
        _id: '5a422aa71b54a676234d17f8',
        title: 'Go To Statement Considered Harmful',
        author: 'Edsger W. Dijkstra',
        url: 'http://www.u.arizona.edu/~rubinson/copyright_violations/Go_To_Considered_Harmful.html',
        likes: 5,
        __v: 0
      }
    ]

    const listWithTwoBlogs = [
        {
          _id: '5a422aa71b54a676234d17f8',
          title: 'Go To Statement Considered Harmful',
          author: 'Edsger W. Dijkstra',
          url: 'http://www.u.arizona.edu/~rubinson/copyright_violations/Go_To_Considered_Harmful.html',
          likes: 15,
          __v: 0
        },
        {
            _id: '5a422aa71b54a676234d17f8',
            title: 'Go To Statement Considered Harmful',
            author: 'Edsger W. Dijkstra',
            url: 'http://www.u.arizona.edu/~rubinson/copyright_violations/Go_To_Considered_Harmful.html',
            likes: 0,
            __v: 0
          }
      ]

      const listWithFourBlogs = [
        {
          _id: '5a422aa71b54a676234d17f8',
          title: 'Go To Statement Considered Harmful',
          author: 'Edsger W. Dijkstra',
          url: 'http://www.u.arizona.edu/~rubinson/copyright_violations/Go_To_Considered_Harmful.html',
          likes: 100,
          __v: 0
        },
        {
            _id: '5a422aa71b54a676234d17f8',
            title: 'Go To Statement Considered Harmful',
            author: 'Edsger W. Dijkstra',
            url: 'http://www.u.arizona.edu/~rubinson/copyright_violations/Go_To_Considered_Harmful.html',
            likes: 100,
            __v: 0
          },
          {
            _id: '5a422aa71b54a676234d17f8',
            title: 'Go To Statement Considered Harmful',
            author: 'Edsger W. Dijkstra',
            url: 'http://www.u.arizona.edu/~rubinson/copyright_violations/Go_To_Considered_Harmful.html',
            likes: 100,
            __v: 0
          },
          {
              _id: '5a422aa71b54a676234d17f8',
              title: 'Go To Statement Considered Harmful',
              author: 'Edsger W. Dijkstra',
              url: 'http://www.u.arizona.edu/~rubinson/copyright_violations/Go_To_Considered_Harmful.html',
              likes: 100,
              __v: 0
            }
      ]
  
    test('when list has only one blog equals the likes of that', () => {
      const result = listHelper.totalLikes(listWithOneBlog)
      expect(result).toBe(5)
    })

    test('when list has two blogs equals the likes of that', () => {
        const result = listHelper.totalLikes(listWithTwoBlogs)
        expect(result).toBe(15)
    })

    test('when list has four blogs equals the likes of that', () => {
        const result = listHelper.totalLikes(listWithFourBlogs)
        expect(result).toBe(400)
    })

    test('when list has no blogs equals 0', () => {
        const result = listHelper.totalLikes([])
        expect(result).toBe(0)
    })
  })



  describe('total likes', () => {
    const listWithOneBlog = [
      {
        _id: '5a422aa71b54a676234d17f8',
        title: 'g',
        author: 'gg',
        url: 'www',
        likes: 5,
        __v: 0
      }
    ]

    const listWithTwoBlogs = [
        {
          _id: '5a422aa71b54a676234d17f8',
          title: 'f',
          author: 'ff',
          url: 'www',
          likes: 15,
          __v: 0
        },
        {
            _id: '5a422aa71b54a676234d17f8',
            title: 'a',
            author: 'aa',
            url: 'www',
            likes: 0,
            __v: 0
          }
      ]

      const listWithFourBlogs = [
        {
          _id: '5a422aa71b54a676234d17f8',
          title: 'b',
          author: 'bb',
          url: 'www',
          likes: 100,
          __v: 0
        },
        {
          _id: '5a422aa71b54a676234d17f8',
          title: 'c',
          author: 'cc',
          url: 'www',
          likes: 200,
          __v: 0
        },
        {
          _id: '5a422aa71b54a676234d17f8',
          title: 'd',
          author: 'dd',
          url: 'www',
          likes: 300,
          __v: 0
        },
        {
          _id: '5a422aa71b54a676234d17f8',
          title: 'e',
          author: 'ee',
          url: 'www',
          likes: 400,
          __v: 0
        }
      ]
  
    test('when list has no blogs equals 0', () => {
        const result = listHelper.favoriteBlog([])
        expect(result).toBe(0)
    })
    test('when list has one blog equals corr obj', () => {
        const result = listHelper.favoriteBlog(listWithOneBlog)
        expect(result).toEqual({
            _id: '5a422aa71b54a676234d17f8',
            title: 'g',
            author: 'gg',
            url: 'www',
            likes: 5,
            __v: 0
          })
    })
    test('when list has two blogs equals corr obj', () => {
        const result = listHelper.favoriteBlog(listWithTwoBlogs)
        expect(result).toEqual({
            _id: '5a422aa71b54a676234d17f8',
            title: 'f',
            author: 'ff',
            url: 'www',
            likes: 15,
            __v: 0
          })
    })
    test('when list has two blogs equals 15', () => {
        const result = listHelper.favoriteBlog(listWithFourBlogs)
        expect(result).toEqual({
            _id: '5a422aa71b54a676234d17f8',
            title: 'e',
            author: 'ee',
            url: 'www',
            likes: 400,
            __v: 0
          })
    })
  })