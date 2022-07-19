import React from 'react';
import Scoreboard from './Scoreboard';

function Header() {
  return (
    <div className="header">
      <div className="headerText">Memory Cards</div>
      <Scoreboard />
      <div className="difficultyLevel">
        <button className="easyButton">Easy</button>
        <button className="mediumButton">Medium</button>
        <button className="hardButton">Hard</button>
        <button className="color">Color</button>
      </div>
    </div>
  );
}
export default Header;
