const UserScore = ({ quiz, score, total }) => {
  return (
    <div className="flex flex-col justify-between items-center pt-4 mb-4">
      <h2 className="text-3xl text-center font-bold mb-4">
        Quiz <span className="text-pink-400">{quiz}</span> is completed!
      </h2>
      <p className="text-xl font-semibold mb-4">
        Your score
        <span className="text-2xl font-semibold mb-4"> {score}</span> out of {' '}
        {total}
      </p>
      <p>
        It is{' '}
        <span className="text-xl font-semibold mb-4">
          {Math.round((score / total) * 100)}%{' '}
        </span>
      </p>
    </div>
  )
}

export default UserScore
