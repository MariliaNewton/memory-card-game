function GameOverModal({ onPlayAgain, onGoToMenu, won }) {
  return (
    <div className="modal-gameover">
      <h1>Game Over</h1>
      <h2>{won ? "You won" : "You lost"}</h2>
      <button onClick={onPlayAgain}>Play Again</button>
      <button onClick={onGoToMenu}>Menu</button>
    </div>
  );
}

export default GameOverModal;
