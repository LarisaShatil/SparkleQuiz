const SelectForm = ({ categories, handleSelectOption, selectedOption }) => {
  return (
    <div className="block text-center mb-6">
      <h2 className="text-xl font-semibold p-4 pb-4 text-white text-center">
        Choose your category
      </h2>
      <select
        className="w-48 bg-neutral-900/60 text-slate-200 border border-violet-400/40 rounded-md p-2 px-3 py-2 shadow-md shadow-fuchsia-500/30
    backdrop-blur-sm
    focus:outline-none
    focus:border-fuchsia-400
    focus:shadow-fuchsia-400/50
    transition"
        onChange={handleSelectOption}
        value={selectedOption}
      >
        <option value="" disabled defaultValue>
          Select a quiz
        </option>
        {categories.map((category) => (
          <option key={category} value={category} className="text-violet-300">
            {category}
          </option>
        ))}
      </select>
    </div>
  )
}

export default SelectForm
