import { NavLink} from "react-router-dom";
import "./NavBar.css";

function NavBar() {
    return (
      <nav className="navbar">
        <NavLink
          to="/"
          className="nav-link"
        >
          Home
        </NavLink>
        <NavLink
          to="/caraffordability"
          className="nav-link"
        >
          Car Affordability Calculator
        </NavLink>
        <NavLink
          to="/sellyourcar"
          className="nav-link"
        >
          Sell Us Your Car
        </NavLink>
        <NavLink
          to="/contactus"
          className="nav-link"
        >
          Contact Us!
        </NavLink>

      </nav>
    );
  };
  
  export default NavBar;