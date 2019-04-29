import React from 'react'

class Stock extends React.Component {
  render(){
    return(
    <div className="ui card">
      <div className="content">
        <a className="header">{this.props.name}</a>
        <p className ="description">Price: {this.props.price}</p>
        {this.props.isPurchased? 
          <button onClick = {()=> this.props.sell(this.props.id, this)} className="ui primary button">Sell</button>     
          :
          <button onClick = {()=> this.props.purchase(this.props.id, this)} className="ui primary button">Buy</button>     
        }
      </div>
    </div>

    )
  }
  
};

export default Stock

//= ({name, price, purchase,id, isPurchased, sell}) =>
