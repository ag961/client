import './App.css';
import axios from 'axios';
import { useState, useEffect } from 'react';
import { io } from "socket.io-client"

const socket = io(process.env.REACT_APP_SERVER);

socket.on('Handshake', ()=>{
  console.log('hit!')
})

function App() {

  const [hello, setHello] = useState('Default message');
  const fetch = async () => {
    let response = await axios.get(process.env.REACT_APP_SERVER);
    setHello(response.data);
  }

  useEffect(() => {
    fetch();
  }, []);

  return (
    <div className="App">
      <h1>{hello}</h1>
    </div>
  );
}

export default App;
