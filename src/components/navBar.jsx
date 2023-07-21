import React from "react";
import { Link } from "react-router-dom";
import { ShoppingCart } from "phosphor-react";
export const Navbar = () => {
  return (
    <div>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/cart">
            <ShoppingCart size={32} />
          </Link>
        </li>
        <li>
          <Link to="/logIn">Login</Link>
        </li>
      </ul>
    </div>
  );
};
