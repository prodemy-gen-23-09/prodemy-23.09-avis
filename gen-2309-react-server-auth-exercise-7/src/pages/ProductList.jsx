import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
// import productData from './content';
import { Products } from './Product';
import axios from 'axios';

function ProductList() {
    const[products, setProducts]=useState([]);

    useEffect(()=> {
        axios.get ('http://localhost:8000/products')
        .then (response =>{
            setProducts(response.data);
        })
        .catch(error => console.error('Error fetching data: ', error));
    }, []);



  return (
    <div className="grid grid-cols-5 gap-4 mt-10">
      {products.map(product => (
        <Products
        key={product.id}
        id={product.id}
        image={product.image}
        name={product.name}
        price={product.price}
        productType={product.productType}
        />
      ))}
    </div>
  );
}

export default ProductList;
