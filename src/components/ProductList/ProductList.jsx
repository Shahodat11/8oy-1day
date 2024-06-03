// import React, { useEffect } from 'react';
// import { useSelector, useDispatch } from 'react-redux';
// import { FaStar } from "react-icons/fa6";
// import {
//   fetchProductsRequest,
//   fetchProductsSuccess,
//   fetchProductsFailure,
// } from '../../lib/action/action';

// const ProductList = () => {
//   const dispatch = useDispatch();
//   const { products, loading, error } = useSelector((state) => state.products);

//   useEffect(() => {
//     const fetchProducts = async () => {
//       dispatch(fetchProductsRequest());
//       try {
//         const response = await fetch('https://dummyjson.com/products');
//         const data = await response.json();
//         dispatch(fetchProductsSuccess(data.products));
//       } catch (error) {
//         dispatch(fetchProductsFailure(error.message));
//       }
//     };

//     fetchProducts();
//   }, [dispatch]);

//   if (loading) return <p>Loading...</p>;
//   if (error) return <p>Error: {error}</p>;

//   return (
//     <div>
//       <h1>Products</h1>
//       <h3>
//       {products.map((product) => (
//           <div className='cardd' key={product.id}>
//             <img src={product.thumbnail} alt={product.title} width="100" />
//                   <li key={product.id}>{product.title}</li>
//                 <button className='like' onClick={()=> dispatch(toggleLike(product))}>
//          {
//           wishlist?.some(item => item.id === product.id) ? 
//           <FaHeart style={{color:"red"}}/> 
//           :
//           <FaRegHeart className='like-img'/>
//         }
//     </button>
//     <button  onClick={()=> dispatch(addToCart(product))} className='cart-button'>
//       <IoCartOutline className='cart-imgg' />
//     </button>
//     <p className='rating'><FaStar style={{color:"gold"}}/>{product.rating}</p>
//     <p>{product.price}</p>
//   </div>
//         ))}
//       </h3>
//     </div>
//   );
// };

// export default ProductList;

// import React, { useEffect } from 'react';
// import { useSelector, useDispatch } from 'react-redux';
// import {
//   fetchProductsRequest,
//   fetchProductsSuccess,
//   fetchProductsFailure,
//   addToCart,
//   addToLike,
// } from '../../lib/action/action';

// const ProductList = () => {
//   const dispatch = useDispatch();
//   const { products, loading, error } = useSelector((state) => state.products);

//   useEffect(() => {
//     const fetchProducts = async () => {
//       dispatch(fetchProductsRequest());
//       try {
//         const response = await fetch('https://dummyjson.com/products');
//         const data = await response.json();
//         dispatch(fetchProductsSuccess(data.products));
//       } catch (error) {
//         dispatch(fetchProductsFailure(error.message));
//       }
//     };

//     fetchProducts();
//   }, [dispatch]);

//   if (loading) return <p>Loading...</p>;
//   if (error) return <p>Error: {error}</p>;

//   return (
//     <div>
//       <h1>Products</h1>
//       <ul>
//         {products.map((product) => (
//           <li key={product.id}>
//             <img src={product.thumbnail} alt={product.title} width="100" />
//             <h2>{product.title}</h2>
//             <p>Price: ${product.price}</p>
//             <button onClick={() => dispatch(addToCart(product))}>Add to Cart</button>
//             <button onClick={() => dispatch(addToLike(product))}>Like</button>
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// };

// export default ProductList;

import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
  fetchProductsRequest,
  fetchProductsSuccess,
  fetchProductsFailure,
  addToCart,
  addToLike,
} from '../../lib/action/action';

const ProductList = () => {
  const dispatch = useDispatch();
  const { products, loading, error } = useSelector((state) => state.products);

  useEffect(() => {
    const fetchProducts = async () => {
      dispatch(fetchProductsRequest());
      try {
        const response = await fetch('https://dummyjson.com/products');
        const data = await response.json();
        dispatch(fetchProductsSuccess(data.products));
      } catch (error) {
        dispatch(fetchProductsFailure(error.message));
      }
    };

    fetchProducts();
  }, [dispatch]);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <div>
      <h1>Products</h1>
      <ul>
        {products.map((product) => (
          <li key={product.id}>
            <img src={product.thumbnail} alt={product.title} width="100" />
            <h2>{product.title}</h2>
            <p>Price: ${product.price}</p>
            <button onClick={() => dispatch(addToCart(product))}>Add to Cart</button>
            <button onClick={() => dispatch(addToLike(product))}>Like</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ProductList;
