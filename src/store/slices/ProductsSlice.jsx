import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from 'axios';

const ProductsSlice = createSlice({

    name: "products",

    initialState: [],

    reducers: {

    },

    extraReducers: (builder) => {
        builder.addCase(getProducts.fulfilled, (state, action) => {
            //console.log("payload", action.payload)
            return state = action.payload
        })

            .addCase(getProducts.pending, (state, action) => {

            })
            .addCase(getProducts.rejected, (state, action) => {

            })
    }

})

export default ProductsSlice;

export const getProducts = createAsyncThunk("products/getProducts", async () => {
    try {
        const response = await axios.get("https://fakestoreapi.com/products");
        //console.log("response", response)
        if (response.status === 200 && response.data && response.data.length > 0) {
            return response.data;
        }
        else
            return []
    } catch (error) {
        console.error(error);
    }
});