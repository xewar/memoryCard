import React, { useState } from 'react';
import { ReactComponent as PlusSign } from './plus.svg';

const Instructions = () => {
  const [showInstructions, setShowInstructions] = React.useState(false);
  function toggleInstructions() {
    setShowInstructions(prevState => !prevState);
  }

  return (
    <div className="sidebar">
      <div className="instructions">
        <div className="sidebarDropdown">
          <PlusSign className="dropdownButton" onClick={toggleInstructions} />
          <div className="sidebarHeader">How to Play</div>
        </div>
      </div>
      {showInstructions && (
        <div className="instructionsText">
          This is a memory card came to help you learn to identify common birds
          that live or pass through Central Park, NYC. Choose the categories of
          birds you'd like to practice (or practice with all birds), and don't
          pick the same bird twice. In the medium difficulty level, you'll see
          more than one photo of each species - for example of the male and
          female for each species - and you have to make sure not to select
          either. In hard, you'll be playing with three photos of each species.
        </div>
      )}
    </div>
  );
};

export default Instructions;
