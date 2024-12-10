import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './components/App'
import './assets/Styles/styles.css'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
