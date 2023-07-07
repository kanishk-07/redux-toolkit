import { createSlice } from "@reduxjs/toolkit";

const CartSlice = createSlice({
    name: "cart",

    initialState: [],

    reducers: {

        addItem(state, action) {
            const item = action.payload
            state.push(item)
        },

        removeItem(state, action) {
            return state.filter((product) => {
                return product.id!==action.payload.id
            })
        }

    }
})

export default CartSlice;
export const { addItem, removeItem } = CartSlice.actions