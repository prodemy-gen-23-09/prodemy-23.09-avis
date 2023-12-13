
export const SET_PRODUCTS = 'SET_PRODUCTS';
export const ADD_TO_CART = 'ADD_TO_CART';
export const CONFIRM_WISHLIST = ' CONFIRM_WISHLIST';

export const setProducts = products => ({ type: SET_PRODUCTS,products });
export const addToCart = item => ({type: ADD_TO_CART, item}); 
export const confirmWishlist = () => ({ type: CONFIRM_WISHLIST });