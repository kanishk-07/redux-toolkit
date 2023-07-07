import { createSlice } from "@reduxjs/toolkit";
import axios from 'axios';

const ProductsSlice = createSlice({

    name: "products",

    initialState: [],

    reducers: {

        fetchProducts(state, action) {
            const products = action.payload
            return state = products
        }

    }
})

export default ProductsSlice;
export const { fetchProducts } = ProductsSlice.actions

export const getProducts = () => {
    return async function getProductsThunk(dispatch, getState) {
        const response = await fetch("https://fakestoreapi.com/products")
        const json = await response.json()
        //console.log(json)
        dispatch(fetchProducts(json))
    }
}