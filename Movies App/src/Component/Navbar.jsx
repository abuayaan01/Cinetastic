import React from "react";
import "../App.css";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <div className="navContainer px-14">
      <div className="navbar flex gap-10 py-3">
        <Link to="/">
          <img src="" alt="" />
          Home
        </Link>
        <Link to="/movies/popular">Popular</Link>
        <Link to="/movies/top_rated">Top Rated</Link>
        <Link to="/movies/upcoming">Upcoming</Link>
      </div>
    </div>
  );
}

export default Navbar;
