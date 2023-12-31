import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./navBar.css";
import { ShoppingCart } from "phosphor-react";
export const Navbar = () => {
  const [isProfileOpen, setProfileOpen] = useState(false);
  const [searchValue, setSearchValue] = useState("");

  const handleProfileToggle = () => {
    setProfileOpen((prevOpen) => !prevOpen);
  };

  const handleSearchChange = (e) => {
    setSearchValue(e.target.value);
  };

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <Link to="/">
          <img
            src="https://static.vecteezy.com/system/resources/previews/000/595/164/original/vector-object-and-icons-for-sport-label-gym-badge-fitness-logo-design.jpg"
            alt="logo"
            className="navbar-logo"
          />
        </Link>
        <ul className="navbar-links">
          <Link to="/">
            <button>Home</button>
          </Link>
          <Link to="/about">
            <button>About</button>
          </Link>
          <Link to="/contact">
            <button>Contact</button>
          </Link>
          <Link to="/shop">
            <button>Shop</button>
          </Link>
        </ul>
        <div>
          <input
            type="text"
            placeholder="Search"
            value={searchValue}
            onChange={handleSearchChange}
            className="search-bar"
          />
        </div>
        <Link to="/cart">
          <button className="shoppingcart">
            <ShoppingCart size={32} />
          </button>
        </Link>
        <div className="profile" onClick={handleProfileToggle}>
          <img
            src="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBw0OBg8PDw4OEBIQDxAQEA4QDxANDw8QFhYWFxURFRMYHSgiGBolGxMTITEhJSkrLjAuFx8zODMtNygtLisBCgoKBQUFDgUFDisZExkrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrK//AABEIAOEA4QMBIgACEQEDEQH/xAAbAAEAAgMBAQAAAAAAAAAAAAAABQYCAwQBB//EADUQAQACAAMFBAkDBAMAAAAAAAABAgMEEQUhMUFREmFxwRMiYoGRobHR4TJScjM0gvFCQ5L/xAAUAQEAAAAAAAAAAAAAAAAAAAAA/8QAFBEBAAAAAAAAAAAAAAAAAAAAAP/aAAwDAQACEQMRAD8A+kgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA9rWZnSImZ6RvkHg6sPZ+Nb/jp4zEN8bJvzvX4TII4SM7JvyvX4TDTibNxo4RFvCfuDkHt6TWdJiYnpMaPAAAAAAAAAAAAAAAAAAAAACOL2sTNoiI1meEJrI5KMOvanfbr07oBy5XZkzvxN3sxx98pTCwq0rpWsR4MwAAAAGOJh1tXS0RMd8ao3NbL54c/4z5SlAFYtWYtMTGkxxiXiezuTriV6WjhbylB4lJreazGkxxgGIAAAAAAAAAAAAAAAAN2TwfSZiteXGfCASGysrpX0lo3z+nujr70k8iNz0AAAAAAAABxbSyvbw+1EetWPjHR2gKuOraOB2MzOnC2+POHKAAAAAAAAAAAAAAAldjYfq2t1mKx9Z+sIpO7Mrpkq9+s/OQdYAAAAAAAAAAAODa+Hrlot+2flO77IZYs5XXKXj2Z+W9XQAAAAAAAAAAAAAAFg2f/AGdP4q+ndl21ycd0zHz/ACDrAAAAAAAAAAABrzH9C38bfRW1hz1tMnefZmPju81eAAAAAAAAAAAAAAASexcXfan+UefkjGzL4s0xq2jlPxjmCyDGlotWJjfExrDIAAAAAAAAACZBHbZxdMKtes6z4QiG/O4/pMxNuXCvhDQAAAAAAAAAAAAAAAACS2Vm9J9HbhP6Z7+iWVdK5DaGsRTEnfyt17pBJgAAAAAAAI3aub0j0deM/qnpHRnn8/FYmtN9uc8q/lDTOs6gAAAAAAAAAAAAAAAAAAM8LBte2lYmfpHjLryezrX331rHTnP2S+FhVpTSsREA05LAvh4elr9rpHKPCXSAAAAADTmsK18LStprPXr3NwCuY+Xvh20tHhPGJ97Us16RaukxExPKd6LzmzJj1sPf7PP3AjQniAAAAAAAAAAAAAA9rWZtERGszuiAK1mbRERrM8IS+R2fFNLX0m3KOMV/LZkcnGHXWd9p4z07odgAAAAAAAAAAAAOPO5GuJGsbrdeU+KFxMO1bzW0aTCzOfN5WuLTfumOFun4BXxni4dqYk1tGkwwAAAAAAAAAAATOzcp2Kdq0etMf+Y6eLk2Vlu1i9uY3V4d9k0AAAAAAAAAAAAAAAADlz+VjEw/ajhPlKBmJidJjSY3THSVoRW1st/2RHdbykEYAAAAAAAARGs6ddw69l4XazcTyr632BMZbBimBFekb++ectoAAAAAAAAAAAAAAAAAMcSkWw5ieExpLIBWcXDmuLNZ5ToxSG2MLTGrb90aT4x+PojwAAAAAAEvsXD0wrW6zp7o/wBohP7Pppk6d8a/HeDpAAAAAAAAAAAAAAAAAAABx7Vw9cpM/tmJ8vNBrJj07WDavWswrYAAAAAACy4VdMKsdIiPkrdI1vHjCzgAAAAAAAAAAAAAAAAAAAAKzi10xbR0tMfNZldzsaZu/wDKQaQAAAAAZYP9av8AKPqswAAAAAAAAAAAAAAAAAAAAAK9n/7y/j5QANAAAAP/2Q=="
            alt="User Avatar"
            className="avatar"
          />
          {isProfileOpen && (
            <div className="dropdown">
              {/* Add your user profile dropdown content here */}
              <Link to="#">Profile</Link>
              <Link to="#">Settings</Link>
              <Link to="/signin">Sign in/Sign up</Link>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
};
