const UserScore = ({ score, total }) => {
  return (
          <div className='flex flex-col justify-between items-center pt-4 mb-4'>
            <h2 className='text-3xl font-bold mb-4'>Quiz completed!</h2>
            <p className='text-xl font-semibold'>Your score <span>{score}</span> out of {total }</p>
          </div>
  )
}

export default UserScore
