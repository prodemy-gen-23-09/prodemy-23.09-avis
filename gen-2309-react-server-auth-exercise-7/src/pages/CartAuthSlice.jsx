import React from "react";
import { useSelector } from "react-redux";
import { createSlice } from "@reduxjs/toolkit";

const cartState ={
    token: "",
    products:[],
    cart: [],
    wishlistConfirmed: false,
    total:0,
}

const cartSlice = createSlice({
    name: "carts",
    initialState: cartState,
    reducers:{
        setProducts: (state, action) => {
            state.products = action.payload;
          },
          addToCart: (state, action) => {
            state.cart.push(action.payload);
          },
          confirmWishlist: (state) => {
            state.wishlistConfirmed = true;
            state.total = state.cart.reduce((total, item) => total + item.price, 0);
          },
          clearCart: (state) => {
            state.cart = [];
          },
    }
})

export const {setProducts,addToCart,confirmWishlist,clearCart}= cartSlice.actions;
export default cartSlice.reducer;