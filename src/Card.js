import React, { useState } from 'react';

const Card = props => {
  const [clicked, setClicked] = useState(false);
  const { url, difficulty } = props;

  return <img className={`memoryCard ${difficulty}`} src={url}></img>;
};

export default Card;
