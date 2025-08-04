import React, {useState, useEffect} from 'react'
import './App.css'
import Card from './components/Card'
import ThemeButton from './components/ThemeButton'
import { ThemeProvider } from './context/theme'

function App() {

  const [themeMode, setThemeMode] = useState("light");
  
  const darkTheme = () => {
    setThemeMode("dark");
  }

  const lightTheme = () => {
    setThemeMode("light");
  }

  useEffect(() => {
    document.querySelector('html').classList.remove("dark", "light");
    document.querySelector('html').classList.add(themeMode);
  }, [themeMode]);
  
  return (
    <ThemeProvider value= {{themeMode, lightTheme, darkTheme}}>
      <div className='bg-gray-100 min-h-screen flex flex-col items-center justify-center'>
        <ThemeButton />
        <Card />
      </div>
    </ThemeProvider>
  )
}

export default App
