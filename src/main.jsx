import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { CallBackComponent } from './components/CallBackComponent.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <CallBackComponent/>
  </StrictMode>,
)
