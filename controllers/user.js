const usersRouter = require('express').Router()
const bodyParser = require('body-parser')
const User = require('../models/user')
const bcrypt = require('bcrypt')

usersRouter.use(bodyParser.json())

const formatUser = (user) => {
    return ({
        id: user.id,
        username: user.username,
        name: user.name,
        adult: user.adult
    })
}

usersRouter.post('/', async (req, res) => {
    try {
        const body = req.body

        const existingUser = await User.find({username: body.username})
        if(existingUser.length > 0) return res.status(400).json({error: 'username not unique'})

        const saltRounds = 10
        const passwordHash = await bcrypt.hash(body.password, saltRounds)

        const user = new User({
            username: body.username,
            name: body.name,
            adult: body.adult,
            passwordHash
        })

        const savedUser = await user.save()
        res.json(formatUser(savedUser))
    } catch (e) {
        console.log(e)
        res.status(500).json({error: 'There was an error'})
    }
})

usersRouter.get('/', async (req, res) => {
    const users = await User.find({})
    res.json(users.map(formatUser))
})

module.exports = usersRouter