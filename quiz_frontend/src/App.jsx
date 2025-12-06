import { useState, useEffect } from 'react'
import Login from './components/Login'
import Register from './components/Register'
import Container from './components/Container'
import MainTitle from './components/MainTitle'
import QuizCard from './components/QuizCard'
import SelectForm from './components/SelectForm'
import UserScore from './components/UserScore'
import ProgressBar from './components/ProgressBar'
import SmoothConfetti from './components/SmoothConfetti'
import quizService from './services/quizzes'
import QuizButton from './components/QuizButton'
import Header from './components/Header'

const App = () => {
  // All quizzes
  const [quizzes, setQuizzes] = useState([])
  const [categories, setCategories] = useState([])
  // Selected quiz
  const [selectedQuizName, setSelectedQuizName] = useState(false)
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

  useEffect(() => {
    const loggedUserJSON = window.localStorage.getItem('loggedUser')
    if (loggedUserJSON) {
      const user = JSON.parse(loggedUserJSON)
      quizService.setToken(user.token)
      setUser(user)
    }
  }, [])

  const toggleForms = () => {
    setAccountExists(!accountExists)
  }

  const restartQuiz = () => {
    setSelectedQuestions([])
    setCurrentQuestion(0)
    setScore(0)
    setSelectedQuizName(false)

    setSelectedAnswer(null)
    setShowFeedback(false)
    setIsFinished(false)
  }

  const handleSelectOption = (e) => {
    const newValue = e.target.value
    restartQuiz()
    setSelectedQuizName(newValue)
    setSelectedQuestions(quizzes.filter((q) => q.category === newValue))

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
      {showCongratulations && <SmoothConfetti />}
      <Container>
        <MainTitle />
        {!user &&
          (accountExists === true ? (
            <Login setUser={setUser} toggleForms={toggleForms} />
          ) : (
            <Register toggleForms={toggleForms} />
          ))}
        {user && (
          <>
            <Header
              name={user.name}
              setUser={setUser}
              clearFields={restartQuiz}
            />
            <SelectForm
              categories={categories}
              handleSelectOption={handleSelectOption}
              selectedQuizName={selectedQuizName}
            />
          </>
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
                <QuizButton
                  bringNext={bringNextQuestion}
                  currentQuestion={currentQuestion}
                  total={selectedQuestions.length}
                />
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
