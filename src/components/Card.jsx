import backgroundCard from "../assets/images/backcard.jpg";

function Card({ onCardClick, url }) {
  return (
    <div className="card" onClick={onCardClick}>
      <div className="card-front">
        <img src={url} alt="" />
      </div>
      <div className="card-back ">
        <img src={backgroundCard} alt="" />
      </div>
    </div>
  );
}

export default Card;
