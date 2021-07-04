import React from "react";
import { Link } from "react-router-dom";

function VendingMachine() {
  return (
    <div>
      <p>Take your pick from anyone of these snacks!</p>
      <Link exact to="/Soda">
        Soda
      </Link>
      <br />
      <Link exact to="/CandyBar">
        CandyBar
      </Link>
      <br />
      <Link exact to="/FruitRollup">
        FruitRollup
      </Link>
    </div>
  );
}

export default VendingMachine;
