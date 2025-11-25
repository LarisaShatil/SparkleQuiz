const express = require('express')
const general = require('./general')
const mongoose = require('mongoose')
const config = require('./utils/config')
const logger = require('./utils/logger')
const middleware = require('./utils/middleware')

const Quiz = require('./models/quize.js')

const app = express()
app.use(express.json())



app.get('/api/quizes', async (req, res) => {
  const quizes = await Quiz.find()
  res.json(quizes)
})

app.get('/api/quizes/:id', (req, res) => {
  const id = req.params.id
  const question = general.find(q => q.id === id)

  if (question) {
    res.json(question)
  } else {
    res.status(404).end()
  }
})

app.delete('/api/quizes/:id', (req, res) => {
  const id = req.params.id
  questions = general.filter(q => q.id !== id)

  res.status(204).end()
})

app.post('/api/quizes/', async (req, res) => {
  const question = req.body
  const newQuestion = new Quiz(question)
  const savedQuestion = await newQuestion.save()
  res.status(201).json(savedQuestion)
})

logger.info('connecting to --->', config.MONGODB_URI)

mongoose.connect(config.MONGODB_URI)
  .then(() => {
    logger.info('===> connected to MongoDB')
  })
  .catch((err) => {
    logger.error('!!! error connection to MongoDB: ', err.message)
  })

app.use(middleware)


module.exports = app