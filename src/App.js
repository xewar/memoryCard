import React, { useState } from 'react';
import './css/App.css';
import CardContainer from './CardContainer';
import Header from './Header';
import Instructions from './Instructions';

function App() {
  const [birdType, setBirdType] = useState('all');
  const [gridSize, setGridSize] = useState(9);
  const [difficulty, setDifficulty] = useState('easy'); //whether multiple pictures of the same bird can be used
  const [score, setScore] = useState(0);
  const [highScore, setHighScore] = useState(0);

  const updateScore = () => {
    setScore(prevScore => prevScore + 1);
  };
  return (
    <div className="App">
      <Header />
      <div className="body">
        <CardContainer
          size={gridSize}
          birdType={birdType}
          score={score}
          highScore={highScore}
          updateScore={updateScore}
        />
        <Instructions score={score} highScore={highScore} />
      </div>
    </div>
  );
}

export default App;
