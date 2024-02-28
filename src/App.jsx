import { Children, useState } from 'react'
import './App.css'
import Button from './Button'
import storeButtons from './storeButtons'

export default function App() {
  let [screen, setScreen] = useState([''])

  //Функция операции
  function startOperations(operand) {
    setScreen(screen + operand)
    if (operand === 'AC') {
      clearDisplay()
      console.log('AC');
    }
    if (operand === '=') {
      let sum = eval(screen)
      console.log(sum.type);
      setScreen(sum);
    }
    if (operand === 'CE' && !undefined) {
      console.log(screen.type);
      setScreen(screen.substring(0, screen.length - 1))
    }
  }
  //функция добавление текста на дисплей
  function addNumDisplay(type) {
    setScreen(screen + type)
  }

  //Проверка на ширину цифр на дисплее
  function checkNumLengthDisplay() {
    if (screen.length >= 20) {
      setScreen('Большая сумма  ')
    }
  }

  checkNumLengthDisplay()
  // Функция очищает дисплей
  function clearDisplay() {
    setScreen('')
  }
  return (
    <>
      <main>
        <div className="containerPhone">
          <div className="content">
            <div className="content-screen">
              <span>{screen}</span>
            </div>
            <div className="content-buttons">
              {[storeButtons.operations.map(index => {
                return <Button key={index.name} onClick={() => startOperations(index.name)}>{index.name}</Button >
              })]}
              {[storeButtons.numbers.map(index => {
                return <Button
                  key={index.name}
                  onClick={() => addNumDisplay(index.name)}
                  className='btnOrange'
                  >
                  {index.name}
                </Button >
              })]}
            </div>
          </div>
        </div>
      </main >s
    </>
  )
}


