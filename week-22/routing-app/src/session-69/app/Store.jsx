
import {configureStore} from "@reduxjs/toolkit"
import counterReducer from "../features/counterSlice"
import userReducer from "../features/userSlice"
const store =configureStore({
    reducer:{
        counter:counterReducer,
        user:userReducer
    }

});
export default store;