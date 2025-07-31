import { useState } from 'react'
import './App.css'

function App() {
  const [counter, setCounter] = useState(0)

  const addValue = () => {
    setCounter(counter + 10)
  }

  const removeValue = () => {
    counter !== 0 && setCounter(counter - 10)
  }

  return (
    <>
      <h1>React Counter App with themaestrocode "{counter}"</h1>
      <h2>Counter value : {counter}</h2>
      <button onClick={addValue}>Add value</button>{" "}
      <button onClick={removeValue}>Remove value</button>
      <p>value : {counter}</p>
    </>
  )
}

export default App
