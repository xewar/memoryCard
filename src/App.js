import React, { useState } from 'react';
import './css/App.css';
import CardContainer from './CardContainer';
import Header from './Header';

function App() {
  const [difficulty, setDifficulty] = useState('easy');
  const [size, setSize] = useState(9);
  const [color, setColor] = useState('single');

  // if (difficulty === 'hard') {
  //   setSize(25);
  // } else if (difficulty === 'medium') {
  //   setSize(16);
  // } else {
  //   setSize(9);
  // }
  return (
    <div className="App">
      <Header />
      <CardContainer color={color} size={size} difficulty={difficulty} />
    </div>
  );
}

export default App;
