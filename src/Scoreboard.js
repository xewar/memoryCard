import React, { useState } from 'react';

const Scoreboard = () => {
  const [score, setScore] = useState(0);
  const [highScore, setHighScore] = useState(0);

  return (
    <div className="scoreboard">
      <div className="score currentScore">
        <div>Score:</div>
        <div>{score}</div>
      </div>
      <div className="score highScore">
        <div>High Score:</div>
        <div>{highScore}</div>
      </div>
    </div>
  );
};

export default Scoreboard;
