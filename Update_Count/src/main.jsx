import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Update_Count from './Count.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Update_Count />
  </StrictMode>,
)
