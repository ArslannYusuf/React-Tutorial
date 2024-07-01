import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  products: [],
};

export const basketSlice = createSlice({
  name: "bsaket",
  initialState,
  reducers: {},
});

export const {} = basketSlice.actions;
export default basketSlice.reducer;
