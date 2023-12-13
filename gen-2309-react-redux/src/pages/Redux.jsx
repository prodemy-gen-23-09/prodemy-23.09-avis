

import React, { useEffect } from 'react';
import axios from 'axios';
import { createStore } from 'redux';
import { Provider, useDispatch, useSelector } from 'react-redux';
import { setProducts, addToCart, confirmWishlist } from './actions';
import store from './store';

// Actions
const SET_PRODUCTS = 'SET_PRODUCTS';
const ADD_TO_CART = 'ADD_TO_CART';
const CONFIRM_WISHLIST = 'CONFIRM_WISHLIST';

const setProducts = products => ({ type: SET_PRODUCTS, products });
const addToCart = item => ({ type: ADD_TO_CART, item });
const confirmWishlist = () => ({ type: CONFIRM_WISHLIST });

// Reducer
const initialState = {
  products: [],
  cart: [],
  wishlistConfirmed: false,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_PRODUCTS:
      return { ...state, products: action.products };
    case ADD_TO_CART:
      return { ...state, cart: [...state.cart, action.item] };
    case CONFIRM_WISHLIST:
      return { ...state, wishlistConfirmed: true };
    default:
      return state;
  }
};

// Store
const store = createStore(reducer);

function App() {
  return (
    <Provider store={store}>
      <div className="container mx-auto px-4">
        <Shop />
      </div>
    </Provider>
  );
}

function Shop() {
  const dispatch = useDispatch();

  useEffect(() => {
    axios.get('http://localhost:8000/products')
      .then(response => {
        dispatch(setProducts(response.data));
      })
      .catch(error => {
        console.error('Error fetching data: ', error);
      });
  }, [dispatch]);

  const products = useSelector(state => state.products);
  const cart = useSelector(state => state.cart);
  const wishlistConfirmed = useSelector(state => state.wishlistConfirmed);

  const handleAddToCart = item => {
    dispatch(addToCart(item));
  };

  const handleConfirmWishlist = () => {
    dispatch(confirmWishlist());
  };

  return (
    <div className='flex'>
      <div className='w-2/3 pr-4'>
        <h2 className="text-2xl font-bold mb-4">Products</h2>
        <div className="grid grid-cols-3 gap-4">
          {products.map((product) => (
            <div key={product.id} className="border p-4 rounded">
             <img src={product.image} alt={product.name} className="w-full h-64 object-cover mb-4 rounded-md" />
              <h3 className="font-bold mb-2">{product.name}</h3>
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
          </div>
        )}
      </div>
    </div>
  );
}

export default App;
