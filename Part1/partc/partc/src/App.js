import React, { useState } from 'react'

const App = () => {
  const [counter, setCounter] = useState(0)


  console.log("Before running setTimeout")
  console.log({ counter })
  console.log({ setCounter })

  setTimeout(
    () => setCounter(counter + 1),
    1000
  )

  console.log("After running setTimeout")
  console.log({ counter })
  console.log({ setCounter })
  return (
    <div>{counter}</div>
  )
}

export default App