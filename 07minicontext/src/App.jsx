import { useState } from 'react'
import './App.css'
import Login from './components/Login'
import Profile from './components/Profile'
import UserContextProvider from './context/UserContextProvider'

function App() {
  
  return (
    <UserContextProvider>
      <h1>React for Context API</h1>
      <p>Please login to continue.</p>
      <Login />
      <Profile />
    </UserContextProvider>
  )
}

export default App
