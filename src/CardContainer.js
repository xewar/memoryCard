import React from 'react';
import Card from './Card';
import uniqid from 'uniqid';

const CardContainer = props => {
  const { difficulty } = props;

  let imgArray = Array(25)
    .fill()
    .map((element, index) => index + 3);

  const displayCards = imgArray.map(imgNum => {
    return <Card url={`./images/grid (${imgNum}).png`} key={uniqid()} />;
  });

  return <div className="cardContainer">{displayCards}</div>;
};
export default CardContainer;
