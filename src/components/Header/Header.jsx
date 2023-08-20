import React from 'react'
import logo from "../../images/logo.svg"
import './Header.scss';

const Header = ({score}) => {
  return (
    <div className='container-header'>
      <div className="logo">
        <img src={logo} alt="logo" />
      </div>

      <div className="score-counter">
        <h4>SCORE</h4>
        <span>{score}</span>
      </div> 
    </div>
  )
}

export default Header