import React, { useState } from 'react';
import birdData from './birdData.js';

const Card = props => {
  const [cardFace, setCardFace] = useState('front');
  const { fileExt, birdId } = props;
  const birds = birdData.birds;
  document.addEventListener('keyup', event => {
    if (event.code === 'Space') {
      toggleCardFace();
    }
  });

  const displayCurrentBird = birdId => {
    if (cardFace === 'back') {
      return <div className="birdName">Red-Tailed Hawk</div>;
    }
  };
  const toggleCardFace = () => {
    cardFace === 'front' ? setCardFace('back') : setCardFace('front');
  };
  return (
    <div className="currentCard card front" onClick={toggleCardFace}>
      {cardFace === 'front' && (
        <img
          className="birdPhoto"
          src={`./images/birdsOfCP/${fileExt}.jpeg`}
        ></img>
      )}
      {displayCurrentBird()}
    </div>
  );
};

export default Card;
