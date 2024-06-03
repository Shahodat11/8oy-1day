// import React from 'react';
// import { useSelector, useDispatch } from 'react-redux';
// import { removeFromCart } from '../../lib/action/action';

// const Cart = () => {
//   const dispatch = useDispatch();
//   const cartItems = useSelector((state) => state.cart.items);

//   return (
//     <div>
//       <h1>Cart</h1>
//       <ul>
//         {cartItems.map((item) => (
//           <li key={item.id}>
//             <img src={item.thumbnail} alt={item.title} width="50" />
//             <h2>{item.title}</h2>
//             <p>Price: ${item.price}</p>
//             <button onClick={() => dispatch(removeFromCart(item))}>Remove</button>
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// };

// export default Cart;
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { removeFromCart } from '../../lib/action/action';

const Cart = () => {
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart.items);

  return (
    <div>
      <h1>Cart</h1>
      <ul>
        {cartItems.map((item) => (
          <li key={item.id}>
            <img src={item.thumbnail} alt={item.title} width="50" />
            <h2>{item.title}</h2>
            <p>Price: ${item.price}</p>
            <button onClick={() => dispatch(removeFromCart(item))}>Remove</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Cart;
