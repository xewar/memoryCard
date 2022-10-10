import React, { useState, useEffect } from 'react';
import Card from './Card';
import uniqid from 'uniqid';
import birdData from './birdData.js';

const CardContainer = props => {
  const displayCurrentBird = () => {};
  const displayPrevBird = () => {};
  return (
    <div className="cardContainer">
      <div className="leftCardStack">
        <div className="stackedCards">
          <div className="cardBack card bottom">
            <div class="cardText">Birds of NY</div>
          </div>
          <div className="cardBack card middle">
            <div class="cardText">Birds of NY</div>
          </div>
          <div className="cardBack card top">
            <div class="cardText">Birds of NY</div>
          </div>
        </div>
      </div>

      <div className="currentCard card front">
        <div class="birdPhoto">{displayCurrentBird}</div>
      </div>
      <div className="rightCardStack card">
        <div class="smallBirdPhoto">{displayPrevBird}</div>
      </div>
    </div>
  );
};
export default CardContainer;
