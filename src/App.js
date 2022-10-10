import React, { useEffect, useState } from 'react';
import './css/App.css';
import CardContainer from './CardContainer';
import Instructions from './Instructions';
import Scoreboard from './Scoreboard';
import GameSettings from './GameSettings';

function App() {
  const [birdType, setBirdType] = useState('all');
  const [gridSize, setGridSize] = useState(9);
  const [difficulty, setDifficulty] = useState('easy'); //whether multiple pictures of the same bird can be used
  const [score, setScore] = useState(0);
  const [highScore, setHighScore] = useState(0);

  useEffect(() => {
    if (highScore <= score) {
      setHighScore(prevHighScore => score);
    }
  }, [score]);
  const updateScore = () => {
    setScore(prevScore => prevScore + 1);
  };
  return (
    <div className="App">
      <div className="left">
        <GameSettings />
        <Instructions />
      </div>
      <div className="right">
        <div className="header"> </div>
        {/* <Scoreboard score={score} highScore={highScore} /> */}

        <CardContainer
          size={gridSize}
          birdType={birdType}
          score={score}
          highScore={highScore}
          updateScore={updateScore}
        />
      </div>
    </div>
  );
}

export default App;
