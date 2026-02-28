import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Generate_Number from './Generate_fibonnaci.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Generate_Number />
  </StrictMode>,
)
