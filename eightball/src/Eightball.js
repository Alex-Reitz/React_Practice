import React, { useState } from "react";
import answers from "./answers";
import "./Eightball.css";
import getRandom from "./helpers";

const Eightball = () => {
  const [color, setColor] = useState("black");
  const [msg, getMsg] = useState("Think of a question");

  function handleClick() {
    let data = getRandom(answers);
    console.log(data);
    getMsg(data.msg);
    setColor(data.color);
  }
  function reset() {
    getMsg("Think of a question");
    setColor("Black");
  }

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
      }}
    >
      <button
        onClick={reset}
        style={{
          textAlign: "center",
        }}
      >
        Reset
      </button>
      <button className="btn" onClick={handleClick}>
        <h1>Eightball</h1>
        <span
          className="circle"
          style={{
            margin: "auto",
            width: "500px",
            height: "500px",
            lineHeight: "500px",
            borderRadius: "50%",
            fontSize: "50px",
            color: "white",
            display: "inline-block",
            textAlign: "center",
            background: color,
          }}
        >
          {msg}
        </span>
      </button>
    </div>
  );
};

export default Eightball;
