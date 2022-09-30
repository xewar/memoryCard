import React, { useState } from 'react';
import Card from './Card';
import uniqid from 'uniqid';
import birdData from './birdData.js';

const CardContainer = props => {
  const { birdType, size } = props;

  let birdsArray = birdData.birds;
  let randomBirds = [];
  let randomBirdGenerator = () => Math.floor(Math.random() * birdsArray.length);
  for (let i = 0; i <= size; i++) {
    //choose what birds are displayed this round
    randomBirds.push(randomBirdGenerator());
  }

  let thisRoundCount = {};
  const displayCards = birdsArray.map(bird => {
    if (bird.id in randomBirds) {
      return (
        <Card
          key={uniqid()}
          url={`./images/birdsOfCP/${bird.fileExt}2.jpeg`}
          birdType={bird.species}
        />
      );
    }
  });

  return <div className="cardContainer">{displayCards}</div>;
};
export default CardContainer;
