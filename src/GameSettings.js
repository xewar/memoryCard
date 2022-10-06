import React from 'react';

const GameSettings = () => {
  return (
    <div className="settings">
      <div className="settingsDiv">
        {' '}
        <div className="chooseCategory"></div>
        <button className="birdType bubble">
          Bitterns, Herons, and Ibises
        </button>
        <button className="birdType bubble">Waterfowl</button>
        <button className="birdType bubble selected">All Types of Birds</button>
      </div>
      <div className="settingsDiv">
        <button className="difficulty bubble selected easy">Easy</button>
        <button className="difficulty  bubble medium">Medium</button>
        <button className="difficulty bubble  hard">Hard</button>
      </div>
      <div className="settingsDiv">
        <div></div>
        <button className="bubble">Try again</button>
      </div>
    </div>
  );
};

export default GameSettings;
