import backgroundImg from "../assets/images/ghibli-landscape.webp";

function Menu({ onDifficultySelection }) {
  return (
    <div className="menu-container">
      <img src={backgroundImg} className="menu-background" />
      <div className="menu-info">
        <h1 className="title">Ghibli</h1>
        <h2 className="sub-title">- Memory card game -</h2>
      </div>
      <div className="menu-button-container">
        <button
          onClick={onDifficultySelection}
          value={6}
          className="btn-menu-difficulty"
        >
          Easy
        </button>
        <button
          onClick={onDifficultySelection}
          value={12}
          className="btn-menu-difficulty"
        >
          Medium
        </button>
        <button
          onClick={onDifficultySelection}
          value={20}
          className="btn-menu-difficulty"
        >
          Hard
        </button>
      </div>
    </div>
  );
}

export default Menu;