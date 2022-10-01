import React, { useState } from 'react';

const Scoreboard = props => {
  return (
    <div className="scoreboard">
      <div className="score">
        <div>Score:</div>
        <div className="scoreNumber">{props.score}</div>
      </div>
      <div className="score">
        <div>High Score:</div>
        <div className="scoreNumber">{props.highScore}</div>
      </div>
    </div>
  );
};

export default Scoreboard;
