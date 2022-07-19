import React from 'react';
import Scoreboard from './Scoreboard';

function Header() {
  return (
    <div className="header">
      <div className="headerText">Memory Cards</div>
      <Scoreboard />
      <div className="difficultyLevel">
        <button className="easy">Easy</button>
        <button className="medium">Medium</button>
        <button className="hard">Hard</button>
      </div>
    </div>
  );
}
export default Header;
