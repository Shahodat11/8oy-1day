import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { FaStar } from "react-icons/fa6";
import { FaRegHeart } from "react-icons/fa6";
import { GrCart } from "react-icons/gr";
import '../ProductList/ProductList.css'
import '../../App.css'
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
    <div className='container'>
      <div className='cards'>
        {products.map((product) => (
          <div className='card' key={product.id}>
            <img className='card-img' src={product.thumbnail} alt={product.title} width="100" />
            <h2 className='card-title'>{product.title}</h2>
            <p className='card-rating'><FaStar style={{color:"gold"}}/>{product.rating} kupil</p>
            <p className='card-price'>{product.price}UZS</p>
            <button className='card-button' onClick={() => dispatch(addToCart(product))}><GrCart style={{color:"green"}}/></button>
            <button className='card-button' onClick={() => dispatch(addToLike(product))}><FaRegHeart style={{color:"red"}}/></button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductList;
