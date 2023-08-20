import React from "react";
import { Link } from "react-router-dom";

const Play = ({setMySelection}) => {
  const setMySelctionFunc = (e) => {
    setMySelection(e.target.dataset.id);
  };

  return (
    <div className="play">
      <Link to="/game">
        <div
          data-id="paper" 
          onClick={setMySelctionFunc}
          className="icon icon--paper"
        >
          Paper
        </div>
      </Link>

      <Link to="/game">
        <div
          data-id="scissors"
          onClick={setMySelctionFunc}
          className="icon icon--scissors"
        >
          scissors
        </div>
      </Link>

      <Link to="/game">
        <div
          data-id="rock"
          onClick={setMySelctionFunc}
          className="icon icon--rock"
        >
          rock
        </div>
      </Link>
    </div>
  );
};

export default Play;
