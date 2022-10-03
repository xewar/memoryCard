import React, { useEffect, useState } from 'react';
import './css/App.css';
import CardContainer from './CardContainer';
import Instructions from './Instructions';
import Scoreboard from './Scoreboard';

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
        <div className="headerText">The Birds of Central Park</div>
        <Scoreboard score={score} highScore={highScore} />

        <Instructions />
      </div>
      <div className="right">
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
