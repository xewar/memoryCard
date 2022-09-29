import React from 'react';
import Scoreboard from './Scoreboard';

function Header() {
  return (
    <div className="header">
      <div className="headerText">Birds of Central Park</div>
      <div className="difficultyLevel">
        <button className="easyButton">Bitterns, Herons, and Ibises</button>
        <button className="mediumButton">Waterfowl</button>
        <button className="hardButton">All</button>
        {/* <button className="color">Color</button> */}
      </div>
      {/* add back in Scoreboard later */}
      {/* <Scoreboard /> */}
    </div>
  );
}
export default Header;
