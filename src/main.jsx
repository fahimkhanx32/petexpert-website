import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { ThemeProvider } from './components/ThemeChanger/Theme.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* ThemeProvider remembers light/dark for the whole app */}
    <ThemeProvider>
      <App />
    </ThemeProvider>
  </StrictMode>,
)
