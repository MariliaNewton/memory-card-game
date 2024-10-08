import Tilt from "react-parallax-tilt";
import backgroundCard from "../assets/images/backcard.jpg";

function Card({ onCardClick, url, title }) {
  return (
    <Tilt
      tiltReverse
      perspective={1000}
      glareEnable={true}
      glareMaxOpacity={0.45}
      gyroscope={true}
      className="tilt"
    >
      <div className="card" onClick={onCardClick}>
        <div className="card-front">
          <img src={url} alt={`${title} poster movie`} />
        </div>
        <div className="card-back ">
          <img src={backgroundCard} alt="Back of a playing card deck" />
        </div>
      </div>
    </Tilt>
  );
}

export default Card;
