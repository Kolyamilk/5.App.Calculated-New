import { useState } from 'react'
import './App.css'
import Button from './Button'


export default function App() {
  const [screen, setScreen] = useState([])
  const [mas, setMas] = useState([])




  // const buttons = ['AC', '+/-', '%', '/', 'x', '-', '+', '=', 1, 1, 2, 3, 2, 2, 2, 3, 2, 8, 6]



  //Функция узнать на что мы нажали
  // function handleClick(type) {

  //   setScreen(mas)

  //   if (type === 'AC') {
  //     clearDisplay()
  //   }

  // }
  //функция добавляет нажатую кнопку в массив
  function addNewNumber() {
  }
  //функция добавление текста на дисплей
  function addNumDisplay() {
  }

  //Проверка на ширину цифр на дисплее
  function checkNumLengthDisplay() {
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
  checkNumLengthDisplay()
  // ДОДЕЛАТЬ Функция очищает дисплей
  function clearDisplay() {
    setScreen(null)
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

              <Button></Button>

            </div>s
          </div>
        </div>
      </main>


    </>
  )
}


