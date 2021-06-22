import React from "react";
import Pokecard from "./Pokecard";
import Pokemon from "./Pokemon";

const Pokedex = () => {
  return (
    <div>
      {Pokemon.map((p) => (
        <Pokecard
          key={p.id}
          image={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${p.id}.png`}
          name={p.name}
          type={p.type}
          base_exp={p.base_experience}
        />
      ))}
    </div>
  );
};

export default Pokedex;
