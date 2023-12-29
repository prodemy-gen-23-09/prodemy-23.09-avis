import { createStore } from 'redux';
import { configureStore } from '@reduxjs/toolkit';
import authSlice from './AuthSlice';
import cartSlice from './CartAuthSlice'


const store = configureStore({
    reducer:{
        auth: authSlice,
        carts: cartSlice
    }

});

export default store;