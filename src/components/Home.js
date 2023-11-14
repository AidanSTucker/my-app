import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import NavBar from "./NavBar";
import PurchasePage from "./Purchase";

const Home = () => {
  const [cars, setCars] = useState([]);

  useEffect(() => {
    fetch('http://localhost:3000/cars')
      .then((response) => response.json())
      .then((data) => setCars(data));
  }, []);

  return (
    <div>
      <h1>
        <NavBar />
        Aidans Car Buying Site 
        <p>Say goodbye to long sales processes, buy your dream car in as little as 5 minutes. Find your perfect match below from our premier selection of new automobiles!</p>
      </h1>
      {cars.map((car) => (
        <article key={car.id}>
          <h1>{car.make} {car.name}</h1>
          <Link to={`/purchase/${car.id}`}>
            <button>Purchase</button>
          </Link>
          <p>Price: ${car.price}</p>
          <p>Color: {car.color}</p>
          <p>Year: {car.year}</p>
          <img
            src={car.img} 
            alt={`${car.make} ${car.name}`} 
            style={{ width: '300px', height: '200px', border: '4px solid #000' }} 
            
          />
        </article>
      ))}
    </div>
  );
}

export default Home;
