import { useState, useEffect } from 'react'
import quizService from './services/quizzes'
import Container from './components/Container'
import QuizCard from './components/QuizCard'
import Login from './components/Login'
import Register from './components/Register'
import SelectForm from './components/SelectForm'
import UserScore from './components/UserScore'

const App = () => {
  // All quizzes
  const [quizzes, setQuizzes] = useState([])
  const [categories, setCategories] = useState([])
  // Selected options
  const [selectedOption, setSelectedOption] = useState('')
  const [selectedQuiz, setSelectedQuiz] = useState([])
  // Quiz progress
  const [currentQuestion, setCurrentQuestion] = useState(0)
  const [selectedAnswer, setSelectedAnswer] = useState(null)
  const [score, setScore] = useState(0)
  const [isFinished, setIsFinished] = useState(false)
  const [showFeedback, setShowFeedback] = useState(false)
  // Login / Registration
  const [accountExists, setAccountExists] = useState(true)
  const [user, setUser] = useState(true)

  useEffect(() => {
    quizService.getAll().then((quizzes) => {
      setQuizzes(quizzes)
      setCategories([...new Set(quizzes.flatMap((quiz) => quiz.category))])
    })
  }, [])

  const toggleForms = () => {
    setAccountExists(!accountExists)
  }

  const handleSelectOption = (e) => {
    const newValue = e.target.value
    setSelectedOption(newValue)
    setSelectedQuiz(quizzes.filter((q) => q.category === newValue))
  }

  const handleAnswer = (option) => {
    if (showFeedback) return

    setSelectedAnswer(option)
    setShowFeedback(true)

    if (option === selectedQuiz[currentQuestion].correct_answer) {
      setScore(score + 1)
    }
  }

  const bringNextQuestion = () => {
    if (currentQuestion + 1 < selectedQuiz.length) {
      setCurrentQuestion(currentQuestion + 1)
      setSelectedAnswer(null)
      setShowFeedback(false)
    } else {
      setIsFinished(true)
    }
  }

  return (
    <>
      <Container>
        <h1 className="text-4xl font-semibold p-4 text-white text-center">
          Quiz Time
        </h1>
        {!user &&
          (accountExists === true ? (
            <Login toggleForms={toggleForms} />
          ) : (
            <Register toggleForms={toggleForms} />
          ))}
        {user && (
          <SelectForm
            categories={categories}
            handleSelectOption={handleSelectOption}
            selectedOption={selectedOption}
          />
        )}
        {selectedQuiz.length > 0 && (
          <>
            <UserScore score={ score} />
            <QuizCard
              showFeedback={showFeedback}
              onAnswer={handleAnswer}
              quiz={selectedQuiz[currentQuestion]}
            />
          </>
        )}
        <div>
          {showFeedback && (
            <button
              onClick={bringNextQuestion}
              className="w-full mt-4  rounded-sm font-bold bg-white 
        text-violet-500 hover:bg-pink-300 hover:text-violet-800 py-2 
        transition-colors duration-300"
            >
              {currentQuestion + 1 < selectedQuiz.length
                ? 'Continue'
                : 'See results'}
            </button>
          )}
        </div>
      </Container>
    </>
  )
}

export default App
