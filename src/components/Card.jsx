import React from 'react';
import './Card.css';
import fallback from '../images/fallback.jpg'
function Card(props) {

  const handleImageError = (e) => {
    e.target.src = fallback;
  };

  return (
    <div className="card-container">
      <img
        className="card-image"
        src={props.img}
        onError={handleImageError}
        alt="Card"
      />
      <div className="card-description">
        <h2>Hello {props.name}</h2>
        <p>{props.desc}</p>
      </div>
    </div>
  );
}

export default Card;
