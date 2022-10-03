import './App.css';
import axios from 'axios'
import { useEffect, useState } from 'react';
import Coin from './components/Coin';

function App() {
  const [coin, setCoin] = useState ([])
  const[search, setSearch] = useState('')

  useEffect (() => {
    axios
    .get('https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false')
    .then(res => {
      setCoin(res.data)      
    }) 
  } ,[])

  const handleChange = e => {
    setSearch(e.target.value);
  }
  const filteredCoin = coin.filter(
    coin => coin.name.toLowerCase().includes(search.toLowerCase())
  )

  return (
    <div className="App">
      <div className="coin-search">
        <h1 className='main-header'> Search a Crypto Currency</h1>
        <form > 
          <input className='coin-input' type="text" placeholder='Search' onChange={handleChange} />
        </form>
      </div>
      {
       filteredCoin.map(coin => {
        return (
         <Coin key={coin.id} image={coin.image} name={coin.name} symbol={coin.symbol} price={coin.current_price} market_cap={coin.market_cap} priceChange={coin.price_change_percentage_24h} volume={coin.total_volume} >

         </Coin>
        )
       })
      }
    </div>
  );
}

export default App;
