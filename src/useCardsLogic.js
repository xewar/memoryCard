import React, { useEffect, useState } from 'react';
import uniqid from 'uniqid';
import birdData from './birdData.js';

export function useCardsLogic(props) {
  const { selectedBirds, difficulty, mode, setTotalScore, setScore } = props;
  const [cardFace, setCardFace] = useState('front');
  const [guess, setGuess] = useState('');
  const [currentDeck, setCurrentDeck] = useState({
    cardsToReview: [],
    currentCard: [],
    completedCards: [],
    totalScore: 0,
  });
  const birds = birdData.birds;
  const [showShortcuts, setShowShortcuts] = useState(false);
  const [showScore, setShowScore] = useState(true);
  const [answerRevealed, setAnsweredRevealed] = useState(false);

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
  const addCardsByDifficulty = deck => {
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
        let cardClone = structuredClone(card);
        cardClone.tempFileExt = `${cardClone.fileExt}${randArr[i]}`;
        difficultyAdjustedDeck.push(cardClone);
      }
    }
    return difficultyAdjustedDeck;
  };
  //deck is created in useEffect when user changes game settings
  useEffect(() => {
    let newDeck = createDeck();
    let difficultyAdjustedDeck = addCardsByDifficulty(newDeck);
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

  function displayCardsToReview() {
    const displayStack = () => {
      //this is for the effect of cards stacked on top of each other on the left side
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

  //interactions - pressing 1 or 2 moves card back into cards to review, 3 moves it to completed, and space or click turns it over
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
  const toggleCardFace = () => {
    cardFace === 'front' ? setCardFace('back') : setCardFace('front');
  };

  function moveBackToDeck(e, currentDeck) {
    console.log('this function is running');
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

  function checkGuess() {
    let checkingGuess = guess.replace(/\s/g, '').toLowerCase();
    let checkingBirdName = currentDeck.currentCard.species
      .replace(/\s/g, '')
      .toLowerCase();
    if (checkingGuess === checkingBirdName) {
      //guess is correct
      setScore(prevScore => prevScore + 1); //update score
      moveToCompletedPile();
      setGuess('');
    } else {
      setGuess(`This is a ${currentDeck.currentCard.species}`);
      setAnsweredRevealed(true);
    }
  }

  const updateScores = () => {
    if (mode === 'learning') {
      setScore(prevScore => currentDeck.cardsToReview.length);
      setTotalScore(prevScore => currentDeck.completedCards.length);
    }
    if (mode === 'practicing') {
      setTotalScore(prevScore => currentDeck.totalScore);
    }
  };
  function handleKeydown(e) {
    if (e.key === 'Enter' && mode === 'practicing' && !answerRevealed) {
      //user enters guess of bird name
      checkGuess();
    }
    if (e.key === 'Enter' && mode === 'practicing' && answerRevealed) {
      moveToCompletedPile();
      setCardFace('front');
      setGuess('');
      setAnsweredRevealed(false);
    }
    if (e.code === 'Space' && mode === 'learning') {
      toggleCardFace();
    }
    if (e.key === '3') {
      if (e.defaultPrevented) return; // Exits here if event has been handled
      e.preventDefault();
      moveToCompletedPile(e);
      setCardFace('front');
    }

    if (e.key === '1' || e.key === '2') {
      if (e.defaultPrevented) return; // Exits here if event has been handled
      e.preventDefault();
      moveBackToDeck(e, currentDeck);
      setCardFace('front');
    }
  }
  const handleClick = () => {
    if (mode === 'learning') {
      toggleCardFace();
    }
  };
  useEffect(() => {
    updateScores();
  }, [currentDeck]);
  useEffect(() => {
    document.addEventListener('keydown', handleKeydown);
    if (!currentDeck.currentCard) {
      document.removeEventListener('keydown', handleKeydown);
    }
    return () => document.removeEventListener('keydown', handleKeydown);
  });
  function onDragOver(ev) {
    ev.preventDefault();
  }
  return {
    currentDeck,
    displayCardsToReview,
    handleClick,
    cardFace,
    toggleCardFace,
    guess,
    setGuess,
    displayCompletedCards,
    showShortcuts,
    setShowShortcuts,
    showScore,
    setShowScore,
  };
}
