/* eslint-disable no-undef */
import { createSlice } from "@reduxjs/toolkit";
import data from "./data";

const initialState = {
  amount:0,
  items: data
}

const cartSlice = createSlice({
  name:'cart',
  initialState,
  reducers:{
    clearCart :(state) => {
      state.items =[]
    },
    inc: (state, {payload}) => {
      const tmpItem = state.items.find((item) => item.id == payload.id);
      tmpItem.amount = tmpItem.amount + 1
    } ,
    dec: (state, {payload}) => {
      const tmpItem = state.items.find((item) => item.id == payload.id);
      tmpItem.amount = tmpItem.amount - 1
    } ,
  }
})
export const {clearCart,inc, dec} = cartSlice.actions;

export default cartSlice.reducer;