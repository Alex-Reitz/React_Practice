import React from "react";

const pokecard = (props) => {
  return (
    <div>
      <p>This is {props.name}</p>
      <p>They are of type: {props.type}</p>
      <p>Base experience: {props.base_exp}</p>
      <img src={props.image} alt="This is an image of a pokemon" />
    </div>
  );
};

export default pokecard;
