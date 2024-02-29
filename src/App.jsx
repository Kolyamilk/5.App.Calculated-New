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
    }
    if (operand === '=') {
      let sum = eval(screen)
      console.log(sum.type);
      setScreen(sum);
    }
    if (operand === 'CE' && !undefined) {
      return setScreen(screen.substring(0, screen.length - 1))//error
    }
  }
  //функция добавление текста на дисплей
  function addNumDisplay(type) {
    let activeOperand = type == '*' || type == '=' || type == '+' || type == '/' || type == 'AC' || type == 'CE' || type == '-'
    if (activeOperand) {
      return startOperations(type)

    }

    setScreen(screen + type)
   if (screen=='*'){
    console.log('*');
   }


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
              <div className="btnOperation">
                {[storeButtons.numbers.map(index => {
                  return <Button key={index.name} onClick={() => addNumDisplay(index.name)}>{index.name}</Button >
                })]}
              </div>
            </div>
          </div>
        </div>
      </main >s
    </>
  )
}


