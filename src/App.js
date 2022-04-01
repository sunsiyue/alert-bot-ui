import React from "react";
import CoinTable from "./components/CoinTable";

function App() {
  return (
    <div style={{ padding: 30 }}>
      <h4>Hot coins from Kucoin</h4>
      <CoinTable />
    </div>
  );
}

export default App;
