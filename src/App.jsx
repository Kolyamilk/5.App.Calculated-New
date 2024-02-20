import { useState } from 'react'
import './App.css'
import Button from './Button'


function App() {
  const [screen, setScreen] = useState([])

  const newArr = [null, null, null, null, null, null, null, null, null, null]
  const mas = [1, 2, 3]

  const buttons = ['AC', '+/-', '%', '/', 'x', '-', '+', '=', 1, 1, 2, 3, 2, 2, 2, 3, 2, 8, 6]





  //Функция узнать на что мы нажали
  function handleClick(type) {
    setScreen(type)
    if(type==='AC'){
      clearDisplay()
    }
  }
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
              {/* <button onClick={clearDisplay} className='btnLightGrey'>AC</button>
              <button className='btnLightGrey' onClick={handleClick}>+/-</button>
              <button className='btnLightGrey'>%</button>
              <button className='btnOrange'>/</button>
              <button className='btnDarkGrey'>7</button>
              <button className='btnDarkGrey'>8</button>
              <button className='btnDarkGrey'>9</button>
              <button className='btnOrange'>x</button>
              <button className='btnDarkGrey'>4</button>
              <button className='btnDarkGrey'>5</button>s
              <button className='btnDarkGrey'>6</button>
              <button className='btnOrange'>-</button>
              <button className='btnDarkGrey'>1</button>
              <button className='btnDarkGrey'>2</button>
              <button className='btnDarkGrey'>3</button>
              <button className='btnOrange'>+</button>
              <button className='btn0 btnDarkGrey'>0</button>
              <button className='btnDarkGrey'>.</button>
              <button className='btnOrange'>=</button> */}
              <Button onClick={() => handleClick(1)}>1</Button>
              <Button onClick={() => handleClick(2)}>2</Button>
              <Button onClick={() => handleClick(3)}>3</Button>
              <Button onClick={() => handleClick(4)}>4</Button>
              <Button onClick={() => handleClick(5)}>5</Button>
              <Button onClick={() => handleClick(6)}>6</Button>
              <Button onClick={() => handleClick('AC')}>AC</Button>


            </div>
          </div>
        </div>
      </main>


    </>
  )
}

export default App
