const mongoose = require('mongoose')

const userSchema = mongoose.Schema({
  login: {
    type: String,
    minlength: 3,
    required: true,
    unique: true
  },
  name: String,
  role: {
    type: String,
    enum: ['user', 'admin'],
    default: 'user'
  },
  passwordHash: {
    type: String,
    minlength: 3,
    required: true
  }
})

userSchema.set('toJSON', {
  transform: (doc, returnedObj) => {
    returnedObj.id = returnedObj._id.toString()
    delete returnedObj._id
    delete returnedObj.__v

    delete returnedObj.passwordHash
  }
})

module.exports = mongoose.model('User', userSchema)