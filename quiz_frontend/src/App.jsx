import { useState, useEffect } from 'react'
import quizService from './services/quizzes'
import Container from './components/Container'
import QuizCard from './components/QuizCard'
import Login from './components/Login'
import Register from './components/Register'
import SelectForm from './components/SelectForm'


const App = () => {
  const [quizzes, setQuizzes] = useState([])
  const [categories, setCategories]=useState([])
  const [selectedOption, setSelectedOption] = useState('')
  const [selectedQuiz, setSelectedQuiz] = useState([])
  const [accountExists, setAccountExists] = useState(true)
  const [user, setUser] = useState(false)

    useEffect(() => {
      quizService.getAll().then(quizzes =>{
        setQuizzes(quizzes)
        setCategories([...new Set(quizzes.flatMap(quiz => quiz.category))])
      }
    )
    }, [])

  

  const handleSelectOption = (e) => {
    const newValue = e.target.value
    setSelectedOption(newValue)
    setSelectedQuiz(quizzes.filter(q => q.category === newValue))
  }

  const toggleForms = () => {
    setAccountExists(!accountExists)
  }

  return (
    <>
      <Container >
        <h1 className="text-4xl font-semibold mb-4 p-4 text-white text-center">Quiz Time</h1>
        {(!user) &&
          (accountExists === true ?
            <Login toggleForms={toggleForms} /> :
            <Register toggleForms={toggleForms} />
          )}
        {user && 
        <SelectForm categories={categories} handleSelectOption={handleSelectOption} selectedOption={selectedOption} />}
        {selectedQuiz.length > 0 && selectedQuiz.map(q => <QuizCard key={q.id} quiz={q} />)}
    </Container>
    </>
  )
}

export default App
