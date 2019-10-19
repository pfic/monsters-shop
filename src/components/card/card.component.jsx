import React from "react";
import "./card.style.css";

export const Card = props => {
  return (
    <div className="card-container">
      <img
        alt="Monster"
        src={`https://robohash.org/${props.monster.id}?set=set2&size=180x180`}
      ></img>
      <h1 key={props.monster.id}>{props.monster.name}</h1>
      <h2>
        <p>{props.monster.email}</p>
      </h2>
    </div>
  );
};
