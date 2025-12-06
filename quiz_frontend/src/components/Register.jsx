import {useState,useEffect} from 'react'
import Wrapper from './Wrapper'
import userService from '../services/users'



const Register = ({ toggleForms}) => {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [matchPassword, setMatchPassword] = useState('')
  const [validMatch, setValidMatch] = useState(false)

  useEffect(() => {
    const match = password === matchPassword
    setValidMatch(match)
  }, [password, matchPassword])

  const handleSubmit = async (e) => {
    e.preventDefault()
    console.log(name, email, password)
    try {
      await userService.register({ name, email, password })
      toggleForms()
    } catch (err) {
      console.log('ERROR---->', err)
    }
  }

  return (
    <Wrapper>
      <h1 className="text-xl  font-bold text-center mb-6">Registration Form</h1>
      <form action="" onSubmit={handleSubmit}>
        <div className="relative my-4">
          <input
            id="name"
            type="text"
            value={name}
            onChange={(e) => {
              setName(e.target.value)
            }}
            autoComplete="off"
            required
            className="block w-full pt-1.5 text-m bg-transparent border-0 border-b-2 
            border-gray-400 appearance-none dark:focus:border-violet-600 focus:outline-none peer"
          />
          <label
            htmlFor="name"
            className="absolute left-0 text-sm duration-300 transform -translate-y-6 
            scale-75 top-3 -z-10 origin-left peer-focus:left-0 peer-focus:text-violet-700
             peer-focus:dark:text-violet-300 peer-placeholder-shown:translate-y-0
             peer-focus:scale-75 peer-focus:-translate-y-6"
          >
            Your name
          </label>
        </div>
        <div className="relative my-4">
          <input
            id="email"
            type="email"
            autoComplete="off"
            value={email}
            onChange={(e) => {
              setEmail(e.target.value)
            }}
            required
            className="block w-full pt-1.5 text-m border-0 border-b-2 
            border-gray-400 appearance-none dark:focus:border-violet-600 focus:outline-none peer bg-transparent"
          />
          <label
            htmlFor="email"
            className="absolute left-0 text-sm duration-300 transform -translate-y-6 
            scale-75 top-3 -z-10 origin-left peer-focus:left-0 peer-focus:text-violet-700 
            peer-focus:dark:text-violet-300 peer-placeholder-shown:translate-y-0 
            peer-focus:scale-75 peer-focus:-translate-y-6"
          >
            Your email
          </label>
        </div>
        <div className="relative my-4">
          <input
            id="password"
            type="password"
            value={password}
            onChange={(e) => {
              setPassword(e.target.value)
            }}
            autoComplete="off"
            required
            className="block w-full pt-1.5 text-m bg-transparent border-0 border-b-2 
            border-gray-400 appearance-none dark:focus:border-violet-600 focus:outline-none peer"
          />
          <label
            htmlFor="password"
            className="absolute left-0 text-sm duration-300 transform -translate-y-6 
            scale-75 top-3 -z-10 origin-left peer-focus:left-0 peer-focus:text-violet-700 
            peer-focus:dark:text-violet-300 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
          >
            Your password
          </label>
        </div>
        <div className="relative my-4">
          <input
            id="matchPassword"
            type="password"
            value={matchPassword}
            onChange={(e) => {
              setMatchPassword(e.target.value)
            }}
            required
            className="block w-full pt-1.5 text-m bg-transparent border-0 border-b-2 
            border-gray-400 appearance-none dark:focus:border-violet-600 focus:outline-none peer"
          />
          <label
            htmlFor="matchPassword"
            className="absolute left-0 text-sm duration-300 transform -translate-y-6 
            scale-75 top-3 -z-10 origin-left peer-focus:left-0 peer-focus:text-violet-700 
            peer-focus:dark:text-violet-300 peer-placeholder-shown:translate-y-0 
            peer-focus:scale-75 peer-focus:-translate-y-6"
          >
            Confirm password
          </label>
          <p className={!validMatch && matchPassword ? 'block' : 'hidden'}>
            Must match the password
          </p>
        </div>
        <button
          type="submit"
          disabled={!name || !email || !password || !validMatch}
          className="w-full mb-4 text-[18px] mt-6 rounded-full font-bold bg-white text-amber-500 
          hover:bg-amber-400 hover:text-white py-2
           disabled:bg-indigo-950 disabled:opacity-50  disabled:text-gray-100 transition-colors duration-300"
        >
          Register
        </button>
        <div className="text-xs">
          <span>
            Already have an Account?
            <button
              type="button"
              className="ml-4 font-bold text-violet-500 hover:text-amber-500"
              onClick={toggleForms}
            >
              Login
            </button>
          </span>
        </div>
      </form>
    </Wrapper>
  )
}

export default Register
