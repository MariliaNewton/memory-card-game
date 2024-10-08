function GameOverModal({ onPlayAgain, onGoToMenu, won }) {
  return (
    <div className="modal-gameover">
      <h1>Game Over</h1>
      <h2>{won ? "YOU LOST :(" : "YOU WON :)"}</h2>
      <div className="modal-btn-container">
        <button onClick={onPlayAgain}>Play Again</button>
        <button onClick={onGoToMenu}>Menu</button>
      </div>
    </div>
  );
}

export default GameOverModal;
