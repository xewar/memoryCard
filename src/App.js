import React, { useState } from 'react';
import './css/App.css';
import CardContainer from './CardContainer';
import Instructions from './Instructions';
import GameSettings from './GameSettings';

function App() {
  const [difficulty, setDifficulty] = useState('easy');
  const [mode, setMode] = useState('learning');
  const [selectedBirds, setSelectedBirds] = useState({
    allBirds: true,
    birdsOfPrey: false,
    herons: false,
    waterfowl: false,
  });
  const toggleDifficulty = event => {
    let newDifficulty = event.target.parentElement.id;
    setDifficulty(prevState => newDifficulty);
  };
  const toggleMode = event => {
    let newMode = event.target.parentElement.id;
    setMode(prevState => newMode);
  };
  function selectBirds(event) {
    let birdType = event.target.parentElement.id;
    if (birdType === 'allBirds') {
      setSelectedBirds(prevState => {
        return {
          ['waterfowl']: false,
          ['herons']: false,
          ['birdsOfPrey']: false,
          ['allBirds']: !prevState['allBirds'],
        };
      });
    } else {
      setSelectedBirds(prevState => {
        return {
          ...prevState,
          ['allBirds']: false,
          [birdType]: !prevState[birdType],
        };
      });
    }
  }
  return (
    <div className="App">
      <div className="left">
        <GameSettings
          difficulty={difficulty}
          toggleDifficulty={toggleDifficulty}
          mode={mode}
          toggleMode={toggleMode}
          selectedBirds={selectedBirds}
          selectBirds={selectBirds}
        />
        <Instructions />
      </div>
      <div className="right">
        <div className="header"> </div>
        <CardContainer
          selectedBirds={selectedBirds}
          difficulty={difficulty}
          mode={mode}
        />
      </div>
    </div>
  );
}

export default App;
