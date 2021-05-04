import React, {useState} from 'react'

const App = () =>{
  var Mensaje = ["","Te", "Amo", "Cada", "dia","mas.", "😘", "Tu", "eres", "mi", "motivo", "a", "seguir", "❤"];
  const [counter, setCounter, regresar] = useState(0)

  const increaseByOne = () => {
    setCounter(counter + 1);
  }
  
  const setToZero = () => {
    setCounter(0);
  }

  return (
    <div>
      <div>{counter}</div>
      <div>{Mensaje[counter]}</div>
      <button onClick={increaseByOne}>
        Siguiente
      </button>
      <button onClick={setToZero}> 
        Empezar
      </button>
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
