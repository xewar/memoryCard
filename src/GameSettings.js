import React from 'react';

const GameSettings = () => {
  return (
    <div className="settings">
      <div className="birdSettings">
        <div className="sidebarHeader">Birds</div>
        <div className="select">
          <button className="radioButton selected"></button>
          All Birds
        </div>
        <div className="select">
          <button className="radioButton"></button>
          Birds of Prey
        </div>
        <div className="select">
          <button className="radioButton"></button>
          Bitterns, Herons, and Ibises
        </div>
        <div className="select">
          <button className="radioButton"></button>
          Waterfowl
        </div>
      </div>
    </div>
  );
};

export default GameSettings;
