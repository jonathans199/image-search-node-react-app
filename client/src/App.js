import React, { useState, useEffect } from 'react'
import './App.css'

import Slider from './components/Slider'

function App() {
  const [data, setData] = useState([])

  useEffect(() => {
    fetch('http://localhost:3001/api')
      .then(res => res.json())
      .then(data => setData(data))
      .catch(err => console.log(err))
  }, [])

  return (
    <>
      <div className='App'>
        <Slider data={data} />
        {/* {!data ? 'loading' : data} */}
      </div>
    </>
  )
}

export default App
