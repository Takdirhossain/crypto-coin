import logo from './logo.svg';
import './App.css';
import axios from 'axios'
import { useEffect, useState } from 'react';

function App() {

  const [coin, setCoin] = useState ([])

  useEffect (() => {
    axios
    .get('https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false')
    .then(res => {
      setCoin(res)
      console.log(res.data)
    })
  } ,[])
  return (
    <div className="App">
      
    </div>
  );
}

export default App;
