import React, { useState } from "react";
import NavBar from "./NavBar";

function SellYourCar({ addNewCar}) {
    const [carData, setCarData] = useState({
        name: "",
        make: "",
        year: "",
        body: "",
        color: "",
        price: "",
        img: "",
    });

    const handleChange = (event) => {
        const { name, value } = event.target;
        setCarData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
    
        try {
          const response = await fetch('http://localhost:3000/cars', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify(carData),
          });
          if (response.ok) {
            const newCar = await response.json(); 
            addNewCar(newCar); 
            setCarData({
                name: "",
                make: "",
                year: "",
                body: "",
                color: "",
                price: "",
                img: "",
            });
            alert('Your car is sold, thank you for your business!');
          } else {
            console.error('Failed to add car');
          }
        } catch (error) {
          console.error('Error:', error);
        }
      };

    
    return (
        <main>
        <h1>
            <NavBar />
            Sell Us Your Car!
        </h1>
        <p>
        No Hassle, No Negotiation. Tell us your price, and we'll agree, because that's exactly how businesses work!
        </p>
        <form className="Sale Form" onSubmit={handleSubmit}>
            <label>Car Model:</label>
            <input
            type="text"
            name="name"
            value={carData.name}
            onChange={handleChange}
            />
            <br />
            <label>Car Make:</label>
            <input
            type="text"
            name="make"
            value={carData.make}
            onChange={handleChange}
            />
            <br />
            <label>Car Year: </label>
            <input
            type="text"
            name="year"
            value={carData.year}
            onChange={handleChange}
            />
            <br />
            <label>Body Style: </label>
            <input
            type="text"
            name="body"
            value={carData.body}
            onChange={handleChange}
            />
            <br />
            <label>Car Color: </label>
            <input
            type="text"
            name="color"
            value={carData.color}
            onChange={handleChange}
            />
            <br />
            <label>Selling Price: </label>
            <input
            type="text"
            name="price"
            value={carData.price}
            onChange={handleChange}
            />
            <br />
            <label>Photo Of Car (URL): </label>
            <input
            type="text"
            name="img"
            value={carData.img}
            onChange={handleChange}
            />
            <br />
            <button type="submit">Sell</button>

        </form>
        </main>
    );

}


export default SellYourCar;