import React, { Component } from 'react'

export default class BeerSearchForm extends Component {
  constructor() {
    super()
    this.state = {
      query: ''
    }
  }

  handleInputChange = () => {
    this.setState({
      query: this.search.value
    })
  }

  render () {
    return (
      <div>
        <form>
          <input
            placeholder="Search for..."
            ref={input => this.search = input}
            onChange={this.handleInputChange}
            />
            <p>{this.state.query}</p>
        </form>
      </div>
    )
  }

}
