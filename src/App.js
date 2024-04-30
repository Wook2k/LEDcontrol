import './App.css';
import React, { useState } from 'react';
import axios from 'axios';

function App() {
  const [ledState, setLedState] = useState(false);

  const toggleLed = () => {
    setLedState(!ledState);
    axios.post('http://192.168.0.10/toggle-led', { ledState: !ledState })
      .then(response => console.log(response))
      .catch(error => console.error(error));
  };

  return (
    <div>
      <h1>LED 제어</h1>
      <button onClick={toggleLed}>{ledState ? 'LED 끄기' : 'LED 켜기'}</button>
    </div>
  );
}

export default App;
