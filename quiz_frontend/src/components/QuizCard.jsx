import React from 'react'
import QuizAnswer from './QuizAnswer'

const QuizCard = ({ quiz }) => {

  return (
    <div className="text-center p-4">
      <h2 className="text-xl font-semibold mb-4">{quiz.question}</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
      {quiz.answers.map((a,i) => <QuizAnswer key={i} answer={a} />)}
      </div>
    </div>
  )
}

export default QuizCard