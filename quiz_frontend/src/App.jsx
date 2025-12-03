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
  const [user, setUser] = useState(false)

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
    setScore(0)
    setShowFeedback(false)
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

  const restartQuiz = () => {
    setCurrentQuestion(0)
    setScore(0)
    setSelectedAnswer(null)
    setShowFeedback(false)
    setIsFinished(false)
  }

  return (
    <>
      <Container>
        <h1 className="text-4xl font-semibold p-4 mb-4 text-white text-center">
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
        {selectedQuiz.length > 0 && !isFinished && (
          <>
            <QuizCard
              showFeedback={showFeedback}
              onAnswer={handleAnswer}
              quiz={selectedQuiz[currentQuestion]}
              current={currentQuestion}
              total={selectedQuiz.length}
            />
            <div className="flex justify-center items-center">
              {showFeedback && (
                <button
                  onClick={bringNextQuestion}
                  className=" mt-4  rounded-sm font-semibold
              bg-linear-to-r from-violet-900 to-pink-400
              py-2 px-6 shadow-lg hover:from-violet-600 hover:to-pink-300
              hover:text-violet-900 transition-colors duration-300"
                >
                  {currentQuestion + 1 < selectedQuiz.length
                    ? 'Continue'
                    : 'See results'}
                </button>
              )}
            </div>
          </>
        )}
        {selectedQuiz.length > 0 && isFinished && (
          <UserScore score={score} total={selectedQuiz.length} />
        )}
      </Container>
    </>
  )
}

export default App
