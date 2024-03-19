import { useContext, useEffect } from "react";
import { AppContext } from "../App";

const Letter = ({ attemptVal, letterPosVal }) => {
  const { board, correctWord, currAttempt, setDisabledLetters } =
    useContext(AppContext);
  const letter = board[attemptVal][letterPosVal];

  const correct =
    correctWord.toLowerCase()[letterPosVal] === letter.toLowerCase();
  const almost =
    !correct &&
    letter !== "" &&
    correctWord.toLowerCase().includes(letter.toLowerCase());

  const letterState =
    currAttempt.attempt > attemptVal &&
    (correct ? "correct" : almost ? "almost" : "error");

  useEffect(() => {
    if (letter !== "" && !correct && !almost) {
      setDisabledLetters((prev) => [...prev, letter]);
    }
  }, [currAttempt.attempt]);

  return (
    <div className="letter" id={letterState}>
      {letter}
    </div>
  );
};

export default Letter;
