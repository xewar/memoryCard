import React, { useState } from 'react';

const Card = props => {
  const { url, birdType } = props;
  return (
    <img
      onClick={props.updateScore}
      className={`memoryCard ${birdType}`}
      src={url}
    ></img>
  );
};

export default Card;
