import React from 'react';
import { Routes, Route } from 'react-router-dom';
import ProductList from '../../components/ProductList/ProductList';
import Cart from '../../components/cart/Cart';
import Like from '../../components/like/Like';
import Header from '../../components/header/Header';
import Banner from '../../components/banner/Banner'

const Home = () => {
  return (
    <div className="Home">
      <Header />
      <Banner/>
      <ProductList />
      <Routes>
        <Route path="/cart" element={<Cart />} />
        <Route path="/like" element={<Like />} />
      </Routes>
    </div>
  );
};

export default Home;
