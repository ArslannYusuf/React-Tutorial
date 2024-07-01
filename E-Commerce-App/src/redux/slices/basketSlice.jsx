import { createSlice } from "@reduxjs/toolkit";


const getBasketFromStorage = ()=>{
  return localStorage.getItem("basket") ? JSON.parse(localStorage.getItem("basket")) : [];
}


const initialState = {
  products: getBasketFromStorage(),
};

const writeFromBasketToStorage = (basket)=>{
  localStorage.setItem("basket", JSON.stringify(basket));
}




export const basketSlice = createSlice({
  name: "bsaket",
  initialState,
  reducers: {
    addToBasket: (state, action)=>{
      const findProduct = state.products && state.products.find((product)=> product.id === action.payload.id);
      if(findProduct){
        const extractedProduct = state.products.filter((product)=> product.id != action.payload.id);
        findProduct.count += action.payload.count;
        state.products = [...extractedProduct, findProduct];
        writeFromBasketToStorage(state.products);
      }else{
        state.products =[...state.products, action.payload];
        writeFromBasketToStorage(state.products);
      }
    }
  },
});

export const { addToBasket } = basketSlice.actions;
export default basketSlice.reducer;
