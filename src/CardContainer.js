import { useCardsLogic } from './useCardsLogic';
import { useGameScoring } from './useGameScoring';
import Card from './Card';
import React, { useState, useEffect } from 'react';

const CardContainer = props => {
  const { guess, setGuess, checkGuess, answerRevealed, setAnswerRevealed } =
    useGameScoring(props);
  const {
    currentDeck,
    displayCardsToReview,
    displayCompletedCards,
    moveToCompletedPile,
    moveBackToDeck,
  } = useCardsLogic(props);
  const { mode, score, totalScore } = props;
  const [showShortcuts, setShowShortcuts] = useState(false);
  const [showScore, setShowScore] = useState(true);
  const [cardFace, setCardFace] = useState('front');
  const toggleCardFace = () => {
    cardFace === 'front' ? setCardFace('back') : setCardFace('front');
  };

  useEffect(() => {
    if (mode === 'practicing') {
      setCardFace('front');
    }
  }, [mode]);

  //keybindings - pressing 1 or 2 moves card back into cards to review, 3 moves it to completed, and space or click turns it over
  function handleKeydown(e) {
    if (e.key === 'Enter' && mode === 'practicing' && !answerRevealed) {
      //user enters guess of bird name
      console.log(
        'in cardContainer, checking guess',
        currentDeck.currentCard.species
      );
      checkGuess();
    }
    if (e.key === 'Enter' && mode === 'practicing' && answerRevealed) {
      moveToCompletedPile();
      setCardFace('front');
      setGuess('');
      setAnswerRevealed(false);
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
    document.addEventListener('keydown', handleKeydown);
    if (!currentDeck.currentCard) {
      document.removeEventListener('keydown', handleKeydown);
    }
    return () => document.removeEventListener('keydown', handleKeydown);
  });
  return (
    <div className="cardContainer" onDragOver={e => this.onDragOver(e)}>
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
