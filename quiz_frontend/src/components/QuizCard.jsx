import Wrapper from './Wrapper'
import QuizAnswer from './QuizAnswer'

const QuizCard = ({ quiz, onAnswer, showFeedback, current, total }) => {
  return (
    <Wrapper>
      <div className="flex justify-between items-center mb-4">
        <p className="text-lg font-medium text-gray-300">
          Question {current + 1} of {total}
        </p>
        <span className="text-sm bg-gray-700 opacity-80 px-3 py-1 rounded-full">
          {showFeedback
            ? Math.round(((current + 1) / total) * 100) + '% complete'
            : Math.round((current / total) * 100) + '% complete'}
        </span>
      </div>
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
