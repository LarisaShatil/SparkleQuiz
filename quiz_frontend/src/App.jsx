import { useState, useEffect } from 'react'
import quizService from './services/quizzes'


const App = () => {
  const [quizzes, setQuizzes] = useState([])

    useEffect(() => {
      quizService.getAll().then(quizzes =>{
      setQuizzes(quizzes)
        console.log('quizzes  :', quizzes)
      }
    )
  }, [])

  return (
    <>
      <h1>Quiz Time</h1>
      {quizzes.length > 0 && 
        quizzes.map(q => <div><h2>{q.question}</h2></div>)
    }
    </>
  )
}

export default App
