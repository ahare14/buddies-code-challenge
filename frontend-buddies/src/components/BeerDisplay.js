import React from 'react'
import Beer from './Beer.js'

export default function BeerContainer (props) {

  const beer = props.fullBeerList
  const showBeer = <Beer key={beer.id}
    name={beer.name}
    abv={beer.abv}
    image={beer.image}
    description={beer.description}
    food={beer.food}/>
  const pageCss = {
    margin: '0 auto',
    width: '100%'
  }

  return (
    <div style={pageCss}>

    {showBeer}


    </div>
  )
}
