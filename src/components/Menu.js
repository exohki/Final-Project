import React, { useState } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';

const Menu = () => {
  const [dropdownVisible, setDropdownVisible] = useState(false);
  const navigate = useNavigate();

  const toggleDropdown = () => {
    setDropdownVisible(!dropdownVisible);
  };

  const handleLogoClick = () => {
    navigate('/');
  };

  return (
    <header className="menu-header">
      <h1 onClick={handleLogoClick} className="app-title">
        Menu Maestro
      </h1>
      <nav className="dropdown-container">
        <button onClick={toggleDropdown} className="dropdown-button">
          Menu
        </button>
        {dropdownVisible && (
          <ul className="dropdown-menu">
            <li>
              <NavLink to="/" onClick={toggleDropdown}>
                Home
              </NavLink>
            </li>
            <li>
              <NavLink to="/planner" onClick={toggleDropdown}>
                Meal Planner
              </NavLink>
            </li>
            <li>
              <NavLink to="/saved-recipes" onClick={toggleDropdown}>
                Saved Recipes
              </NavLink>
            </li>
            <li>
              <NavLink to="/about" onClick={toggleDropdown}>
                About
              </NavLink>
            </li>
          </ul>
        )}
      </nav>
    </header>
  );
};

export default Menu;
