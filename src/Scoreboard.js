import React, { useState } from 'react';

const Scoreboard = props => {
  return (
    <div className="scoreboard">
      <div className="score currentScore">
        <div>Score:</div>
        <div>{props.score}</div>
      </div>
      <div className="score highScore">
        <div>High Score:</div>
        <div>{props.highScore}</div>
      </div>
    </div>
  );
};

export default Scoreboard;
