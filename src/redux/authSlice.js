// // authSlice.js
// import { createSlice } from "@reduxjs/toolkit";

// const initialState = {
//   user: null,
//   isLoggedIn: false,
// };

// const authSlice = createSlice({
//   name: "auth",
//   initialState,
//   reducers: {
//     login(state, action) {
//       state.user = action.payload.username;
//       state.isLoggedIn = true;
//     },
//     logout(state) {
//       state.user = null;
//       state.isLoggedIn = false;
//     },
//   },
// });

// export const { login, logout } = authSlice.actions;
// export default authSlice.reducer;

import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  user: null,
  token: null,
  isLoggedIn: false,
  error: null,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    logout(state) {
      state.user = null;
      state.token = null;
      state.isLoggedIn = false;
      state.error = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(loginAsync.fulfilled, (state, action) => {
        state.user = action.payload.username;
        state.token = action.payload.token;
        state.isLoggedIn = true;
        state.error = null;
      })
      .addCase(loginAsync.rejected, (state, action) => {
        state.error = action.payload;
      });
  },
});

export const { logout } = authSlice.actions;

export const loginAsync = createAsyncThunk(
  "auth/loginAsync",
  async ({ username, password }, { rejectWithValue }) => {
    try {
      const response = await axios.post("https://dummyjson.com/auth/login", {
        username,
        password,
        expiresInMins: 30,
      });
      const token = response.data.token;
      localStorage.setItem("token", token);
      return { username, token };
    } catch (error) {
      return rejectWithValue("Failed to login. Please check your credentials.");
    }
  }
);
export default authSlice.reducer;
