import { useEffect, useState } from 'react';

function App() {
  const [loading, setLoading] = useState(true);
  const [coins, setCoins] = useState([]);
  const [myMoney, setMyMoney] = useState(0);
  const [coinMoney, setCoinMoney] = useState(0);
  const onChange = (event) => setMyMoney(event.target.value);
  const SetCoinMoney = (event) => setCoinMoney(event.target.value);
  useEffect(() => {
    fetch('https://api.coinpaprika.com/v1/tickers')
      .then((response) => response.json())
      .then((json) => {
        setCoins(json);
        setLoading(false);
      });
  }, []);
  return (
    <div>
      <h1>The Coins! ({coins.length})</h1>
      {loading ? <strong>Loading...</strong> : null}
      <input value={myMoney} onChange={onChange} type="text"></input>
      <select onChange={SetCoinMoney}>
        <option>Select Coin</option>
        {coins.map((coin, index) => (
          <option key={index} value={coin.quotes.USD.price}>
            {coin.name} ({coin.symbol}): ${coin.quotes.USD.price} USD
          </option>
        ))}
      </select>
      <h2>Coin Buy Count: {coinMoney > 0 ? myMoney / coinMoney : null}</h2>
    </div>
  );
}

export default App;
