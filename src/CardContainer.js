import React, { useState, useEffect } from 'react';
import Card from './Card';
import uniqid from 'uniqid';
import birdData from './birdData.js';

const CardContainer = props => {
  const { birdType, size } = props;
  // const [randomBirdState, setRandomBirdState] = useState([
  //   1, 2, 3, 4, 5, 6, 7, 8, 9,
  // ]);
  const [randomBirdState, setRandomBirdState] = useState([]);
  const [score, setScore] = useState(0);

  useEffect(() => {
    console.log('here');
  }, [score]);

  let birdsArray = birdData.birds;
  let changeBirds = () => {
    // let randomBirds = [];
    // let randomBirdGenerator = () =>
    //   Math.floor(Math.random() * birdsArray.length);
    // for (let i = 0; i <= randomBirdState.length; i++) {
    //   randomBirds.push(randomBirdGenerator());
    // }
    // console.log(randomBirds.length);
    // setRandomBirdState(prevState => randomBirds);
  };
  const displayCards = () => {
    return birdsArray.map(bird => {
      if (randomBirdState.includes(bird.id)) {
        return (
          <Card
            key={uniqid()}
            url={`./images/birdsOfCP/${bird.fileExt}1.jpeg`}
            birdType={bird.species}
            changeBirds={changeBirds}
          />
        );
      }
    });
  };

  return <div className="cardContainer">{displayCards()}</div>;
};
export default CardContainer;
