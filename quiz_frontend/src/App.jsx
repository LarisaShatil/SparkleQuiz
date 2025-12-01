import { useState, useEffect } from 'react'
import quizService from './services/quizzes'
import Container from './components/Container'
import QuizCard from './components/QuizCard'


const App = () => {
  const [quizzes, setQuizzes] = useState([])
  const [categories, setCategories]=useState([])
  const [selectedOption, setSelectedOption] = useState('')
  const [selectedQuiz, setSelectedQuiz] = useState([])

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

  return (
    <>
      <Container>
        <div className="text-center p-4">
        <h1 className="text-2xl font-semibold mb-4 p-4">Quiz Time</h1>
        <h2 className='text-xl font-semiboldp-4'>Choose your category</h2>
          <select
          onChange={handleSelectOption}
          value={selectedOption}
        >
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
