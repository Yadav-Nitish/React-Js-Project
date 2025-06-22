import React, { useContext, useState } from 'react';
import logo from '../Assets/logo.png';
import cart from '../Assets/cart_icon.png';
import { Link } from 'react-router-dom';
import './Navbar.css';
import { ShopContext } from '../../Context/ShopContext';

const Navbar = () => {
  const [menu, setMenu] = useState("shop");
  const { getTotalCartItems} = useContext(ShopContext)

  const getActiveStyle = (item) => {
    return menu === item
      ? { borderBottom: '4px solid red', paddingBottom: '2px' }
      : {};
  };

  return (
    <div className='navbar'>
      <div className="nav-logo">
        <img src={logo} alt="logo" />
        <p>Pharma</p>
      </div>
      <ul className='nav-menu'>
        <li onClick={() => setMenu("shop")}>
          <Link to='/' style={{ textDecoration: 'none', color: 'inherit', ...getActiveStyle("shop") }}>
            Shop
          </Link>
        </li>
        <li onClick={() => setMenu("men")}>
          <Link to='/mens' style={{ textDecoration: 'none', color: 'inherit', ...getActiveStyle("men") }}>
            Men
          </Link>
        </li>
        <li onClick={() => setMenu("womens")}>
          <Link to='/womens' style={{ textDecoration: 'none', color: 'inherit', ...getActiveStyle("womens") }}>
            Women
          </Link>
        </li>
        <li onClick={() => setMenu("kids")}>
          <Link to='/kids' style={{ textDecoration: 'none', color: 'inherit', ...getActiveStyle("kids") }}>
            Kids
          </Link>
        </li>
      </ul>
      <div className='nav-login-cart'>
        <Link to='/login'><button>Login</button></Link>
        <Link to="/cart"><img src={cart} alt="cart" /></Link> 
        <div className='nav-cart-count'>{getTotalCartItems} </div>
      </div>
    </div>
  );
};

export default Navbar;
