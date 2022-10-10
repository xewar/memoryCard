import React, { useState, useEffect } from 'react';
import Card from './Card';
import uniqid from 'uniqid';
import birdData from './birdData.js';

const CardContainer = props => {
  const { birdType, size, score } = props;
  const [randomBirdState, setRandomBirdState] = useState([]);

  useEffect(() => {
    changeBirds();
  }, [score]);

  let birdsArray = birdData.birds;
  let changeBirds = () => {
    let randomBirds = [];
    let randomBirdGenerator = () =>
      Math.floor(Math.random() * birdsArray.length);
    while (randomBirds.length < 9) {
      let newBirdId = randomBirdGenerator();
      if (randomBirds.indexOf(newBirdId) == -1) randomBirds.push(newBirdId);
    }
    setRandomBirdState(prevState => randomBirds);
  };

  const displayCards = () => {
    return birdsArray.map(bird => {
      if (randomBirdState.includes(bird.id)) {
        return (
          <Card
            key={uniqid()}
            url={`./images/birdsOfCP/${bird.fileExt}1.jpeg`}
            birdType={bird.species}
            updateScore={props.updateScore}
          />
        );
      }
    });
  };

  return (
    <div className="cardContainer">
      <div className="leftCardStack"></div>
      <div className="currentCards"></div>
      <div className="rightCardStack"></div>
    </div>
  );
};
export default CardContainer;
