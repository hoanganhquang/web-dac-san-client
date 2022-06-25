import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { toast } from "react-toastify";
import {
  getUser,
  SignInService,
  SignUpService,
} from "../services/AuthServices";

const token = localStorage.getItem("token");
const initialState = {
  token: token ? token : "",
  isLogin: false,
  isSignUp: false,
  user: "",
};

const signIn = createAsyncThunk("auth/sigIn", async (data, thunkAPI) => {
  try {
    return await SignInService(
      "https://do-an-chuyen-nganh.herokuapp.com/api/v1/auth/signin",
      data
    );
  } catch (err) {
    toast.error("Đăng nhập thất bại");
    return thunkAPI.rejectWithValue("error");
  }
});

const signUp = createAsyncThunk("auth/signUp", async (data, thunkAPI) => {
  try {
    return await SignUpService(
      "https://do-an-chuyen-nganh.herokuapp.com/api/v1/auth/signup",
      data
    );
  } catch (err) {
    toast.error("Đăng ký thất bại");
    return thunkAPI.rejectWithValue("error");
  }
});

const getCurrentUser = createAsyncThunk(
  "auth/getCurrentUser",
  async (data, { rejectWithValue }) => {
    try {
      return await getUser(data);
    } catch (error) {
      console.log(error);
      return rejectWithValue("error");
    }
  }
);

export const AuthSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    signOut: (state, action) => {
      state.isLogin = false;
      state.user = "";
      state.token = "";
    },
  },
  extraReducers: (builder) => {
    builder.addCase(signIn.fulfilled, (state, action) => {
      state.isLogin = true;
      state.token = action.payload;
    });
    builder.addCase(signUp.fulfilled, (state, action) => {
      state.isSignUp = true;
      state.isLogin = true;
    });
    builder.addCase(getCurrentUser.fulfilled, (state, action) => {
      state.isLogin = true;
      state.user = action.payload;
    });
    builder.addCase(getCurrentUser.rejected, (state, action) => {
      state.isLogin = false;
      state.user = "";
      state.token = "";
    });
  },
});
export const { signOut } = AuthSlice.actions;
export { signIn, signUp, getCurrentUser };
export default AuthSlice.reducer;
