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
        {/* <div className="headerText">Birds of Central Park</div> */}
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
        <div className="scoring">
          <div className="instructions instructionsText">
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum."
          </div>
          <Scoreboard score={score} highScore={highScore} />
        </div>
        <div className="headerText">Birds of Central Park</div>
      </div>
    </div>
  );
}

export default App;
