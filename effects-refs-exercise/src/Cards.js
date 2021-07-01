import React, { useState, useEffect } from "react";
import axios from "axios";

const Cards = () => {
  const [data, setData] = useState(null);

  const [cards, setCards] = useState([]);

  useEffect(() => {
    async function loadCards() {
      const res = await axios.get(
        `https://deckofcardsapi.com/api/deck/new/shuffle/?deck_count=1`
      );
      console.log(res.data);
      setData(res.data.deck_id);
    }
    loadCards();
  }, []);

  const drawCard = () => {
    async function pick() {
      const res = await axios.get(
        `https://deckofcardsapi.com/api/deck/${data}/draw/?count=1`
      );
      if (res.data.remaining === 0) {
        setCards([...cards, "Error: No more cards remaining"]);
        return "Error: No more cards";
      } else {
        setCards([
          ...cards,
          res.data.cards[0].value,
          " of ",
          res.data.cards[0].suit,
          " ",
        ]);
        return res.data.cards[0];
      }
    }
    pick();
  };

  /* useEffect(() => {
    setInterval(() => {
      setSeconds((seconds) => seconds + 1);
    }, 1000);
  }, []); */

  return (
    <div>
      <button onClick={drawCard}>New Card</button>
      {cards}
    </div>
  );
};

export default Cards;
