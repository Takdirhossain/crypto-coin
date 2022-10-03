import React from 'react';
import './Coin.css'

const Coin = ({image, name, symbol, price, market_cap, priceChange, volume}) => {
  console.log(priceChange)
    return (
        <div className='coin-container'>
            <div className='coin-row'>
                <div className='coin'>
                    <img src={image} alt="" />
                    <h1>{name}</h1>
                    <p>{symbol.toUpperCase()}</p>
                </div>
                <div className='coin-data'>
                    <p className='coin-price'>${price.toFixed(2)}</p>  
                    <p className='coin-volume'>${volume}</p>
                    
                  
                   {priceChange < 0 ? (
                    <p className='price-red'>{priceChange.toFixed(2)}</p>
                   ) : (
                    <p className='price-green'>{priceChange.toFixed(2)}</p>
                   )
                   }
                  
                   <p className='coin-marketCap'>Mkt Cap${market_cap.toLocaleString()}</p>
                </div>
            </div>
        </div>
    );
};

export default Coin;