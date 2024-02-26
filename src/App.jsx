import { Children, useState } from 'react'
import './App.css'
import Button from './Button'


export default function App() {
  const [screen, setScreen] = useState([])
  const [first, setFirst] = useState([])
  const [second, setSecond] = useState([])

  let operation

  function result(fisrt, second) {
    if (operation = '+') {
      console.log(fisrt);
      setScreen('')
      
    }
  }
  const buttons = {
    numbers: [
      {
        id: 1,
        name: 1
      },
      {
        id: 2,
        name: 2
      }
    ],
    operations: [
      {
        id: '+',
        name: '+'
      },
      {
        id: '=',
        name: '='
      },
      {
        id: 'AC',
        name: 'AC'
      },

    ]
  }
  //Функция операции
  function startOperations(firstNum, operand) {
    const firstNumber = Number(firstNum)
    operation = operand
    setScreen(screen + operation)
    // console.log(firstNumber, operation, secondNumber);
    if (operation === 'AC') {
      clearDisplay()
    } if (operation) {
      result(firstNumber)

    }
    if (operation === '=') {
      console.log(firstNumber + 1);
    }
  }
  //функция добавление текста на дисплей
  function addNumDisplay(type) {
    console.log('Первое число ' + first.join(''))
    first.push(type)
    setScreen(screen + type)
  }
  //Проверка на ширину цифр на дисплее
  function checkNumLengthDisplay() {
    if (screen.length >= 20) {
      setScreen('Большая сумма  ')
    }
  }
  checkNumLengthDisplay()
  // ДОДЕЛАТЬ Функция очищает дисплейs
  function clearDisplay() {
    setScreen('')
    setFirst([])
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
              {[buttons.numbers.map(index => {
                return <Button key={index.id} onClick={() => addNumDisplay(index.name)}>
                  {index.name}
                </Button >
              })]}
              {[buttons.operations.map(index => {
                return <Button key={index.id} onClick={() => startOperations(screen, index.name)}>{index.name}</Button >
              })]}
            </div>
          </div>
        </div>
      </main >s
    </>
  )
}


