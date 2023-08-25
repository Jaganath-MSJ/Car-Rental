import { configureStore } from "@reduxjs/toolkit";
import userSlice from "../features/userSlice";
import carSlice from "../features/carSlice";
import rentalSlice from "../features/rentalSlice";

export const store = configureStore({
  reducer: {
    user: userSlice,
    car: carSlice,
    rental: rentalSlice,
  },
});
