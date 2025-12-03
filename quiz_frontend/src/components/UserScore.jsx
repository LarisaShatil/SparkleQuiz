const UserScore = ({score}) => {
  return (
    <div
      className="p-2 mb-2 bg-violet-800/50 
            rounded-md backdrop-filter backdrop-blur-sm ">
      <p className="text-bold">Your score: {score}</p>
    </div>
  )
}

export default UserScore
