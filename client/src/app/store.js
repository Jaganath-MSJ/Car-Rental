import { configureStore } from "@reduxjs/toolkit";
import userSlice from "../features/userSlice";
// import postSlice from "../features/postSlice";

export const store = configureStore({
  reducer: {
    user: userSlice,
    // post: postSlice,
  },
});
