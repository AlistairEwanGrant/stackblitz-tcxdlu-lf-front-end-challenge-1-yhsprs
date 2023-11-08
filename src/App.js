import React,  { useState, useEffect }  from 'react';
import CardGrid from './components/CardGrid';
import './style.css';
import HeartFilled from '../public/icons/icon-heart-filled.svg';

export default function App() {
  const [cars, setCars] = useState([]);

  useEffect(() => {
    fetch("https://products.lfdev.co/api/cars")
        .then((response) => response.json())
        .then(cars => {setCars(cars['data'])});
        
},[]);
  return (
    <>
      <header className="header">
        <h2>PORSCHE</h2>
        <a className="aboutUs">About Us</a>
        <img className="headerHeart" src={HeartFilled} alt="HeartFilled" />
        <a className="btnClass">Contact sales</a>
      </header>

      <CardGrid cars={cars} />
      
    </>
  );
}
