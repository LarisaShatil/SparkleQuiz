import { useState, useEffect } from 'react'
import quizService from './services/quizzes'
import Container from './components/Container'
import QuizCard from './components/QuizCard'
import Login from './components/Login'
import Register from './components/Register'


const App = () => {
  const [quizzes, setQuizzes] = useState([])
  const [categories, setCategories]=useState([])
  const [selectedOption, setSelectedOption] = useState('')
  const [selectedQuiz, setSelectedQuiz] = useState([])
  const [accountExists, setAccountExists]=useState(true)

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
    console.log('Selected category: ', newValue)
    console.log('Selected Quiz: ', selectedQuiz)
  }

  const handleRegistration = () => {
    console.log('REGISTRATION')
    setAccountExists(!accountExists)
  }

  return (
    <>
      <Container >
        <div className="text-center p-4">
          <h1 className="text-2xl font-semibold mb-4 p-4 text-white">Quiz Time</h1>
          {accountExists === true ? <Login handleRegistration={handleRegistration} /> : <Register handleRegistration={handleRegistration}/>}
          <h2 className='text-xl font-semiboldp-4 pb-4 text-white'>Choose your category</h2>
          <select
          onChange={handleSelectOption}
          value={selectedOption}
          >
            <option value='' disabled>Select a quiz</option>
            {categories.map(category => (
              <option
                key={category}
                value={category}
              >
                {category}
              </option>
          ))}
          </select>
        </div>

          {selectedQuiz.length > 0 && selectedQuiz.map(
          q => <QuizCard key={q.id} quiz={q} />)}
    </Container>
    </>
  )
}

export default App
