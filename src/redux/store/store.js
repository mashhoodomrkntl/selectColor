import { configureStore } from "@reduxjs/toolkit";
import colorReducer from '../slice/colorSlice'
import  counterReducer  from "../slice/counterSlice";
export default configureStore({
    reducer:{
        color:colorReducer,
        counter:counterReducer,
    }
})