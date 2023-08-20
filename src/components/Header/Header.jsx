import React from 'react'
import logo from "../../images/logo.svg"

const Header = ({score}) => {
  return (
    <div>
      {/* <div className="logo">
        <img src={logo} alt="logo" />
      </div>

      <div className="score-counter">
        <h4>SCORE</h4>
        
      </div> */} <h2>Score:{score}</h2>
    </div>
  )
}

export default Header