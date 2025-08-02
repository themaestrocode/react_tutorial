import { useState } from 'react'
import InputBox from './components/InputBox'
import './App.css'

function App() {
  // className='bg-gray-800 text-white'
  return (
    <div className='w-full h-screen flex flex-wrap justify-center items-center bg-cover bg-no-repeat'
    style={{backgroundImage: `url(https://images.pexels.com/photos/4497591/pexels-photo-4497591.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2)`}}
    >
      <InputBox label="from" amount="10" />
      <InputBox label="To" />
    </div>
  )
}

export default App
