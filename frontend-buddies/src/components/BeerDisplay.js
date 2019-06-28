import React from 'react'
import Beer from './Beer.js'

export default function BeerContainer (props) {

  // let lastBeer = props.fullBeerList[props.fullBeerList.length - 1]
  // let singleBeer = <Beer key={lastBeer.id}
  //   name={lastBeer.name}
  //   abv={lastBeer.abv}
  //   image={lastBeer.image}
  //   description={lastBeer.description}
  //   food={lastBeer.food}/>

  const beer = props.fullBeerList
  const showBeer = <Beer key={beer.id}
    name={beer.name}
    abv={beer.abv}
    image={beer.image}
    description={beer.description}
    food={beer.food}/>

  return (
    <div>
    

    {showBeer}


    </div>
  )
}
