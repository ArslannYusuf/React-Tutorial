import { configureStore } from '@reduxjs/toolkit'
import counterReducer from '../redux/counterSlice.jsx'

export const store = configureStore({
  reducer: {
    counter: counterReducer
  },
})