import NavBar from "./NavBar";
import React from "react";

function ThankYou() {
    return (
      <main>
        <h1>
          <NavBar />
          Thank You For Your Purchase!
        </h1>
        <img
            src={"https://cdn.pixabay.com/photo/2023/09/01/21/45/ribbon-8227800_1280.png"} 
          />

      </main>
    );
  }
  
  export default ThankYou;