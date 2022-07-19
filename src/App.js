import './App.css';
import Card from './Card';
import Scoreboard from './Scoreboard';
function App() {
  const displayCards = () => {};
  return (
    <div className="App">
      <Scoreboard />
      <div className="cardContainer">{displayCards()}</div>
    </div>
  );
}

export default App;
