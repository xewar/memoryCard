import React, { useState } from 'react';

const Instructions = () => {
  return (
    <div className="sidebar">
      <div className="difficultyLevel">
        {' '}
        <div className="chooseCategory"></div>
        <button className="birdType">Bitterns, Herons, and Ibises</button>
        <button className="birdType">Waterfowl</button>
        <button className="birdType selected">All Types of Birds</button>
      </div>
      <div className="difficultyLevel">
        <button className="difficulty selected easy">Easy</button>
        <button className="difficulty medium">Medium</button>
        <button className="difficulty hard">Hard</button>
      </div>
      <div className="difficultyLevel">
        <div></div>
        <button className="birdType">Try again</button>
      </div>
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
