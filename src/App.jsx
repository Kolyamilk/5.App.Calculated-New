import { useState } from 'react'
import './App.css'


function App() {
  const [screen, setScreen] = useState('state')

  const newArr = []
  const mas = [1, 2, 3, 4, 5, 6, 7, 8, 9, 1, 2, 3]
  const buttons = ['AC', '+/-', '%', '/', 'x', '-', '+', '=', 1, 1, 2, 3, 2, 2, 2, 3, 2, 8, 6]


  function num() {
    mas.map((num) => {
      for (let i = 0; i < mas.length; i++) {
        if (i === 16) {
          num = 'Большое число'
          newArr.fill('')
        }
      }
      newArr.push(num)
    })
  }
  num()
  function clearScreen() {

  }
  return (
    <>
      <main>
        <div className="containerPhone">
          <div className="content">
            <div className="content-screen">
              <span>{newArr.join('')} {screen}</span>
            </div>
            <div className="content-buttons">
              <button onClick={clearScreen}>AC</button>
              <button>+/-</button>
              <button>%</button>
              <button>/</button>
              <button>5</button>
              <button>5</button>
              <button>5</button>
              <button>5</button>
              <button>5</button>
              <button>5</button>
              <button>5</button>
              <button>5</button>
              <button>5</button>
              <button>5</button>
              <button>5</button>
              <button>5</button>
            </div>
          </div>
        </div>
      </main>


    </>
  )
}

export default App
