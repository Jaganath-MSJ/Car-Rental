import axios from "axios";
import jwtDecode from "jwt-decode";
import {
  createSlice,
  createAsyncThunk,
  createSelector,
} from "@reduxjs/toolkit";
import {
  getAllUsersRoute,
  updateSavedCarsRoute,
  updateUserInfoRoute,
} from "../utils/APIRoutes.js";

const initialState = {
  user: [],
  currentUser: {},
  status: "idle", // loading, succeeded, failed
  error: null,
};

export const getAllUsers = createAsyncThunk("getAllUsers", async () => {
  try {
    const res = await axios.get(getAllUsersRoute);
    return res.data.data;
  } catch (err) {
    throw new Error(err.response.data.msg);
  }
});

export const updateUserInfo = createAsyncThunk(
  "updateUserInfo",
  async (updateUser) => {
    try {
      const res = await axios.post(updateUserInfoRoute, updateUser.details, {
        headers: { authorization: `Bearer ${updateUser.token}` },
      });
      return res.data.data;
    } catch (err) {
      throw new Error(err.response.data.msg);
    }
  }
);

export const updateSavedCars = createAsyncThunk(
  "updateSavedCars",
  async (updateSavedCar) => {
    try {
      console.log("updateSavedCar", updateSavedCar);
      const res = await axios.post(
        updateSavedCarsRoute,
        updateSavedCar.details,
        {
          headers: { authorization: `Bearer ${updateSavedCar.token}` },
        }
      );
      return res.data.data;
    } catch (err) {
      throw new Error(err.response.data.msg);
    }
  }
);

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
      })
      .addCase(updateUserInfo.fulfilled, (state, action) => {
        state.status = "succeeded";
        const { userId } = action.payload;
        const updatedUser = state.user.map((user) =>
          user.userId === userId ? action.payload : user
        );
        return {
          ...state,
          user: updatedUser,
        };
      })
      .addCase(updateUserInfo.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      })
      .addCase(updateSavedCars.fulfilled, (state, action) => {
        state.status = "succeeded";
        const { userId } = action.payload;
        const updatedUser = state.user.map((user) =>
          user.userId === userId ? action.payload : user
        );
        return {
          ...state,
          user: updatedUser,
        };
      })
      .addCase(updateSavedCars.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      });
  },
});

export const selectAllUser = (state) => state.user.user;
export const getCurrentUser = (state) => state.user.currentUser;
export const getUserStatus = (state) => state.user.status;
export const getUserError = (state) => state.user.error;

export const selectUserInfoById = createSelector(
  [selectAllUser, (_, userId) => userId],
  (users, userId) => users.find((user) => user.userId === userId)
);
export const selectUserNameById = createSelector(
  [selectAllUser, (_, userId) => userId],
  (users, userId) => users.find((user) => user.userId === userId)?.name
);

export const selectCurrentUserInfo = createSelector(
  [selectAllUser, getCurrentUser],
  (users, currentUser) =>
    users.find((user) => user.userId === currentUser.userId)
);

export const { setCurrentUser } = userSlice.actions;

export default userSlice.reducer;
