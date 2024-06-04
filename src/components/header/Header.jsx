import React from 'react';
import '../header/header.css'
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { FaShoppingCart, FaHeart } from 'react-icons/fa';
import { FaSearch } from "react-icons/fa";

const Header = () => {
  const cartItemCount = useSelector((state) => state.cart.items.length);
  const likeItemCount = useSelector((state) => state.like.items.length);

  return (
    <header>
      <nav className='nav-link'>
        <div className="container nav-links">
          <h3 className='header-h3'>AliExpress</h3>
          <label>
            <input className='header-input' type="text" placeholder='Search products...'/>
            <button className='header-button'><FaSearch /></button>
          </label>
          <ul>
            <li>
              <Link to="/cart">
                <FaShoppingCart className='buttons'/> ({cartItemCount})
              </Link>
            </li>
            <li>
              <Link to="/like">
                <FaHeart className='buttons' /> ({likeItemCount})
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default Header;
