import React, { useState } from 'react';
import Scoreboard from './Scoreboard';

const Instructions = () => {
  return (
    <div className="sidebar">
      <Scoreboard />
      <div className="instructions instructionsSidebar">
        <h1 className="instructions instructionsHeader">How to Play</h1>
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
