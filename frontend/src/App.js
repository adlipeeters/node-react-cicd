import logo from './logo.svg';
import './App.css';
import React, { useState, useEffect } from 'react'
import axios from 'axios'

function App() {
  const [userName, setUsername] = useState('');

  useEffect(() => {

    getNames()
  }, [])

  const getNames = async () => {
    const response = await axios.get('/names')
    console.log(response)
    setUsername(response?.data)
  }

  return (
    <div className="App">
      <h1>My frontend</h1>
      <h3>Backend response: {userName}</h3>
    </div>
  );
}

export default App;
