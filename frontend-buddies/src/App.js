import React, { Component } from 'react';
import BeerSearchForm from './components/BeerSearchForm.js'
import BeerDisplay from './components/BeerDisplay.js'


class App extends Component {
  constructor() {
    super()
    this.state={
      beerList: [],
      lastBeer: []
    }
  }

  componentDidMount(){
    this.fetchBeers()
  }

  fetchBeers = () => {
    let url = "http://localhost:3000/beers"
    fetch(url)
      .then(response => response.json())
      .then(result => this.setState({ beerList: result }))
  }

  findBeer = (query) => {
    this.state.beerList.forEach((beer) => {
      if(beer["name"] === query) {
        const foundBeer = {...beer, id: Date.now()}
        // const fullBeerList = [...this.state.beerList, foundBeer]
        this.setState({
          // beerList: fullBeerList,
          lastBeer: foundBeer
        })
      }
    })
    // console.log(this.state.beerList[this.state.beerList.length-1])
  }

  // setLastBeer = (query) => {
  //   this.setState({
  //     lastBeer: query
  //   })
  // }


  render() {
    return (
      <div className="App">
        <h1>Drinking Buddies!</h1>
        <BeerSearchForm findBeer={this.findBeer}/>
        <BeerDisplay fullBeerList={this.state.lastBeer}/>

      </div>
    );
  }

}

export default App;
