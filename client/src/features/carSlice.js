import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { addCarRoute, getAllCarsRoute } from "../utils/APIRoutes.js";
import axios from "axios";

const initialState = {
  car: [],
  status: "idle", // loading, succeeded, failed
  error: null,
};

export const getAllCars = createAsyncThunk("getAllCars", async () => {
  try {
    const res = await axios.get(getAllCarsRoute);
    return res.data.data;
  } catch (err) {
    throw new Error(err.response.data.msg);
  }
});

export const addCar = createAsyncThunk("addCar", async (addCar) => {
  try {
    const res = await axios.post(addCarRoute, addCar.details, {
      headers: { authorization: `Bearer ${addCar.token}` },
    });
    return res.data;
  } catch (err) {
    throw new Error(err.response.data.msg);
  }
});

const carSlice = createSlice({
  name: "car",
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(getAllCars.pending, (state, action) => {
        state.status = "loading";
      })
      .addCase(getAllCars.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.car = action.payload;
      })
      .addCase(getAllCars.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      })
      .addCase(addCar.fulfilled, (state, action) => {
        state.status = "succeeded";
        const updatedCars = state.car.concat(action.payload);
        return {
          ...state,
          car: updatedCars,
        };
      })
      .addCase(addCar.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      });
  },
});

export const selectAllCar = (state) => state.car.car;
export const getCarStatus = (state) => state.car.status;
export const getCarError = (state) => state.car.error;

export const selectCarById = (state, carId) =>
  state.car.car.find((car) => car.carId === carId);

export const selectCarsByUserId = (state, userId) =>
  state.car.car.filter((car) => car.userId === userId);
export default carSlice.reducer;
