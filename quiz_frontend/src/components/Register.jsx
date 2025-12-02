const Register = ({handleRegistration}) => {
  return (
    <div>
      <div className='border text-white border-b-purple-900 rounded-md p-8 shadow-lg backdrop-filter backdrop-blur-sm bg-opacity-30 relative'>
        <h1 className='text-xl  font-bold text-center mb-6'>Registration Form</h1>
        <form action=''>
          <div className='relative my-4'>
            <input type='email' className='block w-1/1 pt-1.5 text-m bg-transparent border-0 border-b-2 border-gray-400 appearance-none dark:focus:border-violet-600 focus:outline-none peer'/>
           <label htmlFor='' className='absolute left-0 text-sm duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-violet-700 peer-focus:dark:text-violet-300 peer-placeholder-shown:-translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6' placeholder=''>Your email
            </label>
          </div>
          <div className='relative my-4'>
            <input type='password' className='block w-1/1 pt-1.5 text-m bg-transparent border-0 border-b-2 border-gray-400 appearance-none dark:focus:border-violet-600 focus:outline-none peer'/>
            <label htmlFor='' className='absolute left-0 text-sm duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-violet-700 peer-focus:dark:text-violet-300 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6' placeholder=''>Your password</label>
          </div>
          <div className='relative my-4'>
            <input type='password' className='block w-1/1 pt-1.5 text-m bg-transparent border-0 border-b-2 border-gray-400 appearance-none dark:focus:border-violet-600 focus:outline-none peer'/>
            <label htmlFor='' className='absolute left-0 text-sm duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-violet-700 peer-focus:dark:text-violet-300 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6' placeholder=''>Confirm password</label>
          </div>
          <button type='submit' className='w-full mb-4 text-[18px] mt-6 rounded-full font-bold bg-white text-amber-500 hover:bg-amber-400 hover:text-white py-2 transition-colors duration-300'>Register</button>
          <div className='text-xs'>
            <span >Already have an Account?
              <a onClick={handleRegistration}  className='ml-4 font-bold text-violet-500 hover:text-amber-500'>Login</a>
            </span>
          </div>
          </form>
      </div>
    </div>
  )
}

export default Register