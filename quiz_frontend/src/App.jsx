import { useState, useEffect } from 'react'
import Confetti from 'react-confetti'
import Login from './components/Login'
import Register from './components/Register'
import Container from './components/Container'
import QuizCard from './components/QuizCard'
import SelectForm from './components/SelectForm'
import UserScore from './components/UserScore'
import ProgressBar from './components/ProgressBar'
import quizService from './services/quizzes'

const App = () => {
  // All quizzes
  const [quizzes, setQuizzes] = useState([])
  const [categories, setCategories] = useState([])
  // Selected quiz
  const [selectedQuizName, setSelectedQuizName] = useState('')
  const [selectedQuestions, setSelectedQuestions] = useState([])
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

  const restartQuiz = () => {
    setCurrentQuestion(0)
    setScore(0)
    setSelectedAnswer(null)
    setShowFeedback(false)
    setIsFinished(false)
  }

  const handleSelectOption = (e) => {
    const newValue = e.target.value
    setSelectedQuizName(newValue)
    setSelectedQuestions(quizzes.filter((q) => q.category === newValue))
    restartQuiz()
  }

  const handleAnswer = (option) => {
    if (showFeedback) return

    setSelectedAnswer(option)
    setShowFeedback(true)

    if (option === selectedQuestions[currentQuestion].correct_answer) {
      setScore(score + 1)
    }
  }

  const bringNextQuestion = () => {
    if (currentQuestion + 1 < selectedQuestions.length) {
      setCurrentQuestion(currentQuestion + 1)
      setSelectedAnswer(null)
      setShowFeedback(false)
    } else {
      setIsFinished(true)
    }
  }

  const percentageOfCorrect = (score / selectedQuestions.length) * 100
  const showCongratulations = isFinished && percentageOfCorrect > 80

  return (
    <>
      <Container>
        {showCongratulations && <Confetti />}
        <h1 className="text-4xl font-semibold p-4 mb-4 text-white text-center">
          Quiz Time
        </h1>
        {!user &&
          (accountExists === true ? (
            <Login
              setUser={setUser}
              toggleForms={toggleForms}
            />
          ) : (
            <Register
              setUser={setUser}
              toggleForms={toggleForms}
            />
          ))}
        {user && (
          <SelectForm
            categories={categories}
            handleSelectOption={handleSelectOption}
            selectedQuizName={selectedQuizName}
          />
        )}
        {selectedQuestions.length > 0 && !isFinished && (
          <>
            <ProgressBar
              current={currentQuestion}
              selected={selectedAnswer}
              total={selectedQuestions.length}
              finished={isFinished}
            />
            <QuizCard
              showFeedback={showFeedback}
              onAnswer={handleAnswer}
              quiz={selectedQuestions[currentQuestion]}
              current={currentQuestion}
              total={selectedQuestions.length}
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
                  {currentQuestion + 1 < selectedQuestions.length
                    ? 'Continue'
                    : 'See results'}
                </button>
              )}
            </div>
          </>
        )}
        {selectedQuestions.length > 0 && isFinished && (
          <UserScore
            score={score}
            total={selectedQuestions.length}
            quiz={selectedQuizName}
          />
        )}
      </Container>
    </>
  )
}

export default App
