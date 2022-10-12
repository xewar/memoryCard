import React, { useState, useEffect } from 'react';
import Card from './Card';
import birdData from './birdData.js';

const CardContainer = props => {
  const { selectedBirds, difficulty, mode } = props;
  const [nextCard, setNextCard] = useState(false);
  const [currentDeck, setCurrentDeck] = useState({
    cardsToReview: [],
    currentCard: [],
    completedCards: [],
  });
  const birds = birdData.birds;

  //make a new deck of the selected birds
  const createDeck = () => {
    let deck = [];
    if (selectedBirds.allBirds) {
      for (let bird of birds) {
        deck.push(bird);
      }
    } else {
      for (let bird of birds) {
        if (selectedBirds[bird.category]) {
          deck.push(bird);
        }
      }
    }
    return deck;
  };
  const shuffleDeck = deck => {
    for (let i = deck.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [deck[i], deck[j]] = [deck[j], deck[i]];
    }
    return deck;
  };
  //This function randomizes one, two, or three pictures of the bird for each difficulty level -
  //each bird has three photos, and each time the user changes the difficulty, they'll see a different set
  //of photos. For example, with easy they'll see one photo of each bird, but the exact selection of photos will change each time/be randomized
  const randomizeCardsByDifficulty = deck => {
    let chooseRandomNumbers = () => {
      let num;
      difficulty === 'easy'
        ? (num = 1)
        : difficulty === 'medium'
        ? (num = 2)
        : (num = 3);
      let randArr = [];
      while (randArr.length < num) {
        let rand = Math.floor(Math.random() * 3 + 1);
        if (randArr.indexOf(rand) === -1) {
          randArr.push(rand);
        }
      }
      return [randArr, num];
    };
    let difficultyAdjustedDeck = [];
    for (let card of deck) {
      let [randArr, num] = chooseRandomNumbers();
      for (let i = 0; i < num; i++) {
        card.tempFileExt = `${card.fileExt}${randArr[i]}`;
        difficultyAdjustedDeck.push(card);
      }
    }
    return difficultyAdjustedDeck;
  };
  useEffect(() => {
    let newDeck = createDeck();
    newDeck = randomizeCardsByDifficulty(newDeck);
    newDeck = shuffleDeck(newDeck);

    setCurrentDeck(prevDeck => {
      return {
        cardsToReview: newDeck,
        currentCard: newDeck.shift(),
        completedCards: [],
      };
    });
  }, [difficulty, mode, selectedBirds]);
  console.log(currentDeck);

  //interactions - pressing 1 or 2 moves card back into cards to review, 3 moves it to completed, and space or click turns it over
  const displayPrevBird = () => {};
  return (
    <div className="cardContainer">
      <div className="miniCardStack leftSide">
        <div className="cardBack card bottom">
          <div className="cardText">Birds of NY</div>
        </div>
        <div className="cardBack card middle">
          <div className="cardText">Birds of NY</div>
        </div>
        <div className="cardBack card top">
          <div className="cardText">Birds of NY</div>
        </div>
      </div>
      <div className="centerCard">
        <Card currentBird={currentDeck.currentCard} />
      </div>
      <div></div>
      <div className="miniCardStack rightSide empty                                          ">
        <div className="smallBirdPhoto">{displayPrevBird()}</div>
      </div>
    </div>
  );
};
export default CardContainer;
