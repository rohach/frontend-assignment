import React, { useEffect, useState } from 'react';
import './Products.css';

const Products = () => {
  const [popular, setPopular] = useState([]);
  useEffect(() => {
    fetch('https://fakestoreapi.com/products')
      .then(res => res.json())
      .then(json => {
        console.log(json);
        setPopular(json);
      });
  }, []);

  return (
    <div>
      Products
      <br />
      {JSON.stringify(popular)}
    </div>
  );
};

export default Products;
