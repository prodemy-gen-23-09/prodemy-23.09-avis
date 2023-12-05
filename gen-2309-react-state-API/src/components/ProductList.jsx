import React from 'react';
import { Link } from 'react-router-dom';
import productData from './content';
import { Products } from './product';

function ProductList() {
  return (
    <div className="grid grid-cols-5 gap-4 mt-10">
      {productData.map(product => (
        <Products
          key={product.id}
          id={product.id}
          image={product.image}
          name={product.name}
          price={product.price}
          totalSales={product.totalSales}
          timeLeft={product.timeLeft}
          rating={product.rating}
          releaseDate={product.releaseDate}
        />
      ))}
    </div>
  );
}

export default ProductList;
