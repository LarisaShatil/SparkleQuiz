const QuizAnswer = ({ answer, onAnswer, showFeedback }) => {
  return (
    <>
      <button
        type="submit"
        className="w-full  rounded-sm font-bold bg-white 
        text-amber-500 hover:bg-amber-400 hover:text-white py-2 
        disabled:bg-indigo-950 disabled:opacity-50  disabled:text-gray-100 transition-colors duration-300"
        onClick={() => onAnswer(answer)}
        disabled={showFeedback}
      >
        {answer}
      </button>
    </>
  )
}

export default QuizAnswer
