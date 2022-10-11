import React, { useState, useEffect } from 'react';
import Card from './Card';
import uniqid from 'uniqid';
import birdData from './birdData.js';

const CardContainer = props => {
  const [nextCard, setNextCard] = useState(false);
  const displayCurrentBird = () => {};
  const displayPrevBird = () => {};
  return (
    <div className="cardContainer">
      <div className="leftCardStack">
        <div className="stackedCards">
          <div className="cardBack card bottom">
            <div className="cardText">Birds of NY</div>
          </div>
          <div className="cardBack card middle">
            <div className="cardText">Birds of NY</div>
          </div>
          <div className="cardBack card top">
            <div className="cardText">Birds of NY</div>
          </div>
        </div>
      </div>
      <div className="currentCard card front">
        <div className="birdPhoto">{displayCurrentBird()}</div>
      </div>
      <div></div>{' '}
      {nextCard && (
        <div className="rightCardStack card">
          <div className="smallBirdPhoto">{displayPrevBird()}</div>
        </div>
      )}
    </div>
  );
};
export default CardContainer;
