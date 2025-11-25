const quizzesRouter = require('express').Router()
// const middleware = require('../utils/middleware')
const Quiz = require('../models/quize')


quizzesRouter.get('/', async (req, res) => {
  const quizes = await Quiz.find()
  res.json(quizes)
})

quizzesRouter.get('/:id', async (req, res) => {
  const question = await Quiz.findById(req.params.id)

  if (question) {
    res.json(question)
  } else {
    res.status(404).end()
  }
})

quizzesRouter.delete('/:id', async (req, res) => {
  const quiz = await Quiz.findById(req.params.id)

  if (!quiz) {
    return res
      .status(404)
      .json({
        error: 'Quiz is not found'
      })
  }

  await Quiz.findByIdAndDelete(req.params.id)
  res.status(204).end()
})

quizzesRouter.post('/', async (req, res) => {
  // await Quiz.insertMany(general)

  const question = req.body
  const newQuestion = new Quiz(question)
  const savedQuestion = await newQuestion.save()
  res.status(201).json(savedQuestion)
})


quizzesRouter.put('/:id', async (req, res) => {
  const { question, correct_answer, answers, category } = req.body

  const updatedQuestion = await Quiz.findByIdAndUpdate(req.params.id,
    { question, correct_answer, answers, category },
    { new: true, runValidators: true, context: 'query' })

  if (updatedQuestion) {
    res.json(updatedQuestion)
  } else {
    res.status(404).end()
  }
})


module.exports = quizzesRouter