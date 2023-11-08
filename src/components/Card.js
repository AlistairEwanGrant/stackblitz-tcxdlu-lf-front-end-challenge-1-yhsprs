import React, { useState, useEffect } from 'react';
import './Card.css';

const TextCard = ({ id, engine, gearbox, attributes, name, image_path, cssTarget }) => {
  const imgPath = image_path.substring(image_path.lastIndexOf('/') + 1);
  const [showRoom, setShowRoom] = useState('');

  useEffect(() => {
    switch (id) {
      case 1:
        setShowRoom('Guildford showroom');
        break;
      case 2:
        setShowRoom('London showroom');
        break;
      case 3:
        setShowRoom('Worcester showroom');
        break;
      default:
        setShowRoom('');
    }
  }, []);

  return (
    <div className={`imageCard ${cssTarget}`}>
      <a className="attributes">{attributes}</a>
      <img src={`./images/${imgPath}`} alt="image of car" />
      <div className="textBox">
        <h1>{name}</h1>
        <h3>{showRoom}</h3>
        <div className="iconRow">
          <img src="./icons/icon-engine.svg" alt="icon of engine" />
          <h5>{engine}</h5>
          <img src="./icons/icon-gear.svg" alt="icon of gear" />
          <h5>{gearbox}</h5>
        </div>
      </div>
    </div>
  );
};

export default TextCard;
