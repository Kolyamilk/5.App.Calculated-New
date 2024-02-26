import { Children, useState } from 'react'
import './App.css'
import Button from './Button'


export default function App() {
  const [screen, setScreen] = useState([])
  const [mas, setMas] = useState([])


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
  function startOperations(firstNum, operand, secondNum) {
    let firstNumber = Number(firstNum)
    let secondNumber = Number(secondNum)
    const operation = operand
    setScreen(screen + operation)
    // console.log(firstNumber, operation, secondNumber);
    if (operation === 'AC') {
      clearDisplay()
    } if (operation === '+') {
      console.log('Первое число: ' + firstNumber);
      console.log('Первое число: ' + secondNumber);
    }
  }

  //функция добавляет нажатую кнопку в массив
  function addNewNumber() {
  }
  //функция добавление текста на дисплей
  function addNumDisplay(type) {
    console.log(type);
    setScreen(screen + type)
  }

  let randomID = Math.floor(Math.random() * 2000)
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
                return <Button key={index.id} onClick={() => startOperations(screen, index.name, index.name)}>{index.name}</Button >
              })]}
            </div>
          </div>
        </div>
      </main >s
    </>
  )
}


