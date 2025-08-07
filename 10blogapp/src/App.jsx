import React, {useState, useEffect} from 'react'
import './App.css'
import { Outlet } from 'react-router-dom'

function App() {

  
  return (
    <>
    <div>
      <main className='flex flex-col items-center py-10 min-h-screen bg-gray-100'>
        <Outlet />
      </main>
    </div>
    </>
  )
}

export default App
