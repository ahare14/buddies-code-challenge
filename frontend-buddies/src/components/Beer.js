import React from 'react'

export default function BeerSelection(props){
  const width = {
    width: '25rem',
    textAlign: 'center',
    width: '40%',
    margin: '0 auto'
  }
  return (
    <div class="row">
      <div class="col">
        <div class="card text-center bg-dark text-white" style={width}>
          <img class="card-img-top" src={props.image}/>
          <div class="card-body bg-dark text-white">
            <h5 class="card-title">Name: {props.name}</h5>
            <p class="card-text">Description: {props.description}</p>
          </div>
          <ul class="list-group list-group-flush bg-dark text-white">
            <li class="list-group-item bg-dark text-white">ABV: {props.abv}%</li>
            <li class="list-group-item bg-dark text-white">Food Pairing: {props.food}</li>
          </ul>
        </div>
      </div>
    </div>
)
};
