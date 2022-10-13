import React, { useState } from 'react';
import birdData from './birdData.js';

const Card = props => {
  const { currentBird, cardFace } = props;
  const birds = birdData.birds;

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
          ></img>
        </div>
      );
    }
  };

  return <div className="currentCard card">{displayCurrentBird()}</div>;
};

export default Card;
