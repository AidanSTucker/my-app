import React, { useEffect, useState } from 'react';
import NavBar from './NavBar';
import CarsCard from './CarsCard';

const Home = () => {
  const [cars, setCars] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState('');

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
        <CarsCard key={car.id} car={car} />
      ))}
    </div>
  );
};

export default Home;
