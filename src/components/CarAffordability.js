import React, { useState } from "react";
import NavBar from "./NavBar";


function PurchasePage() {
  const [income, setIncome] = useState("");
  const [priceRange, setPriceRange] = useState("");
  
  const handleChange = (e) => {
    setIncome(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!income || isNaN(income)) {
      alert("Please enter a valid yearly income.");
      return;
    }

    
    const incomeNum = parseFloat(income);
    const basePrice = 0.35 * incomeNum;
    const minPrice = basePrice - 5000;
    const maxPrice = basePrice + 5000;

    setPriceRange(`$${minPrice.toFixed(2)} - $${maxPrice.toFixed(2)}`);
  };

  return (
    <main>
      <h1>
        <NavBar />
        Car Affordability Calculator
        <p>Input your yearly salary and see what price range you should shop in.</p>
      </h1>
      <form onSubmit={handleSubmit}>
        <label>
          Enter Your Yearly Income:
          <input
            type="text"
            name="income"
            value={income}
            onChange={handleChange}
            required
          />
        </label>
        <br />
        <button type="submit">Calculate Price Range</button>
      </form>
      {priceRange && (
        <div>
          <h2>Your Car Price Range:</h2>
          <p>{priceRange}</p>
        </div>
      )}
    </main>
  );
}

export default PurchasePage;
