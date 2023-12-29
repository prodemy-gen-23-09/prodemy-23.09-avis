import React, { useEffect } from 'react';
import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { setProducts, addToCart, confirmWishlist, clearCart } from '../pages/CartAuthSlice';



function Shop() {
    const dispatch = useDispatch();
    const total = useSelector(state => state.total);
  
    useEffect(() => {
      axios.get('http://localhost:8000/products')
        .then(response => {
          dispatch(setProducts(response.data));
        })
        .catch(error => {
          console.error('Error fetching data: ', error);
        });
    }, [dispatch]);
  
    const products = useSelector(state => state.carts.products);
    const cart = useSelector(state => state.carts.cart);
    const wishlistConfirmed = useSelector(state => state.wishlistConfirmed);
  
    const handleAddToCart = item => {
      dispatch(addToCart(item));
    };

    const navigate = useNavigate();

    const handleConfirmWishlist = () => {

      dispatch(confirmWishlist());
    
      const payload = {
        products: cart,
        total: total
      };

    
      axios
        .post("http://localhost:8000/wishlist", payload)
        .then(() => {
          alert("Successfully Added to Wishlist");
          dispatch(clearCart());
          navigate('/testcheckout');
        })
        .catch((error) => {
          console.error('Error posting data: ', error);
        });
    };
    
    

  
    return (
      <div className='flex'>
        <div className='w-2/3 pr-4'>
          <h2 className="text-2xl font-bold mb-4">Products</h2>
          <div className="grid grid-cols-3 gap-4 ">
            {products.map((product) => (
              <div key={product.id} className="border p-4 rounded-xl">
               <img src={product.image} alt={product.image} className="w-full h-64 object-cover mb-4 rounded-md" />
                <h3 className="font-bold mb-2 justify-center">{product.name}</h3>
                <button onClick={() => handleAddToCart(product)} className="bg-blue-500 text-white px-4 py-2 rounded">Add to Cart</button>
              </div>
            ))}
          </div>
        </div>
        
        <div className="w-1/3 pl-4 bg-grey-100">
          <h2 className="text-2xl font-bold my-4">Shopping Cart</h2>
          <ul>
            {cart.map((item, index) => (
              <li key={index} className="border p-4 rounded mb-2">{item.name}</li>
            ))}
          </ul>
          <button onClick={handleConfirmWishlist} className="bg-green-500 text-white px-4 py-2 rounded mt-4">Confirm Wishlist</button>
          {wishlistConfirmed && (
            <div>
              <h2 className="text-2xl font-bold my-4">Confirmed Wishlist</h2>
              <ul>
                {cart.map((item, index) => (
                  <li key={index} className="border p-4 rounded mb-2">{item.name}</li>
                ))}
              </ul>
              <h2 className="text-2xl font-bold my-4">Total Price: ${total}</h2>
            </div>
          )}
        </div>
      </div>
    );
  }

export default Shop;