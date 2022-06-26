import { createSlice } from "@reduxjs/toolkit";

export const authSlice = createSlice({
  name: "cart",
  initialState: {
    isChange: false,
  },
  reducers: {
    setChange: (state, action) => {
      console.log(action);
      state.isChange = action.payload;
    },
  },
});

export const { change } = authSlice.actions;
export default authSlice.reducer;
