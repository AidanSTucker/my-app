import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import NavBar from "./NavBar";

function Purchase() {
  const navigate = useNavigate();
  const { carId } = useParams();
  const [carDetails, setCarDetails] = useState(null);
  const [formData, setFormData] = useState({
    name: "",
    cardNumber: "",
    zipCode: "",
  });

  useEffect(() => {
    fetch(`http://localhost:3000/cars/${carId}`)
      .then((response) => response.json())
      .then((data) => setCarDetails(data));
  }, [carId]);

  if (!carDetails) {
    return <p>Loading...</p>
  }

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (formData.name && formData.cardNumber && formData.zipCode) {
      try {
        
        const response = await fetch(`http://localhost:3000/cars/${carId}`, {
          method: 'DELETE',
        });

        if (response.ok) {
          
          navigate("/thankyou");
        } else {
          console.error('Failed to delete the car');
          
          alert("Failed to complete the purchase. Please try again later.");
        }
      } catch (error) {
        console.error('Error:', error);
        
        alert("Failed to complete the purchase. Please try again later.");
      }
    } else {
      
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
      <p>Your Future Car:</p>
      <h1>{carDetails.make} {carDetails.name}</h1>
      <img
            src={carDetails.img} 
            alt={`${carDetails.make} ${carDetails.name}`} 
            style={{ width: '300px', height: '200px' }} 
          />
    </main>
  );
}

export default Purchase;
