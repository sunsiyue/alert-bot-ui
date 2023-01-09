import React from "react";
import BinanceCoinTable from "./components/BinanceCoinTable";
import CoinTable from "./components/CoinTable";

function App() {
  return (
    // <div className="bp4-dark">
    <div style={{ padding: 30 }}>
      <h4>Hot coins from Binance</h4>
      <BinanceCoinTable />
      <h4>Hot coins from Kucoin</h4>
      <CoinTable />
    </div>
    // </div>
  );
}

export default App;
