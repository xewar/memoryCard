const Card = props => {
  const { currentBird, cardFace, mode, guess, setGuess } = props;
  const handleChange = event => {
    setGuess(prevGuess => event.target.value);
  };
  const displayCurrentBird = birdId => {
    if (cardFace === 'back') {
      return (
        <div className="centerCardBack">
          <div className="topInformation">
            <div className="birdSpecies">{currentBird.species}</div>
            <div className="birdStatus">
              {currentBird.frequency}, {currentBird.status}
            </div>
          </div>
          <div className="birdIdentification">{currentBird.identification}</div>
        </div>
      );
    } else if (cardFace === 'front') {
      return (
        <div className="centerCardFront">
          <img
            className="birdPhoto"
            src={`./images/birdsOfCP/${currentBird.tempFileExt}.jpeg`}
            alt={`${currentBird.tempFileExt}`}
          ></img>
          {mode === 'practicing' && (
            <input
              className="guess"
              onChange={handleChange}
              placeholder="Enter your guess..."
              value={guess}
            ></input>
          )}
        </div>
      );
    }
  };

  return <div className="currentCard card">{displayCurrentBird()}</div>;
};

export default Card;
