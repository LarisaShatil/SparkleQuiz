const QuizButton = ({ currentQuestion, total, bringNext }) => {
  return (
    <button
      onClick={bringNext}
      className=" mt-4  rounded-sm font-semibold
              bg-linear-to-r from-violet-900 to-pink-400
              py-2 px-6 shadow-lg hover:from-violet-600 hover:to-pink-300
              hover:text-violet-900 transition-colors duration-300"
    >
      {currentQuestion + 1 < total ? 'Continue' : 'See results'}
    </button>
  )
}

export default QuizButton