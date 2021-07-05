import React from "react";
import { useParams } from "react-router-dom";

function DogDetails({ dogs }) {
  let newList = Object.values(dogs);
  let dogList = newList[0];
  const { name } = useParams();
  let selectedDog;
  for (let i = 0; i < dogList.length; i++) {
    if (dogList[i].name === name) {
      selectedDog = dogList[i];
    }
  }
  console.log(selectedDog);
  return (
    <div>
      <h1>Dog Details for {name}</h1>
      <div>
        <p>Name: {selectedDog.name}</p>
        <p>Age: {selectedDog.age}</p>
        <h4>Details:</h4>
        <p>{selectedDog.facts[0]}</p>
        <p>{selectedDog.facts[1]}</p>
        <p>{selectedDog.facts[2]}</p>
      </div>
    </div>
  );
}
export default DogDetails;
