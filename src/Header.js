import React from 'react';
import Scoreboard from './Scoreboard';

function Header() {
  return (
    <div className="header">
      <div className="headerText">Birds of Central Park</div>
      <div className="difficultyLevel">
        <button className="birdType">Bitterns, Herons, and Ibises</button>
        <button className="birdType">Waterfowl</button>
        <button className="birdType">All Types of Birds</button>
        <button className="birdType">Try again</button>
      </div>
      <Scoreboard />
    </div>
  );
}
export default Header;
