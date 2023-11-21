import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import NavBar from "./NavBar";

const Home = () => {
  const [cars, setCars] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState(""); 

  useEffect(() => {
    fetch('http://localhost:3000/cars')
      .then((response) => response.json())
      .then((data) => setCars(data));
  }, []);

  const handleCategoryChange = (e) => {
    setSelectedCategory(e.target.value);
  };

  const filteredCars = selectedCategory
    ? cars.filter((car) => car.body === selectedCategory)
    : cars;

  return (
    <div>
      <h1>
        <NavBar />
        Aidans Car Buying Site 
        <p>Say goodbye to long sales processes, buy your dream car in as little as 5 minutes. Find your perfect match below from our premier selection of new automobiles!</p>
      </h1>
      
      <select onChange={handleCategoryChange} value={selectedCategory}>
        <option value="">Filter by Category</option>
        <option value="Sedan">Sedan</option>
        <option value="Sport Sedan">Sport Sedan</option>
        <option value="Hatchback">Hatchback</option>
        <option value="Truck">Truck</option>
        <option value="Compact">Compact</option>
        <option value="SUV">SUV</option>
      </select>

  

      {filteredCars.map((car) => (
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
      ))}
    </div>
  );
}
// remove lines 43-52 into their own separate carsCard component to clear up home component.

export default Home;
