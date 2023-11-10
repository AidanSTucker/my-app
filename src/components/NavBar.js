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
        {/* <NavLink
          to="/purchasepage"
          className="nav-link"
        >
          Purchase Page
        </NavLink> */}
        {/* <NavLink
          to="/thankyoupg"
          className="nav-link"
        >
          Thank You
        </NavLink> */}
      </nav>
    );
  };
  
  export default NavBar;