import React from 'react'

export default function BeerSelection(props){
  return (
    <div>
      <img src={props.image}/>
      <p>Name: {props.name}</p>
      <p>ABV: {props.abv}</p>
      <p>Food Pairing: {props.food}</p>
      <p>Description: {props.description}</p>
    </div>
  )
};
