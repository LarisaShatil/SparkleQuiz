
const ProgressBar = ({ current, selected, total, finished }) => {
    const calculateProgress = () => {
        if (finished) return 100
        const baseProgress = (current / total) * 100
        const questionProgress = selected ? (1 / total) * 100 : 0

        return baseProgress + questionProgress
      }

  return (
    <div className="w-full max-w-xl mb-6">
      <div className="bg-gray-600 h-3 rounded-full overflow-hidden">
        <div
          className="h-full bg-linear-to-r from-indigo-500
         to-purple-600 duration-500 ease-out transition-all"
          style={{ width: `${calculateProgress()}%` }}
        ></div>
      </div>
    </div>
  )
}

export default ProgressBar