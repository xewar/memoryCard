import React, { useState } from 'react';
import { ReactComponent as PlusSign } from './plus.svg';

const Instructions = () => {
  const [showInstructions, setShowInstructions] = React.useState(false);
  const [showAbout, setShowAbout] = React.useState(false);
  function toggleSidebar(event) {
    if (
      event.target.id === 'instructions' ||
      event.target.parentElement.id === 'instructions'
    ) {
      setShowInstructions(prevState => !prevState);
    } else if (
      event.target.id === 'about' ||
      event.target.parentElement.id === 'about'
    ) {
      setShowAbout(prevState => !prevState);
    }
  }

  return (
    <div className="sidebar">
      <div className="instructions">
        <div className="sidebarDropdown">
          <PlusSign
            className="dropdownButton"
            id="instructions"
            onClick={toggleSidebar}
          />
          <div className="sidebarHeader dropdownHeader">How to Play</div>
        </div>
      </div>
      {showInstructions && (
        <div className="instructionsText">
          Choose the categories of birds you'd like to practice identifying. In
          the medium difficulty level, you'll see more than one photo of each
          species - for example of the male and female for each species. In
          hard, you'll be playing with three photos of each species.
        </div>
      )}
      <div className="about">
        <div className="sidebarDropdown">
          <PlusSign
            className="dropdownButton"
            id="about"
            onClick={toggleSidebar}
          />
          <div className="sidebarHeader dropdownHeader">About</div>
        </div>
      </div>
      {showAbout && (
        <div className="instructionsText">
          This game features birds from{' '}
          <a
            target="_blank"
            href="https://www.nycaudubon.org/rails/active_storage/disk/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaDdDRG9JYTJWNVNTSWhZbWw2YTJ0MGJISTJNV2RrYlRKd2NIbDZhRzFtYlRSNmFYQnRjQVk2QmtWVU9oQmthWE53YjNOcGRHbHZia2tpYjJsdWJHbHVaVHNnWm1sc1pXNWhiV1U5SWtKcGNtUnpYMjltWDBObGJuUnlZV3hmVUdGeWF5MXZabVpwWTJsaGJDNXdaR1lpT3lCbWFXeGxibUZ0WlNvOVZWUkdMVGduSjBKcGNtUnpYMjltWDBObGJuUnlZV3hmVUdGeWF5MXZabVpwWTJsaGJDNXdaR1lHT3daVU9oRmpiMjUwWlc1MFgzUjVjR1ZKSWhSaGNIQnNhV05oZEdsdmJpOXdaR1lHT3daVSIsImV4cCI6IjIwMjItMTAtMTBUMTc6MzA6NTIuOTg3WiIsInB1ciI6ImJsb2Jfa2V5In19--68fdac3f037b12eb9a172ca8967f3e7402ad29a1/Birds_of_Central_Park-official.pdf?content_type=application%2Fpdf&disposition=inline%3B+filename%3D%22Birds_of_Central_Park-official.pdf%22%3B+filename%2A%3DUTF-8%27%27Birds_of_Central_Park-official.pdf"
          >
            the Birds of Central Park
          </a>
          , an annotated checklist from NYC Audobon Society, the Central Park
          Conservancy, and the NYC Parks Department. The photos and descriptions
          of each bird are from{' '}
          <a href="https://ebird.org/" target="_blank">
            eBird
          </a>{' '}
          and{' '}
          <a href="https://merlin.allaboutbirds.org/" target="_blank">
            Merlin
          </a>
          , two projects from Cornell's Orinthology Lab.
        </div>
      )}
    </div>
  );
};

export default Instructions;
