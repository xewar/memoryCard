import React, { useState } from 'react';
import './App.css';
import CardContainer from './CardContainer';
import Header from './Header';

function App() {
  const [difficulty, setDifficulty] = useState('easy');
  const [size, setSize] = useState(9);
  const [color, setColor] = useState('single');

  return (
    <div className="App">
      <Header />
      <CardContainer color={color} size={size} difficulty={difficulty} />
    </div>
  );
}

export default App;
