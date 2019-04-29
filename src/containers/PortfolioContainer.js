import React, { Component } from 'react';
import Stock from '../components/Stock'

class PortfolioContainer extends Component {
  

  sell = (id) =>{
   console.log(id)
  }
  render() {
    return (
      <div style = {{marginRight:'100px'}}>
        <h2>My Portfolio</h2>
          {this.props.myStocks.map(stock => <Stock {...stock} sell = {this.props.sell}/>)}
      </div>
    );
  }

}

export default PortfolioContainer;
