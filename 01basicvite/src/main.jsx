import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import Stanley from './Stanley.jsx'

createRoot(document.getElementById('root')).render(
  <>
    <App />
    <Stanley />
  </>
)
