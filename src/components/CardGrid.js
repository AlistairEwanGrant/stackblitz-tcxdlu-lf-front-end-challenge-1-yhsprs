import React from 'react';
import Card from './Card';
import TextCard from './TextCard';
import './CardGrid.css';

const CardList = ({ cars }) => {
  return (
    <div className="pageColumns">
      <TextCard />
      <div className="backgroundImage"></div>
      {cars.map((car) => {
        return (
          <Card
            key={car.id}
            id={car.id}
            cssTarget={`gridCard${car.id}`}
            engine={car.engine}
            gearbox={car.gearbox}
            attributes={car.attributes}
            name={car.name}
            image_path={car.image_path}
          />
        );
      })}
      <div className="centerContentDiv">
        <a className="endBtnClass">View all cars</a>
      </div>
    </div>
  );
};

export default CardList;
