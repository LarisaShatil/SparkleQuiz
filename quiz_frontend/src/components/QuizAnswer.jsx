const QuizAnswer = ({ answer})=> {
  return (
      <div >
        <button  className="justify-start w-full bg-emerald-800 p-4"
            variant="outline"
            // onClick={() => onSelect(a)}
            onClick={() => console.log(answer)}
        >{answer}</button>
      </div>
  )
}

export default QuizAnswer
