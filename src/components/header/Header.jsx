// import React from 'react'
// import { useSelector } from 'react-redux'

// const Header = () => {
//     const count = useSelector(state => state.counter)
//   return (
//     <div>
//       <h2>Header{count}</h2>
//     </div>
//   )
// }

// export default Header

import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { FaShoppingCart, FaHeart } from 'react-icons/fa';

const Header = () => {
  const cartItemCount = useSelector((state) => state.cart.items.length);
  const likeItemCount = useSelector((state) => state.like.items.length);

  return (
    <header>
      <nav>
        <ul>
          <li>
            <Link to="/">Products</Link>
          </li>
          <li>
            <Link to="/cart">
              <FaShoppingCart /> Cart ({cartItemCount})
            </Link>
          </li>
          <li>
            <Link to="/like">
              <FaHeart /> Like ({likeItemCount})
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
