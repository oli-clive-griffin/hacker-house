import { useContext } from "react"
import { UserContext } from "../App"
import apiClient from "./client"

export type SignUpDTO = {
  email: string
  password: string
  firstName: string
}

export const Signup = async (signUpDTO: SignUpDTO) => {
  const res = await apiClient.post('/signup', signUpDTO)
  localStorage.setItem('token', res.data.token)
  return
}

export type LogInDTO = {
  email: string
  password: string
}

export type LogInResponseDTO = {
  email: string
  firstName: string
  lastName: string
  token: string
}

export const Login = async (logInDTO: LogInDTO): Promise<LogInResponseDTO> => {
  const { data: user } = await apiClient.post<LogInResponseDTO>('/login', logInDTO)
  localStorage.setItem('token', user.token)

  const {setUser } = useContext(UserContext)
  setUser(user)
  return user
}

// const GITHUB_APP = {
//     clientId: "4a5bf2f05b27f9cca504",
//     loginUrl: "https://github.com/login/oauth/authorize",
//     redirectUri: "http://localhost:3000/github/callback",
// }

// const GITHUB_LOGIN = `${GITHUB_APP.loginUrl}?client_id=${GITHUB_APP.clientId}&redirect_uri=${encodeURIComponent(GITHUB_APP.redirectUri)}&scope=repo`;
