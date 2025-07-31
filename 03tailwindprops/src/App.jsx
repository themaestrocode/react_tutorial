import { useState } from 'react'
import './App.css'
import Card from './components/Card'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1 className='text-3xl text-white bg-green-700 p-4 rounded-t-md'>Vite with Tailwind CSS</h1>
      <Card name = "Victor Soderu" post = "Software Developer" country = "Nigeria" />
      <Card name = "Fola Akintola" post = "Frontend Developer" country = "USA"/>
      <Card name = "Faith Ogunode"/>
    </>
  )
}

export default App
