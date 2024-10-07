import "./App.css";
import GameBoard from "./components/GameBoard";
import Menu from "./components/Menu";
import GameOverModal from "./components/GameOverModal";
import { useState, useEffect } from "react";

function App() {
  const [difficulty, setDifficulty] = useState(null);
  const [gameOver, setGameOver] = useState(false);
  const [score, setScore] = useState(0);
  const [resetCards, setResetCards] = useState(false);

  useEffect(() => {
    score === difficulty && handleGameOver();
  }, [score]);

  function handleDifficultySelection(e) {
    setDifficulty(+e.target.value);
  }

  function handleGameOver() {
    setGameOver(true);
  }

  function handleGoToMenu() {
    setGameOver(false);
    setScore(0);
    setResetCards(true);
    setDifficulty(null);
  }

  function handlePlayAgain() {
    setGameOver(false);
    setScore(0);
    setResetCards(true);
  }

  function handleUpdateScore() {
    setScore((s) => s + 1);
  }

  return (
    <div className="main-container-app">
      {!difficulty ? (
        <Menu onDifficultySelection={handleDifficultySelection} />
      ) : (
        <div className="main">
          <GameBoard
            difficulty={difficulty}
            onGameOver={handleGameOver}
            score={score}
            onUpdateScore={handleUpdateScore}
            onGoToMenu={handleGoToMenu}
            resetCards={resetCards}
            onResetCards={() => setResetCards(false)}
          />
          {gameOver && (
            <GameOverModal
              onGoToMenu={handleGoToMenu}
              onPlayAgain={handlePlayAgain}
              won={difficulty === score}
            />
          )}
        </div>
      )}
    </div>
  );
}

export default App;
