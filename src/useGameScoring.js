import { useEffect, useState } from 'react';
import { useCardsLogic } from './useCardsLogic';

export function useGameScoring(props) {
  const { score, setScore, mode, setTotalScore } = props;
  const { moveToCompletedPile, currentDeck } = useCardsLogic(props);
  const [answerRevealed, setAnswerRevealed] = useState(false);
  const [guess, setGuess] = useState('');

  useEffect(() => {
    updateScores(currentDeck);
  }, [currentDeck]);

  function checkGuess() {
    let checkingGuess = guess.replace(/\s/g, '').toLowerCase();
    let checkingBirdName = currentDeck.currentCard.species
      .replace(/\s/g, '')
      .toLowerCase();
    console.log(checkingBirdName, 'actual bird');
    if (checkingGuess === checkingBirdName) {
      //guess is correct
      setScore(prevScore => prevScore + 1); //update score
      moveToCompletedPile();
      setGuess('');
    } else {
      setGuess(`This is a ${currentDeck.currentCard.species}`);
      setAnswerRevealed(true);
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
  function onDragOver(ev) {
    ev.preventDefault();
  }

  return { guess, setGuess, checkGuess, answerRevealed, setAnswerRevealed };
}
