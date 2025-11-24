const express = require('express')
const general = require('./general')
const logger = require('./utils/middleware')
const app = express()

app.use(express.json())
app.use(logger)

app.get('/api/quizes', (req, res) => {
  res.json(general)
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

app.post('/api/quizes/', (req, res) => {
  const question = req.body
  res.json(question)
})


module.exports = app