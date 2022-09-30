import React, { useState } from 'react';

const Card = props => {
  const [clicked, setClicked] = useState(false);
  const { url, birdType } = props;
  return (
    <img
      onClick={props.changeBirds}
      className={`memoryCard ${birdType}`}
      src={url}
    ></img>
  );
};

export default Card;
