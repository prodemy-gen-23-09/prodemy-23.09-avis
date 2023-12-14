
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    products: [],
    cart: [],
    wishlistConfirmed : false,
    total: 0, 
};

const shopSlice = createSlice ({
    name:'shop',
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
        }
    }
});
export const { setProducts, addToCart, confirmWishlist } = shopSlice.actions;
export default shopSlice.reducer;


