import React from 'react';

const GameSettings = () => {
  return (
    <div className="settings">
      <div className="settingsGroup">
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
      </div>{' '}
      <div className="settingsGroup">
        <div className="sidebarHeader">Difficulty</div>
        <div className="select">
          <button className="radioButton selected"></button>
          Easy
        </div>
        <div className="select">
          <button className="radioButton"></button>
          Medium
        </div>
        <div className="select">
          <button className="radioButton"></button>
          Hard
        </div>
      </div>
      <div className="settingsGroup">
        <div className="sidebarHeader">Mode</div>
        <div className="select">
          <button className="radioButton selected"></button>
          Learning
        </div>
        <div className="select">
          <button className="radioButton"></button>
          Practice
        </div>
      </div>
    </div>
  );
};

export default GameSettings;
