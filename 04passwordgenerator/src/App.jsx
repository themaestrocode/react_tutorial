import { useState, useCallback, useEffect, useRef } from 'react'
import './App.css'

function App() {
  const [length, setLength] = useState(8)
  const [numAllowed, setNumAllowed] = useState(false)
  const [charAllowed, setCharAllowed] = useState(false)
  const [password, setPassword] = useState("")

  const copyPasswordToClipboard = () => {
    window.navigator.clipboard.writeText(password)
    passwordRef.current?.select()
  }

  const passwordRef = useRef(null)

  const geneatePassword = useCallback(() => {
    let pass = ""
    let str = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ"

    if (numAllowed) str += "0123456789"
    if (charAllowed) str += "!@#$%^&*()_+=?><:;"

    for (let i = 1; i <= length; i++) {
      const charIndex = Math.floor(Math.random() * str.length + 1)
      pass += str.charAt(charIndex)
    }

    setPassword(pass)
  }, [length, numAllowed, charAllowed])

  useEffect(() => {
    geneatePassword()
  }, [length, numAllowed, charAllowed])

  return (
    <div className='w-full max-w-md mx-auto shadow-md rounded-lg px-4 py-3 my-8 bg-gray-800 text-orange-500'>
      <h1 className='text-white text-center my-3'>Password Generator</h1>
      <div className='flex shadow rounded-lg overflow-hidden mb-4'>
        <input
        type="text"
        value={password}
        className='ouline-none w-full py-1 px-3 bg-white'
        placeholder='Password'
        readOnly
        ref={passwordRef}
        />
        <button
        onClick={copyPasswordToClipboard}
        className='ouline-none bg-blue-700 text-white px-3 py-0.5 shrink-0'>copy</button>
      </div>
      <div className='flex text-sm gap-x-2'>
        <div className='flex items-center gap-x-1'>
          <input
          type="range"
          min={6} max={100}
          value={length} className='cursor-pointer'
          onChange={(e) => setLength(e.target.value)}
          name=''
          id='' 
          />
          <label htmlFor="length">Length: {length}</label>

          <input
          type="checkbox"
          defaultChecked={numAllowed} className='cursor-pointer'
          onChange={() => {
            setNumAllowed((prev) => !prev)
          }}
          name=''
          id='' 
          />
          <label htmlFor="numbers">Numbers</label>

          <input
          type="checkbox"
          defaultChecked={charAllowed} className='cursor-pointer'
          onChange={() => {
            setCharAllowed((prev) => !prev)
          }}
          name=''
          id='' 
          />
          <label htmlFor="charInput">Special Characters</label>
        </div>
      </div>
    </div>
  )
}

export default App
