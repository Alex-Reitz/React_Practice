import React from "react";
import { Link } from "react-router-dom";

function Nav({ dogs }) {
  let newList = Object.values(dogs);
  let dogList = newList[0];
  return (
    <div>
      <h1>Here is a list of our dogs</h1>
      {dogList.map((dog) => (
        <li key={dog.name}>
          <Link to={`/dogs/${dog.name}`}>Show me {dog.name}!</Link>
        </li>
      ))}
    </div>
  );
}

export default Nav;
