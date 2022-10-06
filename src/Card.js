import React, { useState } from 'react';

const Card = props => {
  const { url, birdType } = props;
  return (
    <div className="birdCard">
      <img
        onClick={event => {
          props.updateScore();
        }}
        className={`memoryCard ${birdType}`}
        src={url}
      ></img>
    </div>
  );
};

export default Card;
