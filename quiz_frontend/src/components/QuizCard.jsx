import Wrapper from './Wrapper'
import QuizAnswer from './QuizAnswer'

const QuizCard = ({ quiz }) => {

  return (
    <Wrapper >
      <h2 className="text-xl font-semibold mb-4">{quiz.question}</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      {quiz.answers.map((a,i) => <QuizAnswer key={i} answer={a} />)}
      </div>
    </Wrapper>
  )
}

export default QuizCard