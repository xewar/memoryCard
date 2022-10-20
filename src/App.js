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
    event.target.blur();
  };
  const toggleMode = event => {
    let newMode = event.target.parentElement.id;
    setMode(prevState => newMode);
    event.target.blur();
  };
  function selectBirds(event) {
    let birdType = event.target.parentElement.id;
    let numFalse = Object.values(selectedBirds).filter(
      bird => bird === false
    ).length;
    let selectedBirdSize = Object.keys(selectedBirds).length;
    if (birdType === 'allBirds') {
      setSelectedBirds(prevState => {
        return {
          ['waterfowl']: false,
          ['herons']: false,
          ['birdsOfPrey']: false,
          ['allBirds']: true,
        };
      });
    }
    //reverts to allBirds if the user deselects everything
    else if (selectedBirds[birdType] && numFalse === selectedBirdSize - 1) {
      setSelectedBirds(prevState => {
        return {
          ...prevState,
          ['allBirds']: true,
          [birdType]: !prevState[birdType],
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
    event.target.blur();
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
