import React, { useState } from 'react';
import Card from './Card';
import uniqid from 'uniqid';

const CardContainer = props => {
  const { difficulty, size, color } = props;

  let imgArray = Array(size)
    .fill()
    .map((element, index) => index + 3);

  const displayCards = imgArray.map(imgNum => {
    return (
      <Card
        difficulty={difficulty}
        url={`./images/${color}/grid (${imgNum}).png`}
        key={uniqid()}
      />
    );
  });

  return (
    <div className={`cardContainer ${difficulty}Container`}>{displayCards}</div>
  );
};
export default CardContainer;
