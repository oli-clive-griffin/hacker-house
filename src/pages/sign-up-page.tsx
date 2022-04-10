import { FC, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Signup } from '../service/auth-service'

const SignUpPage: FC = () => {
  const navigatate = useNavigate()

  const [email, setEmail] = useState<string>('')
  const [firstName, setFirstName] = useState<string>('')
  const [password, setPassword] = useState<string>('')
  const [error, setError] = useState<string>()

  const handlePressSignup = async () => {
    try {
      await Signup({ email, password, firstName })
      navigatate('/')
    } catch(e) {
      setError(JSON.stringify(e))
    }
  }

  return (
    <div className='h-screen grid place-items-center'>
      <div className="bg-white shadow-md rounded p-8 w-80">

        <p className="text-gray-700 text-sm font-bold mb-2" >
          First name
        </p>
        <input
          onChange={e => setFirstName(e.target.value)}
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" type="text" placeholder="First name"
        />

        <div className='h-6'/>

        <p className="text-gray-700 text-sm font-bold mb-2" >
          Email
        </p>
        <input
          onChange={e => setEmail(e.target.value)}
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" type="text" placeholder="Email"
        />

        <div className='h-6'/>

        <p className="text-gray-700 text-sm font-bold mb-2">
          Password
        </p>
        <input
          className="shadow appearance-none border border-red-500 rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
          type="password"
          placeholder="******************"
          onChange={e => setPassword(e.target.value)}
        />
        {error && <p className="text-red-500 text-xs italic">{error}</p>}

        <div className='h-6'/>

        <div className="flex items-center justify-between">
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            type="button"
            onClick={handlePressSignup}
          >
            Sign In
          </button>
          <a className="align-baseline font-bold text-sm text-blue-500 hover:text-blue-800" href="/">
            Forgot Password?
          </a>
        </div>

      </div>
    </div>
  )
}

export default SignUpPage
