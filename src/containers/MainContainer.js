import React, { Component } from 'react';
import StockContainer from './StockContainer'
import PortfolioContainer from './PortfolioContainer'
import SearchBar from '../components/SearchBar'

class MainContainer extends Component {
  state = {
    stocks:[],
    myStocks:[],
    sorted:[],
    filtered:[]
  }

  componentDidMount(){
    fetch('http://localhost:3000/stocks')
    .then(res => res.json())
    .then(stocksData => {
       this.setState({
         stocks:stocksData
       })
    }) 
  } 
   
  myPortFolioNoDuplicate = () =>{
    const myPortFolio = this.state.myStocks
    myPortFolio.push((this.state.stocks.filter(stock => stock.isPurchased == true)[0]))
    return myPortFolio.filter((stock, index) => myPortFolio.indexOf(stock) == index) // get rid of duplicate
    
  }

  updatePurchased = (id, stock) =>{
    fetch(`http://localhost:3000/stocks/${id}`, {
      method:"PATCH",
      headers:{
        'Content-Type': 'application/json'
            },
      body: JSON.stringify({
        isPurchased:!stock.props.isPurchased //toggle
      })      
    })
    
  }

  updateBrowser = (id) =>{
    this.setState({
      stocks:this.state.stocks.map(stock => {
        if(stock.id == id){
         return {...stock,isPurchased:!stock.isPurchased} //toggle // This part can not single out to be a function, it runs first here, we will get an this.state.stocks undefined error
        }else{
         return stock
        }
      }),
      myStocks: this.myPortFolioNoDuplicate()
    })
  }

  purchase = (id, stock) => {
    //patch update db
    this.updatePurchased(id, stock)
    //update browser. 
    this.updateBrowser(id)
    }


  sell = (id,stock) =>{
    //update db
     this.updatePurchased(id, stock)
    //update browser
    this.updateBrowser(id) 
  }

  handleOnChange = (e) =>{
    //make sure in each case, the other types should remain the same as before
    let sortedStocks= []
    let filteredStocks = []
    if(e.target.value == "Alphabetically"){
       sortedStocks = this.state.stocks.sort((a,b)=> a.ticker > b.ticker? 1 : -1)
       filteredStocks = []
    }else if(e.target.value == "Price"){
       sortedStocks = this.state.stocks.sort((a,b) => a.price - b.price)
       filteredStocks = []
    }else if(e.target.value == "Sportswear"){
      filteredStocks = this.state.stocks.filter(stock => stock.type == "Sportswear")
      sortedStocks = this.state.stocks
    }else if(e.target.value == "Tech"){
      filteredStocks = this.state.stocks.filter(stock => stock.type == "Tech")
      sortedStocks = this.state.stocks  
    }else if(e.target.value == "Finance"){
      filteredStocks = this.state.stocks.filter(stock => stock.type == "Finance")
      sortedStocks = this.state.stocks  
    }

    this.setState({
      stocks:sortedStocks,
      filtered:filteredStocks
    })
  }
  

  render() {
    return (
      <div>
        <SearchBar onChange = {this.handleOnChange}/>

          <div className="row">
            <div className="col-8">
              { !this.state.filtered.length > 0?
                <StockContainer stocks = {this.state.stocks.filter(stock => stock.isPurchased == false)} purchase = {this.purchase}/>
                :
                <StockContainer stocks = {this.state.filtered.filter(stock => stock.isPurchased == false)} purchase = {this.purchase}/>
              }

            </div>
            <div className="col-4">

              <PortfolioContainer myStocks = {this.state.stocks.filter(stock => stock.isPurchased == true)} sell = {this.sell}/>

            </div>
          </div>
      </div>
    );
  }

}

export default MainContainer;

/*
 stocks:this.state.stocks.map(stock => {
        if(stock.id == id){
          return {...stock, isPurchased:true}    //update db
        }else{
          return stock
        }
      }),
*/
