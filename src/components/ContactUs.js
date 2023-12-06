import React from "react";
import NavBar from "./NavBar";

function ContactUs () {

    const handleSubmit = () => {
        alert("Thank you for your review!")
    }

    

    return (
        <h1>
            <NavBar/>
            Don't see the car your looking for? Contact us and we might just have it!
            <li>Phone: (860) 111-1111</li>
            <li>Email: Carpurchasing@gmail.com</li>
            <li>Hours of Operation: 24/7 365!</li>
            <p>Please Rate Your Web Experience!</p>
            <select>
                <option>⭐⭐⭐⭐⭐</option>
                <option>⭐⭐⭐⭐</option>
                <option>⭐⭐⭐</option>
                <option>⭐⭐</option>
                <option>⭐</option>
            </select>
            <button type="submit" onClick={handleSubmit}>Submit</button>
                       
        </h1>
    )

}

export default ContactUs