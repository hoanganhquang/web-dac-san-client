import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { cartService } from "../services/cartService";

export const getQuantity = createAsyncThunk(
  "cart/get",
  async (data, { rejectWithValue }) => {
    try {
      return await cartService(data);
    } catch (error) {
      console.log(error);
      return rejectWithValue("error");
    }
  }
);

export const authSlice = createSlice({
  name: "cart",
  initialState: {
    isChange: false,
    quantity: 0,
  },
  reducers: {
    setChange: (state, action) => {
      state.isChange = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(getQuantity.fulfilled, (state, action) => {
      state.quantity = action.payload;
    });
  },
});

export const { change } = authSlice.actions;
export default authSlice.reducer;
