import { createSlice } from "@reduxjs/toolkit";

export const counter = createSlice({
  name: "counter",
  initialState: {
    value: 0,
  },
  reducers:{
    increase_count:(state)=>{
        state.value +=1
    },
    decrease_count:(state)=>{
        state.value -=1
    }
  }
});
export const {increase_count,decrease_count}=counter.actions;
export default counter.reducer;
