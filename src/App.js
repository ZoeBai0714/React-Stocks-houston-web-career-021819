import React, { Component } from 'react';
import Header from './components/Header'
import MainContainer from './containers/MainContainer'
/*
  structure: 
  App
   --Header
   --MainContainer
     .SearchBar
     .StockContainer
       .Stock
     .PortfolioContainer
       .Stock owned by clients
*/
class App extends Component {
  render() {
    return (
      <div>
        <Header/>
        <MainContainer/>
      </div>
    );
  }
}
 
export default App;

/* Render all the stocks onto the page. The styling of how a Stock should look like is already in the Stock.js component.
      allow a user to buy a stock by clicking on it and when it is bought, it should be added to My Portfolio.
      allow a user to sell a stock in their Portfolio by clicking on the stock and it should be removed from their Portfolio.
      allow a user to sort the list of stocks alphabetically by the ticker name as well as by ascending price.
      allow a user to filter stocks based on the type of the stock.   
*/
