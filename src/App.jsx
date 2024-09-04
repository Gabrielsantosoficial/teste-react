import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'


function BotaoPersonalizado() {
  return <button>Entre para Comunidade</button>;
}


function App() {

  return (
    <div>
      <h1>Minha Aplicação</h1>
      <BotaoPersonalizado />
    </div>
  )
}



export default App
