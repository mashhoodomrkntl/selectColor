import { createSlice } from "@reduxjs/toolkit";

export const colorSlice = createSlice({
  name: "color",
  initialState: {
    value: "grey",
  },
  reducers: {
    change_color: (state, action) => {
      state.value = action.payload.color;
      console.log('accccttionn',action)
      console.log('pay',action.payload.color)
    },
  },
});
        
export const { change_color } = colorSlice.actions;
export default colorSlice.reducer
