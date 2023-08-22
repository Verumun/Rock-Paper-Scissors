import React from "react";
import './Play.scss';
import { Link } from "react-router-dom";
import triangle from "../../images/bg-triangle.svg";
import iconPaper from "../../images/icon-paper.svg";
import iconScissors from "../../images/icon-scissors.svg";
import iconRock from "../../images/icon-rock.svg";

const Play = ({ setMySelection }) => {
  const setMySelctionFunc = (e) => {
    setMySelection(e.target.dataset.id);
  };

  return (
    <div className="play">
      <img className="triangle" src={triangle} alt="" />
      <div className="play-items">
        <Link to="/game">
          <div
            data-id="paper"
            onClick={setMySelctionFunc}
            className="icon icon--paper"
          >
            
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
    </div>
  );
};

export default Play;
