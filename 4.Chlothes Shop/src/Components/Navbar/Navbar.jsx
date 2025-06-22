import { NavLink } from 'react-router-dom';
import logo from '../../Assets/logo.png';
import { FaShoppingCart, FaUserCircle } from "react-icons/fa";
import { IoMenu } from "react-icons/io5";
import './Navbar.css';
import { useState } from 'react';

const Navbar = () => {
  const [showNavbar, setShowNavbar] = useState(false);

  function toggleNavbar() {
    setShowNavbar(!showNavbar);
  }

  return (
    <section id="header">
      <NavLink to='/'>
        <img src={logo} className="logo" alt="logo" />
      </NavLink>

      <div>
        <ul id="navbar" className={showNavbar ? 'active' : ''}>
          <li><NavLink to='/'>Home</NavLink></li>
          <li><NavLink to='/about'>About</NavLink></li>
          <li><NavLink to='/shop'>Shop</NavLink></li>
          <li><NavLink to='/blog'>Blog</NavLink></li>
          <li><NavLink to='/contact'>Contact</NavLink></li>
          <li><NavLink to='/cart'><FaShoppingCart className='icons' /></NavLink></li>
          <li><NavLink to='/profile'><FaUserCircle className='icons' /></NavLink></li>
        </ul>
      </div>

      <div id="mobile">
        <NavLink to='/cart'><FaShoppingCart className='icons' /></NavLink>
        <IoMenu className='icons menu-icon' onClick={toggleNavbar} />
      </div>
    </section>
  );
};

export default Navbar;
