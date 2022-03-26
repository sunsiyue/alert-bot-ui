import React from "react";
import CoinTable from "./components/CoinTable";

function App() {
  return (
    <div style={{ display: "block", padding: 30 }}>
      <h4>Hot coins from Kucoin</h4>
      <CoinTable />
      {/* <Cointable /> */}
    </div>
  );
}

export default App;
