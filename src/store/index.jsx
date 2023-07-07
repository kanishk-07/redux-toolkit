import { configureStore } from "@reduxjs/toolkit";
import CartSlice from "./slices/CartSlice";
import ProductsSlice from "./slices/ProductsSlice";

const store = configureStore({

    reducer: {
        cart: CartSlice.reducer,
        products: ProductsSlice.reducer
    },
    
});

export default store;