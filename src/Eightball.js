import React, { useState } from "react";

import "./Eightball.css";
import defaultAnswers from "./answers.json";
import { choice } from "./random";

/** Eightball: shows random answer and changes answer on click
 * 
 * Props:
 * - answers: array of {msg, color} objects
 * 
 * State:
 * - answer: {msg, color} of current answer
 * 
*/

function Eightball({ answers = defaultAnswers }) {
  const [answer, setAnswer] = useState({
    msg: "Think of a Question.",
    color: "black",
  });

  function handleClick(evt) {
    setAnswer(choice(answers));
  }

  return (
    <div
        className="Eightball"
        onClick={handleClick}
        style={{ backgroundColor: answer.color }}
    >
      <b>{answer.msg}</b>
    </div>
  );
}

export default Eightball;