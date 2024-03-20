import "./App.css";
import { startingBoard, generateWord } from "./helpers/startingBoard";
import { useState, useEffect, createContext } from "react";
import Board from "./components/Board";
import Keyboard from "./components/Keyboard";
import GameOver from "./components/GameOver";

export const AppContext = createContext();

function App() {
  const [board, setBoard] = useState(startingBoard);
  const [correctWord, setCorrectWord] = useState("");
  const [disabledLetters, setDisabledLetters] = useState([]);
  const [gameOver, setGameOver] = useState({
    gameOver: false,
    guessedWord: false,
  });
  const [currAttempt, setCurrAttempt] = useState({ attempt: 0, letterPos: 0 });

  const resetGame = () => {
    setBoard([
      ["", "", "", "", ""],
      ["", "", "", "", ""],
      ["", "", "", "", ""],
      ["", "", "", "", ""],
      ["", "", "", "", ""],
      ["", "", "", "", ""],
    ]); // had to manually add these blank matrix, as setBoard(staringBoard) isn't working
    setCurrAttempt({ attempt: 0, letterPos: 0 });
    setGameOver({ gameOver: false, guessedWord: false });
    setDisabledLetters([]);
    generateWord().then((randomWord) => setCorrectWord(randomWord));
  };

  useEffect(() => {
    //generateWord(), as this function is async, it returns promise.. thats why to get the data, had to use .then()
    generateWord().then((randomWord) => {
      setCorrectWord(randomWord);
      //console.log(randomWord); {uncomment this to see the answer on console}
    });
  }, []);

  const { attempt, letterPos } = currAttempt;

  const onSelectLetter = (keyVal) => {
    if (letterPos > 4 || attempt > 5) return; // had to put 'attempt > 5' check.. cuz it was tweaking
    const newBoard = [...board];
    newBoard[attempt][letterPos] = keyVal;
    setBoard(newBoard);
    setCurrAttempt((prev) => ({ ...prev, letterPos: letterPos + 1 }));
  };

  const onEnter = () => {
    if (letterPos !== 5) return;

    let currWord = ""; // to get the row into word
    for (let i = 0; i < 5; i++) currWord = currWord + board[attempt][i];

    setCurrAttempt({ attempt: attempt + 1, letterPos: 0 });

    if (currWord.toLowerCase() === correctWord) {
      setGameOver({ gameOver: true, guessedWord: true });
    } //gameover check winning

    if (attempt === 5) {
      setGameOver({ gameOver: true, guessedWord: false });
    } //gameover check losing
  };

  const onDelete = () => {
    if (letterPos === 0) return;
    const newBoard = [...board];
    newBoard[attempt][letterPos - 1] = "";
    setBoard(newBoard);
    setCurrAttempt((prev) => ({ ...prev, letterPos: letterPos - 1 }));
  };

  return (
    <div className="app">
      <nav>
        <h1>Worlde Game</h1>
      </nav>
      <AppContext.Provider
        value={{
          board,
          setBoard,
          currAttempt,
          setCurrAttempt,
          onSelectLetter,
          onEnter,
          onDelete,
          correctWord,
          disabledLetters,
          setDisabledLetters,
          gameOver,
          setGameOver,
          resetGame,
        }}
      >
        <div className="game">
          <Board />
          {gameOver.gameOver ? <GameOver /> : <Keyboard />}
        </div>
      </AppContext.Provider>
    </div>
  );
}

export default App;
