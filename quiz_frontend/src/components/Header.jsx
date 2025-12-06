const Header = ({ name, setUser, clearFields }) => {
  const handleLogOut = () => {
    clearFields()
    setUser(false)
    window.localStorage.clear()
  }

  return (
    <header
      className="
        w-full 
        fixed top-0 left-0 
        z-50
        bg-black/40 backdrop-blur-md
        flex justify-between items-center
        px-4 sm:px-10 md:px-14 lg:px-24 xl:px-24
        py-3
        shadow-[0_0_20px_rgba(255,255,255,0.2)]
      "
    >
      <h2 className="text-white text-xl drop-shadow-md">
        Hello, <span className="font-bold">{name}</span>!
      </h2>

      <button
        className="
          px-4 py-2 rounded-md
          bg-linear-to-r from-pink-500 to-violet-700
          text-white font-semibold
          shadow-[0_0_10px_rgba(255,0,255,0.6)]
          hover:scale-105 transition-all
        "
        onClick={handleLogOut}
      >
        Logout
      </button>
    </header>
  )
}

export default Header
