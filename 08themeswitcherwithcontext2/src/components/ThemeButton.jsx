import React from 'react'
import useTheme from '../context/theme';

function ThemeButton() {

  const { themeMode, lightTheme, darkTheme } = useTheme();

  const toggleTheme = () => {
    if (themeMode === "light") darkTheme()
    else lightTheme()
  }

  return (
    <div>
      <button
      className='bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-700 transition duration-300'
      onClick={toggleTheme}
      >
        Toggle Theme
      </button>
    </div>
  )
}

export default ThemeButton