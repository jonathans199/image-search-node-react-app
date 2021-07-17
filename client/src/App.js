import React, {useState, useEffect} from 'react'
import './App.css';

function App() {
  const [data, setData] = useState(null)
  useEffect(() => {
    fetch('http://localhost:3001/api')
    .then(res => res.json())
    .then(data => setData(data.message) )
    .catch(err => console.log(err))
  },[])


  return (
    <div className="App">
      <header className="App-header">
        
        <p>
          Edit <code>src/App.js</code> {!data ? 'loading' : data}
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
