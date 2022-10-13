import React, { useState, useEffect } from 'react';
import Card from './Card';
import birdData from './birdData.js';
import uniqid from 'uniqid';

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
  function displayCardsToReview() {
    const displayStack = () => {
      //this is just for the effect of cards stacked on top of each other
      let stack = currentDeck.cardsToReview.length;
      stack > 2 ? (stack = Array(3).fill(0)) : (stack = Array(stack).fill(0));
      let count = 0;
      return stack.map(item => {
        return (
          <div
            className="cardBack"
            key={uniqid()}
            id={count++}
            style={{ marginLeft: `${count / 2}em` }}
          >
            <div className="cardBackText">
              <p>Birds of</p>
              <p>NY</p>
            </div>
          </div>
        );
      });
    };
    return <div className="leftStack">{displayStack()}</div>;
  }
  function displayCompletedCards() {
    return (
      <div className="miniCardStack">
        <div className="smallBirdPhoto"></div>
      </div>
    );
  }
  //interactions - pressing 1 or 2 moves card back into cards to review, 3 moves it to completed, and space or click turns it over
  const displayPrevBird = () => {};
  return (
    <div className="cardContainer">
      {!currentDeck.cardsToReview.length && (
        <div className="miniCardStack"> </div>
      )}
      {displayCardsToReview()}
      <div className="centerCard">
        <Card currentBird={currentDeck.currentCard} />
      </div>
      {!currentDeck.completedCards.length && (
        <div className="miniCardStack"> </div>
      )}
      {/* {displayCompletedCards()} */}
    </div>
  );
};
export default CardContainer;
