import { useCardsLogic } from './useCardsLogic';
import Card from './Card';
import React, { useState, useEffect } from 'react';

const CardContainer = props => {
  const { score, setScore, mode, setTotalScore, totalScore } = props;

  const [answerRevealed, setAnswerRevealed] = useState(false);
  const [guess, setGuess] = useState('');
  const {
    currentDeck,
    displayCardsToReview,
    displayCompletedCards,
    moveToCompletedPile,
    moveBackToDeck,
  } = useCardsLogic(props);
  const [showShortcuts, setShowShortcuts] = useState(false);
  const [showScore, setShowScore] = useState(true);
  const [cardFace, setCardFace] = useState('front');

  useEffect(cardFace => {
    updateScores(currentDeck);
  });
  //after a user inputs their guess, checks it against the actual bird name
  function checkGuess() {
    let checkingGuess = guess.replace(/\s/g, '').toLowerCase();
    let checkingBirdName = currentDeck.currentCard.species //actual name
      .replace(/\s/g, '')
      .toLowerCase();
    if (checkingGuess === checkingBirdName) {
      //guess is correct
      setScore(prevScore => prevScore + 1); //update score
      moveToCompletedPile();
      setGuess('');
      setAnswerRevealed(false);
    } else {
      setGuess(`This is a ${currentDeck.currentCard.species}`);
      setAnswerRevealed(true);
    }
  }
  /* if you're in learning mode, the score shows how many cards you have left
if you're in practicing mode, the score shows how many birds you've correctly identified
*/
  const updateScores = () => {
    if (mode === 'learning') {
      setScore(prevScore => currentDeck.cardsToReview.length);
      setTotalScore(prevScore => currentDeck.completedCards.length);
    }
    if (mode === 'practicing') {
      setTotalScore(prevScore => currentDeck.totalScore);
    }
  };

  //updating card face
  const toggleCardFace = () => {
    cardFace === 'front' ? setCardFace('back') : setCardFace('front');
  };
  //card also reverts to front-facing when you switch from learning to practicing mode
  useEffect(() => {
    if (mode === 'practicing') {
      setCardFace('front');
    }
  }, [mode]);

  /* keybindings - pressing 1 or 2 moves card back into cards to review
  3 moves it to completed, and space or click turns it over*/
  function handleKeydown(e) {
    if (mode === 'practicing') {
      if (e.key === 'Enter') {
        if (!answerRevealed) {
          checkGuess();
        }
        if (answerRevealed) {
          moveToCompletedPile(e);
          setGuess('');
          setAnswerRevealed(false);
        }
      }
      if (e.code === 'Space') {
        e.preventDefault();
      }
    }
    if (e.code === 'Space' && mode === 'learning') {
      e.preventDefault();
      toggleCardFace();
    }
    if (e.key === '3') {
      if (e.defaultPrevented) return; // Exits here if event has been handled
      e.preventDefault();
      moveToCompletedPile(e);
      setCardFace('front');
      checkGuess();
      setGuess('');
      setAnswerRevealed(false);
    }

    if (e.key === '1' || e.key === '2') {
      if (e.defaultPrevented) return; // Exits here if event has been handled
      e.preventDefault();
      moveBackToDeck(e, currentDeck);
      setCardFace('front');
      setGuess('');
      setAnswerRevealed(false);
    }
  }
  //only switching from front to back in learning mode
  const handleClick = () => {
    if (mode === 'learning') {
      toggleCardFace();
    }
  };
  //adding keydowns to current card as it changes
  useEffect(() => {
    document.addEventListener('keydown', handleKeydown);
    if (!currentDeck.currentCard) {
      document.removeEventListener('keydown', handleKeydown);
    }
    return () => document.removeEventListener('keydown', handleKeydown);
  });
  return (
    /* on the left side, returns either an image of the deck or an empty deck
    in the middle display the current card, and on the right display the completed card -
    the most recently reviewed card that the player is comfortable with */
    <div className="cardContainer">
      {currentDeck.cardsToReview.length ? (
        displayCardsToReview()
      ) : (
        <div className="miniCardStack"> </div>
      )}
      <div className="centerCard" onClick={handleClick} draggable id="current">
        {currentDeck.currentCard ? (
          <Card
            currentBird={currentDeck.currentCard}
            cardFace={cardFace}
            toggleCardFace={toggleCardFace}
            mode={mode}
            guess={guess}
            setGuess={setGuess}
          />
        ) : (
          <div className="emptyCurrentCard">Good job!</div>
        )}
      </div>
      <div className="rightSide">
        {currentDeck.completedCards.length ? (
          displayCompletedCards()
        ) : (
          <div className="miniCardStack"></div>
        )}
      </div>
      <div
        className="keyboardShortcuts grow"
        onClick={() => setShowShortcuts(prevState => !prevState)}
      >
        {' '}
        <div className="keyboardShortcutsHeader">Keyboard Shortcuts</div>
        {showShortcuts && (
          <div className="keyboardShortcutsBody">
            <div className="shortcut">
              <div className="shortcutKey">click or space</div>
              <div className="shortcutName">flip card</div>
            </div>
            <div className="shortcut">
              <div className="shortcutKey">1</div>
              <div className="shortcutName">hard</div>
            </div>
            <div className="shortcut">
              <div className="shortcutKey">2</div>
              <div className="shortcutName">medium</div>
            </div>
            <div className="shortcut">
              <div className="shortcutKey">3</div>
              <div className="shortcutName">easy</div>
            </div>
          </div>
        )}
      </div>
      <div
        className="scoreboard grow"
        onClick={() => setShowScore(prevState => !prevState)}
      >
        {!showScore && <div className="hiddenTotals"></div>}
        {showScore && (
          <div className="totals">
            <div className="score userScore">{score}</div>
            <div className="score totalscore">{totalScore}</div>
          </div>
        )}
      </div>
    </div>
  );
};
export default CardContainer;
