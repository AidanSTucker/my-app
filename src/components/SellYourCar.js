import React, { useState } from "react";
import NavBar from "./NavBar";

function SellYourCar() {


    return (
        <main>
        <h1>
            <NavBar />
            Sell Us Your Car!
        </h1>
        <p>
        No Hassle, No Negotiation. Tell us your price, and we'll agree, because that's exactly how businesses work!
        </p>
        <form className="Sale Form">
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
            <label>Photo Of Car: </label>
            <input
            type="text"
            name="Photo Of Car"
            />
            <br />
            <button>Sell</button>

        </form>
        </main>
    );

}


export default SellYourCar;