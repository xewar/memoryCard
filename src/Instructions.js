import React from "react";
import { ReactComponent as PlusSign } from "./plus.svg";

//the instructions sidebar
const Instructions = () => {
  const [showInstructions, setShowInstructions] = React.useState(false);
  const [showAbout, setShowAbout] = React.useState(false);
  function toggleSidebar(event) {
    if (
      event.target.id === "instructions" ||
      event.target.parentElement.id === "instructions"
    ) {
      setShowInstructions((prevState) => !prevState);
    } else if (
      event.target.id === "about" ||
      event.target.parentElement.id === "about"
    ) {
      setShowAbout((prevState) => !prevState);
    }
  }

  return (
    <div className="sidebar">
      <div className="instructions" onClick={toggleSidebar}>
        <div className="sidebarDropdown" id="instructions">
          <PlusSign className="dropdownButton" />
          <div className="sidebarHeader dropdownHeader">How to Play</div>
        </div>
      </div>
      {showInstructions && (
        <div className="instructionsText">
          <div className="instructionsPara">
            In this game, use flashcards to learn to identify common birds in
            NYC. The game is inspired by spaced-repetition software like{" "}
            <a
              href="https://apps.ankiweb.net/"
              target="_blank"
              rel="noreferrer"
            >
              Anki
            </a>{" "}
            , and relies on similar keyboard shortcuts.
          </div>
          <div className="instructionsPara">
            To start, choose the categories of birds you'd like to practice
            identifying and your difficulty level. In the medium difficulty
            level, you'll see more than one photo of each species - for example
            of the male and female for each species. In hard, you'll be playing
            with three photos of each species.
          </div>
          <div className="instructionsPara">
            Press space to flip the cards. Press 1 or 2 to send cards back to
            the deck if you want to keep practicing with them, and press 3 for
            the birds that you can comfortably identify.
          </div>
        </div>
      )}
      <div className="about" onClick={toggleSidebar}>
        <div className="sidebarDropdown" id="about">
          <PlusSign className="dropdownButton" />
          <div className="sidebarHeader dropdownHeader">About</div>
        </div>
      </div>
      {showAbout && (
        <div className="instructionsText">
          This game features birds from{" "}
          <a
            target="_blank"
            rel="noreferrer"
            href="https://www.nycaudubon.org/rails/active_storage/disk/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaDdDRG9JYTJWNVNTSWhZbWw2YTJ0MGJISTJNV2RrYlRKd2NIbDZhRzFtYlRSNmFYQnRjQVk2QmtWVU9oQmthWE53YjNOcGRHbHZia2tpYjJsdWJHbHVaVHNnWm1sc1pXNWhiV1U5SWtKcGNtUnpYMjltWDBObGJuUnlZV3hmVUdGeWF5MXZabVpwWTJsaGJDNXdaR1lpT3lCbWFXeGxibUZ0WlNvOVZWUkdMVGduSjBKcGNtUnpYMjltWDBObGJuUnlZV3hmVUdGeWF5MXZabVpwWTJsaGJDNXdaR1lHT3daVU9oRmpiMjUwWlc1MFgzUjVjR1ZKSWhSaGNIQnNhV05oZEdsdmJpOXdaR1lHT3daVSIsImV4cCI6IjIwMjItMTAtMTNUMTQ6NDE6MzEuOTkxWiIsInB1ciI6ImJsb2Jfa2V5In19--86f07ee0b7eeae4feaaafb2a133315d5f33a074e/Birds_of_Central_Park-official.pdf"
          >
            the Birds of Central Park
          </a>
          , an annotated checklist from NYC Audobon Society, the Central Park
          Conservancy, and the NYC Parks Department. The photos and descriptions
          of each bird are from{" "}
          <a href="https://ebird.org/" target="_blank" rel="noreferrer">
            eBird
          </a>{" "}
          and{" "}
          <a
            href="https://merlin.allaboutbirds.org/"
            target="_blank"
            rel="noreferrer"
          >
            Merlin
          </a>
          , two projects from the Cornell Lab of Ornithology.
        </div>
      )}
    </div>
  );
};

export default Instructions;
