import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import ColorChange from './Color'


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ColorChange/>
  </StrictMode>,
)
