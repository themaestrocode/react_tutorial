import React, {useState, useContext} from 'react'
import UserContext from '../context/UserContext'

function Login() {

  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')

  const {setUser} = useContext(UserContext)

  const handleLogin = (e) => {
    e.preventDefault()
    setUser({username, password})
    alert(`Welcome ${username}!`)
    setUsername('')
    setPassword('')
    e.target.reset()
  }

  return (
    <div>
      <h2>Login</h2>
      <input 
      type="text"
      onChange={(e) => setUsername(e.target.value)}
      value={username}
      placeholder='username' />
      {" "}
      <input 
      type="password"
      value={password}
      onChange={(e) => setPassword(e.target.value)}
      placeholder='password' />
      <button 
      onClick={handleLogin}>Submit</button>
    </div>
  )
}

export default Login