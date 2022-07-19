import React, { useState } from 'react';

const Scoreboard = () => {
  const [score, setScore] = useState(0);
  const [highScore, setHighScore] = useState(0);

  return (
    <div className="scoreboard">
      <div className="score">Score: {score}</div>
      <div className="highScore">High Score: {score}</div>
    </div>
  );
};

export default Scoreboard;
