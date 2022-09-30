import React, { useState } from 'react';
import './css/App.css';
import CardContainer from './CardContainer';
import Header from './Header';
import Instructions from './Instructions';

function App() {
  const [birdType, setBirdType] = useState('all');
  const [gridSize, setGridSize] = useState(9);
  const [difficulty, setDifficulty] = useState('easy'); //whether multiple pictures of the same bird can be used

  return (
    <div className="App">
      <Header />
      <div className="body">
        <CardContainer size={gridSize} birdType={birdType} />
        <Instructions />
      </div>
    </div>
  );
}

export default App;
