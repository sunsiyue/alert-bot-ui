import React from "react";
import "@blueprintjs/core/lib/css/blueprint.css";
import "@blueprintjs/table/lib/css/table.css";
import { Column, Cell, Table2 } from "@blueprintjs/table";
import shortenNumber from "../utils/numbers.js"

class CoinTable extends React.Component {
  constructor(props) {
    super(props);
    this.state = { seconds: 0, data: [], lastUpdate: "" };
  }

  refreshData() {
    this.setState((state) => ({
      seconds: state.seconds + 5,
    }));
    fetch(
      "https://shitcoin-alert-bot-zblig.ondigitalocean.app/shitcoinAlert/exchange/kucoinHotcoin"
    )
      .then((res) => res.json())
      .then((res) => {
        this.setState({
          data: res.data,
          lastUpdate: res.last_update,
        });
        console.log(res);
      });
  }

  componentDidMount() {
    this.interval = setInterval(() => this.refreshData(), 5000);
    fetch(
      "https://shitcoin-alert-bot-zblig.ondigitalocean.app/shitcoinAlert/exchange/kucoinHotcoin"
    )
      .then((res) => res.json())
      .then((res) => {
        this.setState({
          data: res.data,
          lastUpdate: res.last_update,
        });
        console.log(res);
      });
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  render() {
    const numRows = this.state.data.length;
    const symbolColumnRenderer = (index) => {
      return <Cell>{this.state.data[index].symbol}</Cell>;
    };
    const heatColumnRenderer = (index) => {
      return <Cell>{this.state.data[index].oneDayOver30Days.toFixed(2)}</Cell>;
    };
    const volColumnRenderer = (index) => {
      return <Cell>{shortenNumber(this.state.data[index].vol24hr)}</Cell>;
    };
    const monthVolColumnRenderer = (index) => {
      return <Cell>{shortenNumber(this.state.data[index].vol30Days)}</Cell>;
    };
    const dayPriceChangeColumnRenderer = (index) => {
      return <Cell>{this.state.data[index].change24hr.toFixed(2)}%</Cell>;
    };
    const lastPriceChangeColumnRenderer = (index) => {
      return <Cell>{this.state.data[index].lastPrice}</Cell>;
    };
    return (
      <div>
        <div></div>
        <div>
          Length: [{numRows}] | Last Update:[
          {this.state.lastUpdate}]
        </div>
        <Table2 numRows={numRows}>
          <Column name="Coin" cellRenderer={symbolColumnRenderer} />
          <Column name="Heat score" cellRenderer={heatColumnRenderer} />
          <Column name="24hr vol[$$]" cellRenderer={volColumnRenderer} />
          <Column name="30d vol[$$]" cellRenderer={monthVolColumnRenderer} />
          <Column name="24hr $Δ" cellRenderer={dayPriceChangeColumnRenderer} />
          <Column name="last $" cellRenderer={lastPriceChangeColumnRenderer} />
        </Table2>
      </div>
    );
  }
}

export default CoinTable;
