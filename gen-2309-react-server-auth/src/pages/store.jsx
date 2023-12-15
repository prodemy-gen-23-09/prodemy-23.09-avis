import {createStore} from 'redux';
import { configureStore } from '@reduxjs/toolkit';
// import reducer from './reducer';
// import authSlice from './AuthSlice';
import reducer from './AuthSlice';


const store = configureStore({
    reducer 
});

export default store;