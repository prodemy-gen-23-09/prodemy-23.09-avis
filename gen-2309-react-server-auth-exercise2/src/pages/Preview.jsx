import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useForm } from 'react-hook-form';

function Preview () {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:8000/wishlist')
          .then(response => {
            setProducts(response.data);
          })
          .catch(error => console.error(error));
      }, []);
      
      const onDelete = (id) => {
        axios
        .delete(`http://localhost:8000/wishlist/${id}`)
          .then(() => {
            alert("Successfully deleted a wishlist!");
            setProducts(products.filter(product => product.id !== id));
          })
          .catch(error => console.error(error));
      };

    return (
      

        <section className='w-full px-30'>
            <h1 className='flex justify-center font-bold text-3xl'>
                <span className='text-blue-500'>Wish</span>
                <span className='text-yellow-500'>list</span>
            </h1>
            <div className="mt-8">
                <div className="flex items-center gap-4 p-2 pt-6 bg-blue-200 rounded-lg">
                <h2 className="w-20 font-bold">Products</h2>
                <h2 className="flex-grow mx-5 font-bold">Product Name</h2>
                <h2 className='font-bold my-4 text-left mr-20'>Type</h2>
                <h2 className="font-bold mr-8">Price</h2>
                <h2 className="font-bold">Action</h2>
            </div>
            {products.map(wishlistItem => (
            wishlistItem.products.map(product => (
            <div key={product.id} className="flex items-center gap-4 p-2 pt-6 bg-white shadow-md rounded-lg my-2">
                <img src={product.image} alt={product.name} className="w-20 h-16 object-cover rounded-lg" />
                <h2 className="flex-grow p-5 font-medium">{product.name}</h2>
                <h2 className="flex-grow p-5 font-medium">{product.productType}</h2>
                <span className="font-semibold mr-8">{product.price}</span>
                {/* <button onClick={() => onDelete(product.id)} className="bg-red-500 text-white rounded p-2 hover:bg-red-700 transition-colors duration-300">Delete</button> */}
                <button onClick={() => onDelete(wishlistItem.id)} className="bg-red-500 text-white rounded p-2 hover:bg-red-700 transition-colors duration-300">Delete</button>
            </div>
            ))
            ))}
        </div>
        </section>

    );
    
    
}

export default Preview;