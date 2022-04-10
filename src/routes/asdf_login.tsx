import { useEffect, useState } from 'react'
import { useSearchParams } from 'react-router-dom'
import axios from 'axios'

export default function Login() {
  const [searchParams, setSearchParams] = useSearchParams()
  const code = searchParams.get('code')
  if (!code) throw new Error('no github code')

  const [githubAccessToken, setGithubAccessToken] = useState<string>()
  const [error, setError] = useState()
  const [repos, setRepos] = useState<{}>()

  // TODO: add `state` to auth request

  useEffect(() => {
    const loadData = async () => {
      const accessToken = (await axios.get(`http://localhost:5000/auth/github?code=${code}`)).data.access_token
      setGithubAccessToken(accessToken)

      const { data } = await axios.get(`https://api.github.com/user/repos`, {
        headers: { Authorization: `Bearer ${accessToken}` },
        method: "GET"
      })

      console.log(data)
    }

    loadData().then(_ => console.log('success')).catch(e => setError(e))
  }, [])

  return (
    <div>Logging you in</div>
  )
}
