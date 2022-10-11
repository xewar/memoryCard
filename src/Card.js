import React, { useState } from 'react';

const Card = props => {
  const { url, birdType } = props;
  return (
    <div className="currentCard card front">
      <div className="birdPhoto"></div>
    </div>
  );
};

export default Card;
