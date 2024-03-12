import React from "react";
import { Link } from "react-router-dom";

function NavBar() {
  return (
    <div
      style={{
        padding: "10px 20px ",
        display: "flex",
        backgroundColor: "#e6bf02",
        justifyContent: "space-between",
        color: "white",
      }}
    >
      <Link to="/" style={{ color: "white", textDecoration: "none" }}>
        Home
      </Link>
      <Link to="/movies" style={{ color: "white", textDecoration: "none" }}>
        Movies
      </Link>
      <Link to="/movies/add" style={{ color: "white", textDecoration: "none" }}>
        Add Movie
      </Link>
      <Link to="/about" style={{ color: "white", textDecoration: "none" }}>
        About
      </Link>
    </div>
  );
}

export default NavBar;
