import React from 'react'
import "./Card.css"

const Card = ({slika, ime}) => { //drugi nacin
    // 1. nacin const {slika, ime} = props;
  return (
    <div className='card-div'>
        <img src={slika} alt="" />
        <p>{ime}</p>
        </div>
  )
}

export default Card