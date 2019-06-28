import React, { Component } from 'react';
import BeerSearchForm from './components/BeerSearchForm.js'


class App extends Component {
  constructor() {
    super()
    this.state={

    }
  }
  render() {
    return (
      <div className="App">
        <h1>Drinking Buddies!</h1>
        <BeerSearchForm />

      </div>
    );
  }

}

export default App;
