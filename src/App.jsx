// import React, { useEffect, useState } from 'react'
// import Header from './components/header/Header'
// import Banner from './components/banner/Banner'

// const Home = () => {
//   return (
//     <div>
//       <Header/>
//       <Banner/>
//     </div>
//   )
// }

// export default Home
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Header from './components/header/Header';
import ProductList from './components/ProductList/ProductList';

const App = () => {
  return (
    <div className="App">
      <Header/>
      <ProductList/>
    </div>
  );
};

export default App;

