import React, { useState } from 'react'

const Button = ({ handleClick, text }) => (
  <button onClick={handleClick}>
    {text}
  </button>
)

const Display = ({ text }) => <div>{text}</div>

const App = () => {
  var Mensaje = ["", "Te", "Amo", "Cada", "dia", "mas.", "😘", "Tu", "eres", "mi", "motivo", "a", "seguir", "❤"];
  const [counter, setCounter, regresar] = useState(0)

  const increaseByOne = () => {
    setCounter(counter + 1);
  }

  const setToZero = () => {
    setCounter(0);
  }
  const decreaseByOne = () => {
    setCounter(counter - 1);
  }

  return (
    <div>
      <Display text={counter} />
      <Display text={Mensaje[counter]} />
      <Button handleClick={decreaseByOne}
        text='Regresar'
      />
      <Button handleClick={setToZero}
        text='Empezar'
      />
      <Button handleClick={increaseByOne}
        text='Siguiente'
      />

    </div>
  )

  // return(
  //   <div>
  //     <p>Cada segundo que pasa mi amor por tí va creciendo</p>
  //     <p>"      "❤❤"                "❤❤       </p>
  //     <p>     ❤     ❤             ❤     ❤       </p>
  //     <p>   ❤         ❤          ❤        ❤       </p>
  //     <p>   ❤            ❤     ❤          ❤       </p>
  //     <p>    ❤              ❤            ❤       </p>
  //     <p>      ❤                        ❤       </p>
  //     <p>        ❤                    ❤       </p>
  //     <p>           ❤               ❤       </p>
  //     <p>              ❤         ❤       </p>
  //     <p>                ❤    ❤       </p>
  //     <p>                   ❤</p>
  //     <p>👇</p>
  //     {counter}
  //     </div>
  // )
}


export default App
