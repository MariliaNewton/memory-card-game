import { useState, useEffect } from "react";
import Card from "./Card";
import axios from "axios";

function GameBoard({
  difficulty,
  onGameOver,
  score,
  onUpdateScore,
  onGoToMenu,
  resetCards,
  onResetCards,
}) {
  const [cards, setCards] = useState([]);
  const [highScore, setHighScore] = useState(0);
  const [selectedCards, setSelectedCards] = useState([]);
  const [flip, setFlip] = useState(false);

  useEffect(() => {
    fetchMovies();
  }, []);

  useEffect(() => {
    score > highScore && setHighScore(score);
  }, [score]);

  useEffect(() => {
    if (resetCards) {
      setSelectedCards([]);
      onResetCards();
    }
  }, [resetCards]);

  useEffect(() => {
    if (selectedCards.length > 0) {
      setTimeout(() => {
        setFlip(false);
      }, 1000);
    }
  }, [selectedCards]);

  async function fetchMovies() {
    try {
      const res = await axios.get("https://ghibliapi.vercel.app/films");
      const movies = res.data.slice(0, difficulty).map((movie) => ({
        id: movie.id,
        title: movie.title,
        url: movie.image,
      }));
      setCards(movies);
    } catch (error) {
      console.error(`Error fetching movies: ${error}`);
    }
  }

  function shuffleCards() {
    const shuffled = [...cards];
    for (let i = shuffled.length - 1; i >= 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }
    setCards(shuffled);
  }

  function handleCardClick(card) {
    if (selectedCards.includes(card)) {
      onGameOver();
      return;
    }
    setFlip(true);

    setSelectedCards((sc) => [...sc, card]);
    shuffleCards();
    onUpdateScore();
  }

  return (
    <div className="game-board">
      <header>
        <h1>Score: {score}</h1>
        <h1>High score: {highScore}</h1>
        <button onClick={onGoToMenu}>Quit</button>
      </header>
      <div className={`cards-container ${flip ? "flip" : ""}`}>
        {cards.map((card) => (
          <Card
            key={card.id}
            url={card.url}
            title={card.title}
            onCardClick={() => handleCardClick(card)}
          />
        ))}
      </div>
    </div>
  );
}

export default GameBoard;
