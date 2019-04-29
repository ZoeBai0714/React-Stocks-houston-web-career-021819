import React, { Component } from 'react';
import Stock from '../components/Stock'

class StockContainer extends Component {
 
  render() {
    return (
      <div style = {{marginLeft:'100px'}}>
        <h2>Stocks</h2>
        {this.props.stocks.map(stock => <Stock {...stock} purchase = {this.props.purchase} sell = {this.props.sell}/> )}
      </div>
    );
  }

}

export default StockContainer;
