import { FC, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Login } from '../service/auth-service'

const SignUpPage: FC = () => {
  const navigate = useNavigate()

  const [email, setEmail] = useState<string>('')
  const [password, setPassword] = useState<string>('')
  const [error, setError] = useState<string>()

  const handlePressLogin = async () => {
    try {
      await Login({ email, password })
      navigate('/')
    } catch(e) {
      setError(JSON.stringify(e))
    }
  }

  const handlePressSignup = () => navigate('/signup')

  return (
    <div className='h-screen grid place-items-center'>
      <div className="bg-white shadow-md rounded p-8 w-80">

        <p className="text-gray-700 text-sm font-bold mb-2" >
          Email
        </p>
        <input
          onChange={e => setEmail(e.target.value)}
          className="bg-gray-100 appearance-none rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" type="text" placeholder="Email"
        />

        <div className='h-6'/>

        <p className="text-gray-700 text-sm font-bold mb-2">
          Password
        </p>
        <input
          className={`${error && 'border-slate-800'} bg-gray-100 rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline appearance-none `}
          type="password"
          placeholder="******************"
          onChange={e => setPassword(e.target.value)}
        />
        {error && <p className="text-red-500 text-xs italic">{error}</p>}

        <div className='h-6'/>

        <div className="flex flex-col items-center">
          <button
            className="w-full border-2 border-slate-800 text-slate-800 hover:bg-slate-800  hover:text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            type="button"
            onClick={handlePressLogin}
          >
            Sign In
          </button>
          <div className='h-2'/>
          <p className="font-semibold text-sm text-slate-800">
            Forgot Password?
          </p>
        </div>

        <div className='h-6'/>

        <button
          className="w-full font-semibold text-slate-800 py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          type="button"
          onClick={handlePressSignup}
        >
          Sign up
        </button>

      </div>
    </div>
  )
}

export default SignUpPage
