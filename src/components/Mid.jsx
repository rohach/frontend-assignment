import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Header from '../components/Header/Header';
import Products from './Product/Products';
import SingleProduct from '../components/Product/SingleProduct';

const Mid = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Header />} />
        <Route path="/products" element={<Products />} />
        <Route path="/productdetail/:id" element={<SingleProduct />} />
      </Routes>
    </>
  );
};

export default Mid;
