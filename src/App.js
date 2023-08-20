import React from "react";
import { useState } from "react";
import "./index.scss";
import Header from "./components/Header/Header";
import Game from "./components/Game/Game";
import Modal from "./components/Modal/Modal";
import Footer from "./components/Footer/Footer";
import Play from "./components/Game/Play";
// import { Switch, Route } from "react-router-dom";
import { Routes, Route } from 'react-router-dom';

const App = () => {

  // States
  const [mySelection, setMySelection] = useState("")
  const [score, setScore] = useState(0)

  return (
    <>
      <div className="container">
        <Header score={score}/> 

        {/* <Switch>
          <Route exact path="/">
            <Play />
          </Route>

          <Route path="/game">
            <Game />
          </Route>
        </Switch> */}
         <Routes>
          <Route path="/" element={<Play setMySelection={setMySelection}/>} />
          <Route path="/game" element={<Game mySelection ={mySelection} score={score} setScore={setScore}/>} />
        </Routes> 


        {/* <Footer/> */}
      </div>
    </>
  );
};

export default App;
