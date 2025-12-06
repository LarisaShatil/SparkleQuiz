import { useState } from 'react'
import Wrapper from './Wrapper'
import loginService from '../services/login'
import quizService from '../services/quizzes'

const Login = ({ setUser, toggleForms }) => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const handleSubmit = async (e) => {
    e.preventDefault()
    try {
      const user = await loginService.login({ email, password })
      window.localStorage.setItem('loggedUser', JSON.stringify(user))
      quizService.setToken(user.token)
      setUser(user)
      setEmail('')
      setPassword('')
    } catch (e) {
      console.log(e)
    }
  }

  return (
    <Wrapper>
      <h1 className="text-xl  font-bold text-center mb-6">Login</h1>
      <form action="" onSubmit={handleSubmit}>
        <div className="relative my-4">
          <input
            id="email"
            type="email"
            autoComplete="off"
            value={email}
            onChange={(e) => {
              setEmail(e.target.value)
            }}
            className="block w-full pt-1.5 py-2.3 px-0 text-m bg-transparent border-0 border-b-2 
            border-gray-400 appearance-none dark:focus:border-violet-600 focus:outline-none peer"
          />
          <label
            htmlFor="email"
            className="absolute left-0 text-m duration-300 transform -translate-y-6 scale-75 
            top-3 -z-10 origin-left peer-focus:left-0 peer-focus:text-violet-700 peer-focus:dark:text-violet-300 
            peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6 "
          >
            Your email
          </label>
        </div>
        <div className="relative my-4">
          <input
            id="password"
            type="password"
            autoComplete="off"
            value={password}
            onChange={(e) => {
              setPassword(e.target.value)
            }}
            required
            className="block w-full pt-1.5 text-m bg-transparent border-0 border-b-2 border-gray-400 
            appearance-none dark:focus:border-violet-600 focus:outline-none peer"
          />
          <label
            htmlFor="password"
            className="absolute left-0 text-sm duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-left 
            peer-focus:left-0 peer-focus:text-violet-700 peer-focus:dark:text-violet-300 
            peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
          >
            Your password
          </label>
        </div>
        <div className="flex justify-between items-center">
          <div className="flex gap-2 items-center text-xs">
            <input
              type="checkbox"
              required
              name="remember me"
              id="remember me"
              className="accent-amber-500 w-4 h-4"
            />
            <label htmlFor="remember me">Remember me</label>
          </div>
          <span className="text-xs text-violet-500">Forgot Password?</span>
        </div>
        <button
          type="submit"
          className="w-full ml-auto mr-auto mb-4 text-[18px] mt-6 rounded-full font-bold bg-white text-amber-500 hover:bg-amber-400 hover:text-white py-2 transition-colors duration-300"
        >
          Login
        </button>
        <div className="text-xs">
          <span>
            New here?
            <button
              type="button"
              onClick={toggleForms}
              className="ml-4 font-bold text-violet-500 hover:text-amber-500"
            >
              Create an account
            </button>
          </span>
        </div>
      </form>
    </Wrapper>
  )
}

export default Login
