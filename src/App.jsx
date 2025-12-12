import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1 style={{ fontSize: "32px" }}>Vite + React</h1>
    </>
  )
}

export function TicTacToe() {
  return <h1>Tic Tac Toe Game</h1>
}

export function Square() {
  return <button className="square">X</button>
}

export default App