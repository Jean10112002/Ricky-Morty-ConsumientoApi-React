import React from "react";
import {Link} from 'react-router-dom'
const Nav = () => {
  return (
    <header>
      <nav className="navbar navbar-light bg-warning p-3">
        <div className="container">
          <Link to="/" className="text-white text-decoration-none fs-3 " >
            Ricky and Morty
          </Link>
        </div>
      </nav>
    </header>
  );
};

export default Nav;
