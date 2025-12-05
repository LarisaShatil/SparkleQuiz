const bcrypt = require('bcrypt')
const loginRouter = require('express').Router()
const User = require('../models/user')

loginRouter.post('/', async (req, res) => {
  console.log('BODY:', req)
  const { email, password } = req.body

  const user = await User.findOne({ email })

  const passwordCorrect = user === null
    ? false
    : await bcrypt.compare(password, user.passwordHash)

  if (!(user && passwordCorrect)) {
    return res.status(401).json({
      error: 'invalid email or password'
    })
  }

  // token logic to ADD

  res
    .status(200)
    .send({ email: user.email, name: user.name })

})

module.exports = loginRouter