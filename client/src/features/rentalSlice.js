import axios from "axios";
import {
  createSlice,
  createAsyncThunk,
  createSelector,
} from "@reduxjs/toolkit";
import { getAllRentalsRoute, addRentalRoute } from "../utils/APIRoutes";

const initialState = {
  rental: [],
  status: "idle", // loading, succeeded, failed
  error: null,
};

export const getAllRentals = createAsyncThunk("getAllRentals", async () => {
  try {
    const res = await axios.get(getAllRentalsRoute);
    return res.data.data;
  } catch (err) {
    throw new Error(err.response.data.msg);
  }
});

export const addRental = createAsyncThunk("addRental", async (addRental) => {
  try {
    console.log("addRental", addRental);
    const res = await axios.post(addRentalRoute, addRental.details, {
      headers: { authorization: `Bearer ${addRental.token}` },
    });
    return res.data.data;
  } catch (err) {
    throw new Error(err.response.data.msg);
  }
});

const userSlice = createSlice({
  name: "rental",
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(getAllRentals.pending, (state, action) => {
        state.status = "loading";
      })
      .addCase(getAllRentals.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.rental = action.payload;
      })
      .addCase(getAllRentals.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      })
      .addCase(addRental.fulfilled, (state, action) => {
        state.status = "succeeded";
        const updatedRental = state.rental.concat(action.payload);
        return {
          ...state,
          rental: updatedRental,
        };
      })
      .addCase(addRental.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      });
  },
});

export const selectAllRental = (state) => state.rental.rental;
export const getUserStatus = (state) => state.rental.status;
export const getUserError = (state) => state.rental.error;

export const selectRentalsByCustomerId = createSelector(
  [selectAllRental, (_, userId) => userId],
  (rentals, userId) => rentals.filter((rental) => rental.customerId === userId)
);

export const selectRentedCarCountByCarId = createSelector(
  [selectAllRental, (_, carId) => carId],
  (rentals, carId) =>
    rentals.reduce(
      (a, b) =>
        b.carId === carId && new Date(b.dropDate) < new Date() ? a + 1 : a,
      0
    )
);

export const selectRentalsById = createSelector(
  [selectAllRental, (_, carId) => carId],
  (rentals, carId) => rentals.filter((rental) => rental.carId === carId)
);

export default userSlice.reducer;
