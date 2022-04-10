import { FC, useContext } from 'react'
import { UserContext } from '../App'

const Header: FC = () => {

  const { user } = useContext(UserContext)

  return (
    <div className='border-slate-800 shadow-md relative z-10 flex flex-row h-16  items-center justify-between px-24'>
      <div className="h-full flex py-1 items-center">
        <a href='/' className='text-xl font-bold text-slate-800'>HackerHouse</a>
      </div>
      <div className='flex flex-row'>
        <a href="/projects" className='font-semibold hover:underline underline-offset-2 ml-10'>
          Projects
        </a>
        {!user && (
          <a href="/login" className='font-semibold hover:underline underline-offset-2 ml-10'>
            Log in
          </a>
        )}
      </div>
    </div>
  )
}

export default Header
