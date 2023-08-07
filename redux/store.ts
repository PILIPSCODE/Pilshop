import { configureStore } from "@reduxjs/toolkit";
import CartReducer from './features/cart-Slice'

import { TypedUseSelectorHook, useSelector } from "react-redux";
export const store = configureStore({
    reducer:{
      CartReducer,
    }
})

export type RootState = ReturnType<typeof store.getState>
export type Appdispatch = typeof store.dispatch
export const useAppSelector:TypedUseSelectorHook<RootState> = useSelector;