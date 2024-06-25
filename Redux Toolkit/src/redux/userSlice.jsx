import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import axios from 'axios'


const initialState = {
    users : [],
    loading: false
}



export const getAllUsers = createAsyncThunk('users',async ()=>{
    const response = await axios.get("https://jsonplaceholder.typicode.com/users");
    console.log(response.data)
    return response.data;
})

export const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers:{
        //! HTTP istegi olmaz ise kullanilir
    },
    extraReducers: ( builder ) => {
        //! HTTP istegi olursa kullanilir ve parametre alir
        builder.addCase(getAllUsers.fulfilled, (state,action)=>{
            state.users = action.payload;
        })
    }

})


export const {increment, decrement} = userSlice.actions
export default userSlice.reducer