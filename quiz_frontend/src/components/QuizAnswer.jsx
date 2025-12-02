const QuizAnswer = ({ answer})=> {
  return (
    <>
        <button type='submit' className='w-full  rounded-sm font-bold bg-white text-amber-500 hover:bg-amber-400 hover:text-white py-2 transition-colors duration-300'
            // onClick={() => onSelect(a)}
            onClick={() => console.log(answer)}
        >{answer}</button>
    </>
  )
}

export default QuizAnswer
