import Wrapper from './Wrapper'
import QuizAnswer from './QuizAnswer'

const QuizCard = ({ quiz, onAnswer, showFeedback }) => {
  return (
    <Wrapper>
      <h2 className="text-xl font-semibold mb-4">{quiz.question}</h2>
      <div className="grid grid-cols-1 gap-4">
        {quiz.answers.map((a, i) => (
          <QuizAnswer
            key={i}
            answer={a}
            onAnswer={onAnswer}
            showFeedback={showFeedback}
          />
        ))}
      </div>
    </Wrapper>
  )
}

export default QuizCard
