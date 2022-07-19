import React, { useState } from 'react';

const Card = props => {
  const [clicked, setClicked] = useState(false);
  const { url } = props;
  console.log({ url });
  //   return <div>{url}</div>;
  return <img className="memoryCard" src={url}></img>;
};

export default Card;
