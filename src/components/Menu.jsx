import ghibli from "../assets/images/ghibli.png";

function Menu({ onDifficultySelection }) {
  return (
    <div className="menu-container">
      <div className="menu-border"></div>
      <div className="menu-border-2"></div>
      <div className="menu-info">
        <h1 className="title">スタジオジブリ</h1>
        <h2 className="sub-title">- Ghibli memory card game -</h2>
      </div>
      <img
        src={ghibli}
        alt="Six small, round, ghibli creatures in various poses, one holding a large green leaf above its head. They have large eyes and light-colored bodies, resembling small animals"
      />
      <div className="menu-button-container">
        <button
          onClick={onDifficultySelection}
          value={6}
          className="btn-menu-difficulty"
        >
          EASY
        </button>
        <button
          onClick={onDifficultySelection}
          value={12}
          className="btn-menu-difficulty"
        >
          MEDIUM
        </button>
        <button
          onClick={onDifficultySelection}
          value={20}
          className="btn-menu-difficulty"
        >
          HARD
        </button>
      </div>
    </div>
  );
}

export default Menu;
