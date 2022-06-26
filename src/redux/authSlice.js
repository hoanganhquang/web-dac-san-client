import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { toast } from "react-toastify";
import {
  getUserInfo,
  signInService,
  signUpService,
} from "../services/authService";

const token = JSON.parse(localStorage.getItem("token"));

export const signUp = createAsyncThunk(
  "auth/signUp",
  async (data, { rejectWithValue }) => {
    try {
      return await signUpService(data);
    } catch (error) {
      console.log(error);
      toast.error("Đăng ký thất bại");
      return rejectWithValue("error");
    }
  }
);

export const signIn = createAsyncThunk(
  "auth/signIn",
  async (data, { rejectWithValue }) => {
    try {
      return await signInService(data);
    } catch (error) {
      console.log(error);
      toast.error("Sai thông tin đăng nhập");
      return rejectWithValue("error");
    }
  }
);

// export const getCurrentUser = createAsyncThunk(
//   "auth/getCurrentUser",
//   async (curToken, { rejectWithValue }) => {
//     try {
//       return await getUserInfo(curToken);
//     } catch (error) {
//       console.log(error);
//       return rejectWithValue("error");
//     }
//   }
// );

export const authSlice = createSlice({
  name: "auth",
  initialState: {
    token: token ? token : "",
    isLoggedin: false,
  },
  reducers: {
    signOut: (state) => {
      state.token = "";
      state.isLoggedin = false;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(signUp.fulfilled, (state, action) => {
        state.isLoggedin = true;
        state.token = action.payload;
      })
      .addCase(signUp.rejected, (state, action) => {
        state.isLoggedin = false;
        state.token = "";
      })
      .addCase(signIn.fulfilled, (state, action) => {
        state.isLoggedin = true;
        state.token = action.payload;
      })
      .addCase(signIn.rejected, (state, action) => {
        state.isLoggedin = false;
        state.token = "";
      });
    // .addCase(getCurrentUser.fulfilled, (state, action) => {
    //   const { name, address, email, phone, role } = action.payload.data;
    //   state.user = { name, address, email, phone, role };
    //   state.isLoggedin = true;
    // })
    // .addCase(getCurrentUser.rejected, (state, action) => {
    //   state.token = "";
    //   state.isLoggedin = false;
    //   state.isLoading = false;
    //   state.message = "";
    //   state.user = "";
    // });
  },
});

export const { signOut } = authSlice.actions;

export default authSlice.reducer;
