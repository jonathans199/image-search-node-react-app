import React, { useState } from 'react'
import './App.css'

import Slider from './components/Slider'

function App() {
  const [data, setData] = useState([])
  const [text, setText] = useState(null)

  const handleSubmit = e => {
    e.preventDefault()
    fetch(`http://localhost:3001/api/${text}`)
      .then(res => res.json())
      .then(data => setData(data))
      .catch(err => console.log(err))
    console.log('clicking here')
  }

  return (
    <>
      <div className='App'>
        <form onSubmit={handleSubmit}>
          <input placeholder='Search for Images' onChange={e => setText(e.target.value)} />
          <button>Search</button>
        </form>
        <Slider data={data} />
      </div>
    </>
  )
}

export default App
