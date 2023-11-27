import React from 'react';
import { Link } from 'react-router-dom';

const CarsCard = ({ car }) => {
  return (
    <article key={car.id}>
      <h1>{car.make} {car.name}</h1>
      <Link to={`/purchase/${car.id}`}>
        <button>Purchase</button>
      </Link>
      <p>Price: ${car.price}</p>
      <p>Color: {car.color}</p>
      <p>Year: {car.year}</p>
      <p>Body Style: {car.body}</p>
      <img
        src={car.img} 
        alt={`${car.make} ${car.name}`} 
        style={{ width: '300px', height: '200px', border: '4px solid #000' }} 
      />
    </article>
  );
};

export default CarsCard;
