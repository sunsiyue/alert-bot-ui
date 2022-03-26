import React from "react";
import Timer from "./components/Cointable";

import CoinTable from "./components/Cointable";

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
