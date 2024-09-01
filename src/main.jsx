import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import TicTacToe from './components/ticTacToe/TicTacToe.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
    <TicTacToe/>
  </StrictMode>,
)
