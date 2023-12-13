import { SET_PRODUCTS, ADD_TO_CART, CONFIRM_WISHLIST } from "./actions";

const initialState = {
    products: [],
    cart: [],
    wishlistConfirmed : false,

};

const reducer = (state = initialState,action) => {
    switch (action.type){
        case SET_PRODUCTS:
            return {...state,products:action.products};
        case ADD_TO_CART:
            return {...state,cart: [...state.cart,action.item]};
        case CONFIRM_WISHLIST:
        return { ...state, wishlistConfirmed: true };
        default:
        return state;
    
    }
};

export default reducer;