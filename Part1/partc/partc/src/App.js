import React, {useState} from 'react'


//Primera parte de la subsección del tema

const Hello = ({ name, age }) => {
// no funcionó const date para obtener la fecha y la hora deseada
// proxima vez investigar mas de esto .
//   const Date = () => new Date() 

const bornYear = () => new Date().getFullYear() -age


  return (
    <div>
      <p>Hello {name}, you are {age} years old</p>
      <p>so you were probably born in {bornYear()} </p>
      {/* <p>Fecha: {Date}</p>
      <p>Hello {name}, espero que tengas un excelente dia!.</p>
      <p>Te amo, eres el amor de mi vida.</p>
      <p>Sólo quería que lo supieras de una manera diferente.</p>
      <p>😘</p> */}
    </div>
  )
}

const App = () => {
  const name = 'Gerardo'
  const age = 38

  return (
    <div>
      <h1>Saludos</h1>
      <Hello name="Maya" age={26+10}/>
      <Hello name="Leslie" age={37}/>
      <Hello name="Gerardo" age={age}/>
    </div>
  )
}

export default App;
