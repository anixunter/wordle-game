import { useContext } from "react";
import { AppContext } from "../App";

const GameOver = () => {
  const { gameOver, correctWord } = useContext(AppContext);

  return (
    <div className="gameover">
      <h1>{gameOver.guessedWord ? "YOU WON!" : "YOU LOST!"}</h1>
      <h1>Correct Word: {correctWord.toUpperCase()}</h1>
    </div>
  );
};

export default GameOver;
