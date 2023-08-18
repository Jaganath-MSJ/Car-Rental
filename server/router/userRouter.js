import express from "express";
import {
  register,
  login,
  logout,
  isUserAuth,
  refreshToken,
  getAllUser,
} from "../controller/userController.js";

const userRouter = express.Router();
userRouter.post("/register", register);
userRouter.post("/login", login);
userRouter.post("/logout", logout);
userRouter.post("/isUserAuth", isUserAuth);
userRouter.post("/refresh_token", refreshToken);
userRouter.get("/getAllUsers", getAllUser);
export default userRouter;
