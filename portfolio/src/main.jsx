import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.scss'
import '../src/utils/sass/reset.scss'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
