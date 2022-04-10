import React, { createContext, useState } from 'react'
import { QueryClient, QueryClientProvider } from 'react-query';
import { ReactQueryDevtools } from 'react-query/devtools'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import HomePage from './pages/home-page';
import LoginPage from './pages/login-page';
import ProjectsPage from './pages/projects-page';
import SignUpPage from './pages/sign-up-page';

export type User = {
  email: string
  firstName: string
  lastName: string
}

export type UserContextType = {
  user?: User
  setUser: (user: User) => void
}

export const UserContext = createContext<UserContextType>(null!)

export default function App() {

  const [user, setUser] = useState<User>()

  const queryClient = new QueryClient()

  return (
    <UserContext.Provider value={{ user, setUser }}>
      <QueryClientProvider client={queryClient}>
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/signup" element={<SignUpPage />} />
              <Route path="/login" element={<LoginPage />} />
              <Route path="/projects" element={<ProjectsPage />} />
              <Route path="github/callback" element={<LoginPage />} />
            </Routes>
          </BrowserRouter>
        <ReactQueryDevtools initialIsOpen={false} />
      </QueryClientProvider>
    </UserContext.Provider>
  )
}
