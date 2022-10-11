import React, { useState } from 'react';

const GameSettings = props => {
  const {
    mode,
    difficulty,
    selectedBirds,
    selectBirds,
    toggleDifficulty,
    toggleMode,
  } = props;

  return (
    <div className="settings">
      <div className="settingsGroup">
        <div className="sidebarHeader">Birds</div>
        <div className="select" id="allBirds">
          <button
            className={'radioButton ' + (selectedBirds.allBirds && 'selected')}
            onClick={selectBirds}
          ></button>
          All Birds
        </div>
        <div className="select" id="birdsOfPrey">
          <button
            className={
              'radioButton ' + (selectedBirds.birdsOfPrey && 'selected')
            }
            onClick={selectBirds}
          ></button>
          Birds of Prey
        </div>
        <div className="select" id="herons">
          <button
            className={'radioButton ' + (selectedBirds.herons && 'selected')}
            onClick={selectBirds}
          ></button>
          Bitterns, Herons, and Ibises
        </div>
        <div className="select" id="waterfowl">
          <button
            className={'radioButton ' + (selectedBirds.waterfowl && 'selected')}
            onClick={selectBirds}
          ></button>
          Waterfowl
        </div>
      </div>{' '}
      <div className="settingsGroup">
        <div className="sidebarHeader">Difficulty</div>
        <div className="select" id="easy">
          <button
            className={'radioButton ' + (difficulty === 'easy' && 'selected')}
            onClick={toggleDifficulty}
          ></button>
          Easy
        </div>
        <div className="select" id="medium">
          <button
            className={'radioButton ' + (difficulty === 'medium' && 'selected')}
            onClick={toggleDifficulty}
          ></button>
          Medium
        </div>
        <div className="select" id="hard">
          <button
            className={'radioButton ' + (difficulty === 'hard' && 'selected')}
            onClick={toggleDifficulty}
          ></button>
          Hard
        </div>
      </div>
      <div className="settingsGroup">
        <div className="sidebarHeader">Mode</div>
        <div className="select" id="learning">
          <button
            className={'radioButton ' + (mode === 'learning' && 'selected')}
            onClick={toggleMode}
          ></button>
          Learning
        </div>
        <div className="select" id="practicing">
          <button
            className={'radioButton ' + (mode === 'practicing' && 'selected')}
            onClick={toggleMode}
          ></button>
          Practicing
        </div>
      </div>
    </div>
  );
};

export default GameSettings;
