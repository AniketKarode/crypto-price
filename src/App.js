import { useEffect, useState } from 'react';
import './App.css';
import Axios from "axios";
import Coin from "./component/coin"

function App() {
  const [coinList,setcoinList]= useState([]);
  const [searchWord,setsearchWord]= useState("");

  

  useEffect(()=>{
    Axios.get("https://api.coinstats.app/public/v1/coins?skip=0").then((response)=>{
      setcoinList(response.data.coins);
    })
    
  }, []);

  
  const filteredCoins= coinList.filter((coin)=>{
    return coin.name.toLowerCase().includes(searchWord.toLocaleLowerCase());
       });


  return (
    <div className="App">
      <div className="cryptoHeader">
        <input type="text" placeholder='Bitcoin...' onChange={(event)=>{setsearchWord(event.target.value);}} />
        </div>
      <div className="cryptoDisplay">
       {filteredCoins.map((coin) =>{ 
          return <Coin
              name={coin.name}
              icon={coin.icon}
              price={coin.price}
              symbol={coin.symbol} />
            
      
      } )}
      
        
        </div>
     
    </div>
  );
}

export default App;
