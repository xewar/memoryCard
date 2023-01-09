import React, { useEffect, useState } from 'react';
import './css/App.css';
import CardContainer from './CardContainer';
import Instructions from './Instructions';
import GameSettings from './GameSettings';

function App() {
  //the App function updates the game with the chosen game settings and returns the components that make up the game
  const [difficulty, setDifficulty] = useState('easy');
  const [mode, setMode] = useState('learning');
  const [selectedBirds, setSelectedBirds] = useState({
    allBirds: true,
    birdsOfPrey: false,
    herons: false,
    waterfowl: false,
  });
  const [score, setScore] = useState(0);
  const [totalScore, setTotalScore] = useState(0);
  //changing the difficulty level with sidebar buttons
  const toggleDifficulty = event => {
    let newDifficulty = event.target.parentElement.id;
    setDifficulty(prevState => newDifficulty);
    //deselecting the button after the change
    event.target.blur();
  };
  //changing the mode with the sidebar
  const toggleMode = event => {
    let newMode = event.target.parentElement.id;
    setMode(prevState => newMode);
    event.target.blur();
  };
  //score goes to zero when switching to practice mode
  useEffect(() => {
    setScore(0);
  }, [mode, difficulty, selectedBirds]);

  //using the sidebar buttons to select which birds you'd like to work on memorizing this round
  function selectBirds(event) {
    let birdType = event.target.parentElement.id;
    let numFalse = Object.values(selectedBirds).filter(
      bird => bird === false
    ).length;
    let selectedBirdSize = Object.keys(selectedBirds).length;
    //if user selects all birds, change the selectedBirds in the game settings to that
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
    //if they deselect everything, also play with all birds
    else if (selectedBirds[birdType] && numFalse === selectedBirdSize - 1) {
      setSelectedBirds(prevState => {
        return {
          ...prevState,
          ['allBirds']: true,
          [birdType]: !prevState[birdType],
        };
      });
    } //otherwise, update the bird type as the user selects/deselects those buttons
    else {
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
          score={score}
          setScore={setScore}
          totalScore={totalScore}
          setTotalScore={setTotalScore}
        />
      </div>
    </div>
  );
}

export default App;
