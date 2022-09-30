import React, { useState } from 'react';
import Scoreboard from './Scoreboard';

const Instructions = props => {
  return (
    <div className="sidebar">
      <div className="difficultyLevel">
        <button className="birdType">Bitterns, Herons, and Ibises</button>
        <button className="birdType">Waterfowl</button>
        <button className="birdType">All Types of Birds</button>
        <button className="birdType">Try again</button>
      </div>
      <Scoreboard score={props.score} highScore={props.highScore} />
      <div className="instructions instructionsSidebar">
        <div className="instructions instructionsHeader">How to Play</div>
        <div className="instructions instructionsText">
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum."
        </div>
      </div>
    </div>
  );
};

export default Instructions;
