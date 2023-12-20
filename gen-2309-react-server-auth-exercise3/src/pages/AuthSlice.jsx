import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    products: [],
    cart: [],
    wishlistConfirmed : false,
    total: 0, 
    users: {
        name: "",
        email: "",
        isAuthenticated: false,
        token: null,
    }
};

const AuthSlice = createSlice ({
    name:'auth',
    initialState,
    reducers:{
        setProducts: (state, action) => {
            state.products = action.payload;
        },
        addToCart: (state,action) => {
            state.cart.push(action.payload);
        },
        confirmWishlist: (state) => {
            state.wishlistConfirmed = true;
            state.total = state.cart.reduce((total, item) => total + item.price, 0);
        },
        loginSuccess: (state, action) => {
            state.users.isAuthenticated = true;
            state.users.name = action.payload.name;
            state.users.email = action.payload.email;
            state.users.token = action.payload.token;
        },
        logoutSuccess: (state) => {
            state.users.isAuthenticated = false;
            state.users.name = "";
            state.users.email = "";
            state.users.token = null;
        }
    }
});

export const { setProducts, addToCart, confirmWishlist, loginSuccess, logoutSuccess } = AuthSlice.actions;
export default AuthSlice.reducer;

