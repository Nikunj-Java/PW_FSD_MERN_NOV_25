
import {configureStore} from "@reduxjs/toolkit"
import counterReducer from "../features/counterSlice"
import userReducer from "../features/userSlice"
import { apiSlice } from "../features/apiSlice";

const store =configureStore({
    reducer:{
        counter:counterReducer,
        user:userReducer,
        [apiSlice.reducerPath]:apiSlice.reducer

    },
    middleware:(getDefaultMiddleware)=> 
        getDefaultMiddleware().concat(apiSlice.middleware)

});
export default store;