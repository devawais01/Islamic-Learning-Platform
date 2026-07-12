import { Link } from "react-router-dom";
import DarkModeButton from "./DarkModeButton";

const Navbar = () => {
  return (
    <nav className="navbar">
      {/* Centered links */}
      <div className="nav-center">
        <Link to="/">Home</Link>
        <Link to="/registration">Registration</Link>
        <Link to="/about">About Us</Link>
        <Link to="/contact">Contact Us</Link>
      </div>

      {/* Right aligned dark mode */}
      <div className="nav-right">
        <DarkModeButton />
      </div>
    </nav>
  );
};

export default Navbar;
