import React, { FC } from 'react'

const BUTTONS = [
  {label: 'projects', href: '/projects'}
]

const Layout: FC = ({ children }) => {

  return (
    <div>
      <div className='relative z-50 flex flex-row h-16 shadow-md shadow-gray-200 items-center justify-between px-24'>
        <div className="bg-yellow-300 py-1 px-2 outline outline-2 outline-slate-700 rounded-sm">
          <p className='text-xl font-bold text-slate-800'>HackerHouse</p>
        </div>
        <div>
          {BUTTONS.map(({ label, href }) => (
            <a className='font-semibold hover:underline underline-offset-2' href={href}>
              {label}
            </a>
          ))}
        </div>
      </div>
      {children}
    </div>
  )
}

export default Layout
