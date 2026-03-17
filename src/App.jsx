import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <section className='header'>
        <h1>Hello world</h1>
      </section>
    </>
  )
}

export default App
