import React from "react";
import { Link } from "react-router-dom";
import "./navbar.css";
const Navbar = () => {
  return (
    <div className="navbar">
      <div className="navContainer">
        <div className="logo">
          <Link style={{ color: "white", textDecoration: "none" }} to={"/"}>
            Booking.com
          </Link>
        </div>
        <div className="navItems">
          <span>BDT</span>
          <span>usa</span>
          <span>qus</span>
          <p className="listProperty">List Your Property</p>
          <button className="navButton">Register</button>
          <button className="navButton">login</button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
