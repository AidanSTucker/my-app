import React, { useState } from "react";
import NavBar from "./NavBar";

function SellYourCar() {
    const [carData, setCarData] = useState({
        Name: "",
        Make: "",
        Year: "",
        Body: "",
        Color: "",
        Price: "",
        Img: "",
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
                console.log('Car added successfully!');
                alert("Your car is sold, thank you for your business!");
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
            name="Name"
            value={carData.name}
            onChange={handleChange}
            />
            <br />
            <label>Car Make:</label>
            <input
            type="text"
            name="Make"
            value={carData.make}
            onChange={handleChange}
            />
            <br />
            <label>Car Year: </label>
            <input
            type="text"
            name="Year"
            value={carData.year}
            onChange={handleChange}
            />
            <br />
            <label>Body Style: </label>
            <input
            type="text"
            name="Body"
            value={carData.body}
            onChange={handleChange}
            />
            <br />
            <label>Car Color: </label>
            <input
            type="text"
            name="Color"
            value={carData.color}
            onChange={handleChange}
            />
            <br />
            <label>Selling Price: </label>
            <input
            type="text"
            name="Price"
            value={carData.price}
            onChange={handleChange}
            />
            <br />
            <label>Photo Of Car (URL): </label>
            <input
            type="text"
            name="Img"
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