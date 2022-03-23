import React, { FC } from 'react'
import { Link } from 'react-router-dom'

const GITHUB_APP = {
    clientId: "4a5bf2f05b27f9cca504",
    loginUrl: "https://github.com/login/oauth/authorize",
    redirectUri: "http://localhost:3000/github/callback"
}

const GITHUB_LOGIN = `${GITHUB_APP.loginUrl}?client_id=${GITHUB_APP.clientId}&redirect_uri=${encodeURIComponent(GITHUB_APP.redirectUri)}&scope=repo`;

const BUTTONS = [
  {label: 'projects', href: '/projects' },
  {label: 'Sign in with Github', href: GITHUB_LOGIN}
]

const Layout: FC = ({ children }) => {

  return (
    <div>
      <div className='border border-b-2 border-slate-800 relative z-50 flex flex-row h-16  items-center justify-between px-24'>
        <div className="h-full px-8 flex bg-purple-300 py-1 px-2 outline outline-2 outline-slate-700 items-center">
          <p className='text-xl font-bold text-slate-800'>HackerHouse</p>
        </div>
        <div className='flex flex-row'>
          {BUTTONS.map(({ label, href }) => (
            <a href={href} className='font-semibold hover:underline underline-offset-2'>
              {label}
            </a>
            // <a className='font-semibold hover:underline underline-offset-2' href={href}>
            //   {label}
            // </a>
          ))}
        </div>
      </div>
      {children}
    </div>
  )
}

export default Layout
