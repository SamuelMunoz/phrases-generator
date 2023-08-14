import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [phrase, setPhrase] = useState('')

  const phrases = [
    'Las donitas del Costco son infinitamente mejores que las de Sams',
    'El único lunes que no es pesado es cuando ese lunes es quincena',
    'Las quesadillas sí llevan queso',
    'Mezclar cualquier bebida con hielo es malo para el hígado',
    'Un agujero negro es el segundo objeto más pesado del universo después del ego de un programador',
    'Los viernes nunca se deploya a producción, a menos que te guste la pizza',
    'Hay más memes de programación que habitantes en Tlaxcala',
    'ChatGPT empezó como Senior y ahorita es solo un becario que googlea mal'
  ];

  const getRandomSentence = () => {
    const index = Math.floor(Math.random() * (phrases.length - 1));
    setPhrase(phrases[index]);
  }

  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>{phrase}</h1>
      <div className="card">
        <button onClick={getRandomSentence}>
          Generar una verdad
        </button>
      </div>
    </>
  )
}

export default App
