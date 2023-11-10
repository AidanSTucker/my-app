import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import NavBar from "./NavBar";

function PurchasePage() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: "",
    cardNumber: "",
    zipCode: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Check if all fields are filled
    if (formData.name && formData.cardNumber && formData.zipCode) {
      // Assuming your ThankYouPg component is ready
      navigate("/thankyoupg");
    } else {
      // Handle incomplete form
      alert("Please fill out all fields");
    }
  };

  return (
    <main>
      <h1>
        <NavBar />
        Purchase Page
      </h1>
      <form onSubmit={handleSubmit}>
        <label>
          Name:
          <input type="text" name="name" value={formData.name} onChange={handleChange} required />
        </label>
        <br />
        <label>
          4-Digit Card Number:
          <input
            type="password"
            name="cardNumber"
            value={formData.cardNumber}
            onChange={handleChange}
            minLength="4"
            maxLength="4"
            required
          />
        </label>
        <br />
        <label>
          Zip Code:
          <input type="text" name="zipCode" value={formData.zipCode} onChange={handleChange} required />
        </label>
        <br />
        <button type="submit">Submit Payment</button>
      </form>
    </main>
  );
}

export default PurchasePage;
