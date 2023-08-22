import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import './Game.scss';
import './House.scss'

const Game = ({ setScore, score, mySelection }) => {
  const [house, setHouse] = useState("");
  const [playerWin, setPlayerWin] = useState("");

  const newHousePick = () => {
    const selections = ["rock", "paper", "scissors"];
    setHouse(selections[Math.floor(Math.random() * 3)]);
  };

  useEffect(() => {
    newHousePick();
  }, []);

  // Logic for the Game
  const Result = () => {
    if (mySelection === "rock" && house === "scissors") {
      setPlayerWin("win");
      setScore(score + 1);
    } else if (mySelection === "scissors" && house === "rock") {
      setPlayerWin("loose");
      setScore(score - 1);
    } else if (mySelection === "rock" && house === "paper") {
      setPlayerWin("loose");
      setScore(score - 1);
    } else if (mySelection === "scissors" && house === "paper") {
      setPlayerWin("win");
      setScore(score + 1);
    } else if (mySelection === "paper" && house === "rock") {
      setPlayerWin("win");
      setScore(score + 1);
    } else if (mySelection === "paper" && house === "scissors") {
      setPlayerWin("loose");
      setScore(score - 1);
    } else {
      setPlayerWin("draw");
    }
  };
  useEffect(() => {
    Result();
  }, [house]);

  return (
    <div className="game">
      <div className="game__player">
        <h4 className="text">You picked</h4>
        <div className={`icon icon--${mySelection} ${playerWin=="win" ? `icon icon--${mySelection}--winner` : ''}`} ></div>
      </div>

      {/* Result */}
      
      <div className="result__play">
      {playerWin == "win" && <h2>You Win</h2>}
       {playerWin == "loose" && <h2>You Loose</h2>}
      {playerWin == "draw" && <h2>Draw</h2>}
        <Link to="/" className="play-again" onClick={()=> setHouse()}>Play Again</Link>
      </div>


      {/* HOuse */}
      <div className="game__house">
        <h4 className="text">The house picked</h4>
        <div className={`icon icon--${house} ${playerWin=="loose" ? `icon icon--${house}--winner` : ''}`}></div>
      </div>
    </div>
  );
};

// my selection: {mySelection} <br />
//       House Selection: {house}
//       <br />
//       Result: {playerWin == "win" && <h2>You Win</h2>}
//       {playerWin == "loose" && <h2>You Loose</h2>}
//       {playerWin == "draw" && <h2>Draw</h2>}

//       

export default Game;
