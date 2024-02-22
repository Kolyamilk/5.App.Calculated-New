import { Children, useState } from 'react'
import './App.css'
import Button from './Button'


export default function App() {
  const [screen, setScreen] = useState([])
  const [mas, setMas] = useState([])




  // const buttons = ['AC', '+/-', '%', '/', 'x', '-', '+', '=', 1, 1, 2, 3, 2, 2, 2, 3, 2, 8, 6]

  //функция добавляет нажатую кнопку в массив
  function addNewNumber() {
  }
  //функция добавление текста на дисплей
  function addNumDisplay(type) {
    setScreen(screen + type)
    if (type === 'AC') {
      clearDisplay()
    }
  }


  //Проверка на ширину цифр на дисплее
  function checkNumLengthDisplay() {
    if (screen.length >= 16) {
      setScreen('Большая сумма  ')
    }

  }
  checkNumLengthDisplay()
  // ДОДЕЛАТЬ Функция очищает дисплей
  function clearDisplay() {
    setScreen('')
  }
  return (
    <>
      <main>
        <div className="containerPhone">
          <div className="content">
            <div className="content-screen">
              {/* <span>{newArr.join('')}</span> */}
              <span>{screen}</span>
            </div>
            <div className="content-buttons">
              <Button onClick={() => addNumDisplay('AC')}>AC</Button>
              <Button onClick={() => addNumDisplay('+/-')}>+/-</Button>
              <Button onClick={() => addNumDisplay('%')}>%</Button>
              <Button onClick={() => addNumDisplay('/')}>/</Button>
              <Button onClick={() => addNumDisplay(7)}>7</Button>
              <Button onClick={() => addNumDisplay(8)}>8</Button>
              <Button onClick={() => addNumDisplay(9)}>9</Button>
              <Button onClick={() => addNumDisplay('x')}>x</Button>
              <Button onClick={() => addNumDisplay(4)}>4</Button>
              <Button onClick={() => addNumDisplay(5)}>5</Button>
              <Button onClick={() => addNumDisplay(6)}>6</Button>
              <Button onClick={() => addNumDisplay('-')}>-</Button>
              <Button onClick={() => addNumDisplay(1)}>1</Button>
              <Button onClick={() => addNumDisplay(2)}>2</Button>
              <Button onClick={() => addNumDisplay(3)}>3</Button>
              <Button onClick={() => addNumDisplay('+')}>+</Button>
              <Button onClick={() => addNumDisplay(0)}>0</Button>
              <Button onClick={() => addNumDisplay('.')}>.</Button>
              <Button onClick={() => addNumDisplay('=')}>=</Button>

            </div>s
          </div>
        </div>
      </main>


    </>
  )
}


