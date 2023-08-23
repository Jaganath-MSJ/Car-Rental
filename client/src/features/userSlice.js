import axios from "axios";
import jwtDecode from "jwt-decode";
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { getAllUsersRoute } from "../utils/APIRoutes.js";

const initialState = {
  user: [],
  currentUser: {},
  status: "idle", // loading, succeeded, failed
  error: null,
};

export const getAllUsers = createAsyncThunk("getAllUsers", async () => {
  try {
    const res = await axios.get(getAllUsersRoute);
    return res.data;
  } catch (err) {
    throw new Error(err.response.data.msg);
  }
});

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setCurrentUser: (state, action) => {
      const decoded = jwtDecode(action.payload);
      state.currentUser = {
        accessToken: action.payload,
        userId: decoded.userId,
        role: decoded.role,
      };
    },
  },
  extraReducers(builder) {
    builder
      .addCase(getAllUsers.pending, (state, action) => {
        state.status = "loading";
      })
      .addCase(getAllUsers.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.user = action.payload;
      })
      .addCase(getAllUsers.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      });
  },
});

export const selectAllUser = (state) => state.user.user;
export const getCurrentUser = (state) => state.user.currentUser;
export const getUserStatus = (state) => state.user.status;
export const getUserError = (state) => state.user.error;

export const selectUserInfoById = (state, userId) =>
  state.user.user.find((user) => user.userId === userId);
export const selectUserNameById = (state, userId) =>
  state.user.user.find((user) => user.userId === userId)?.name;

export const { setCurrentUser } = userSlice.actions;

export default userSlice.reducer;
