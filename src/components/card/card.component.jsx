import React from "react";
import './card.style.css'


export const Card = (props) => {
    console.log('this is m ', props.monster)
  return (
    <div className='card-container'>
    <img alt='Monster' src={`https://robohash.org/`+ props.monster.id +`?set=set2`}></img>
      <h1 key={props.monster.id}>{props.monster.name}</h1>
    </div>
  );
};
