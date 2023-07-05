import React from 'react';
import './Navbar.css';

const Navbar = () => {
  return (
    <>
      <nav>
        <ul className="nav__ul">
          <li className="nav__links">OnlineStore</li>
          <li className="nav__links">Home</li>
          <li className="nav__links">Products</li>
          <li className="nav__links">About</li>
          <li className="nav__links">Sign in</li>
        </ul>
      </nav>
    </>
  );
};

export default Navbar;
