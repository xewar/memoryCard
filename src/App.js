import React, { useState } from 'react';
import './css/App.css';
import CardContainer from './CardContainer';
import Header from './Header';

function App() {
  const [difficulty, setDifficulty] = useState('all');
  const [size, setSize] = useState(9); //futureUpdate: change gridSize /difficulty level

  return (
    <div className="App">
      <Header />
      <CardContainer size={size} difficulty={difficulty} />
    </div>
  );
}

export default App;
