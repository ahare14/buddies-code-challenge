import React, { Component } from 'react'

export default class BeerSearchForm extends Component {
  constructor() {
    super()
    this.state = {
      query: ''
    }
  }

  handleChange = (event) => {
    this.setState({
      query: event.target.value
    })
  }

  handleSubmit = (event) => {
    event.preventDefault()
    this.props.findBeer(this.state.query)
    this.setState({
      query: ''
    })
  }


  render () {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
            <input name="query"
              value={this.state.query}
              onChange={this.handleChange}></input>
          <input type="submit"/>
        </form>
      </div>
    )
  }

}
