import React, { useEffect, useState } from 'react';
import uniqid from 'uniqid';
import birdData from './birdData.js';

export function useCardsLogic(props) {
  const { selectedBirds, difficulty, mode } = props;
  const [currentDeck, setCurrentDeck] = useState({
    cardsToReview: [],
    currentCard: [],
    completedCards: [],
    totalScore: 0,
  });
  const birds = birdData.birds;

  //a new deck is created each time the user changes the game settings
  useEffect(() => {
    let newDeck = createDeck();
    let difficultyAdjustedDeck = addCardsByDifficulty(newDeck, difficulty);
    let shuffledDeck = shuffleDeck(difficultyAdjustedDeck);
    setCurrentDeck(prevDeck => {
      return {
        cardsToReview: shuffledDeck,
        currentCard: shuffledDeck.shift(),
        completedCards: [],
        totalScore: shuffledDeck.length + 1,
      };
    });
  }, [difficulty, mode, selectedBirds]);

  /* make a new deck of the selected birds each time the user selects a different group
   of birds to play with */
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
  //moves card to pile on the right
  function moveToCompletedPile() {
    setCurrentDeck(prevDeck => {
      let tempCompletedCards = prevDeck.completedCards;
      tempCompletedCards.unshift(prevDeck.currentCard);
      return {
        ...prevDeck,
        currentCard: prevDeck.cardsToReview.shift(),
        completedCards: tempCompletedCards,
      };
    });
  }

  //moves card to pile on the left
  function moveBackToDeck(e, currentDeck) {
    let deckLength = currentDeck.cardsToReview.length;
    let midpoint = Math.round(deckLength / 2);
    let newCardsToReview = currentDeck.cardsToReview;
    let newPlace;
    if (e.key === '1' || e.key === 'Enter') {
      //'hard' shifts card towards the back of deck
      newPlace = Math.floor(Math.random() * (deckLength - midpoint)) + midpoint;
    }
    if (e.key === '2') {
      //'medium' shifts card towards the front of deck
      newPlace = Math.floor(Math.random() * midpoint);
    }
    newCardsToReview.splice(newPlace, 0, currentDeck.currentCard);
    setCurrentDeck(prevDeck => {
      return {
        ...prevDeck,
        currentCard: prevDeck.cardsToReview.shift(),
        cardsToReview: newCardsToReview,
      };
    });
  }

  //this is for the effect of cards stacked on top of each other on the left side
  function displayCardsToReview() {
    const displayStack = () => {
      let stack = currentDeck.cardsToReview.length;
      stack > 2 ? (stack = Array(3).fill(0)) : (stack = Array(stack).fill(0));
      let count = 0;
      return stack.map(item => {
        return (
          <div
            className="leftCardBack"
            key={uniqid()}
            id={count++}
            style={{ marginLeft: `${count / 2}em` }} //offsetting the cards from each other
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
  //display cards on the right
  function displayCompletedCards() {
    let currentBird = currentDeck.completedCards[0];
    return (
      <div className="miniCard">
        <img
          className="miniBirdPhoto"
          src={`./images/birdsOfCP/${currentBird.tempFileExt}.jpeg`}
        ></img>
        <div className="smallBirdName">
          {currentDeck.completedCards[0].species}
        </div>
      </div>
    );
  }

  return {
    currentDeck,
    displayCardsToReview,
    displayCompletedCards,
    moveToCompletedPile,
    moveBackToDeck,
  };
}

// HELPER FUNCTIONS
/* This function randomizes one, two, or three pictures of the bird for each difficulty level.Each bird has three photos, and each time the user changes the difficulty, they'll see a different set
of photos. For example, with easy they'll see one photo of each bird, but the exact selection of photos will change each time and be randomized 
With medium they'll see two random photos of each bird each round */
function addCardsByDifficulty(deck, difficulty) {
  let chooseRandomNumbers = () => {
    let num;
    //first, the game difficulty level is translated into a number
    difficulty === 'easy'
      ? (num = 1)
      : difficulty === 'medium'
      ? (num = 2)
      : (num = 3);
    //then, random numbers are generated - these will be the suffixes of the bird photos
    let randArr = [];
    while (randArr.length < num) {
      let rand = Math.floor(Math.random() * 3 + 1);
      if (randArr.indexOf(rand) === -1) {
        randArr.push(rand);
      }
    }
    return [randArr, num];
  };
  //the deck is created below, with a random selection of photos appearing for each bird given the difficulty level.
  let difficultyAdjustedDeck = [];
  for (let card of deck) {
    let [randArr, num] = chooseRandomNumbers();
    for (let i = 0; i < num; i++) {
      //creating a deep copy
      let cardClone = structuredClone(card);
      cardClone.tempFileExt = `${cardClone.fileExt}${randArr[i]}`;
      difficultyAdjustedDeck.push(cardClone);
    }
  }
  return difficultyAdjustedDeck;
}

function shuffleDeck(deck) {
  for (let i = deck.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [deck[i], deck[j]] = [deck[j], deck[i]];
  }
  return deck;
}
