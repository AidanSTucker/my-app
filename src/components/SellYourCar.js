import React from "react";
import NavBar from "./NavBar";

function SellYourCar() {
    
    const handleSubmit = async (event) => {
        event.preventDefault();
        // Fetch form data
        const formData = new FormData(event.target);
        const carData = {
            name: formData.get("Model"),
            make: formData.get("Make"),
            year: formData.get("Year"),
            type: formData.get("Body"),
            color: formData.get("Color"),
            price: formData.get("How Much Ya Want For It"),
            img: formData.get("Photo Of Car"),
        };
        // Send POST request with carData to your backend API
        try {
            const response = await fetch('http://localhost:3000/cars', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(carData),
            });
            if (response.ok) {
                // Do something when the car is successfully added
                console.log('Car added successfully!');
                alert("Your car is sold, thank you for your business!")
            } else {
                // Handle errors
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
            name="Model"
            />
            <br />
            <label>Car Make:</label>
            <input
            type="text"
            name="Make"
            />
            <br />
            <label>Car Year: </label>
            <input
            type="text"
            name="Year"
            />
            <br />
            <label>Body Style: </label>
            <input
            type="text"
            name="Body"
            />
            <br />
            <label>Car Color: </label>
            <input
            type="text"
            name="Color"
            />
            <br />
            <label>Selling Price: </label>
            <input
            type="text"
            name="How Much Ya Want For It"
            />
            <br />
            <label>Photo Of Car (URL): </label>
            <input
            type="text"
            name="Photo Of Car"
            />
            <br />
            <button type="submit">Sell</button>

        </form>
        </main>
    );

}


export default SellYourCar;