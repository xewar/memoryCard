import React, { useState } from 'react';
import './App.css';
import CardContainer from './CardContainer';
import Header from './Header';

function App() {
  const [difficulty, setDifficulty] = useState('easy');
  return (
    <div className="App">
      <Header />
      <CardContainer difficulty={difficulty} />
    </div>
  );
}

export default App;
