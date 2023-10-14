import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";
import userRouter from "./router/userRouter.js";
import carRouter from "./router/carRouter.js";
import rentalRouter from "./router/rentalRouter.js";

const frontendUrl =
  process.env.PORT === 8000
    ? "http://localhost:3000"
    : "https://msj-car-rental.netlify.app";

dotenv.config();
const app = express();
app.use(cors({ origin: "http://localhost:3000", credentials: true }));
app.use(express.json({ limit: "10mb" }));
app.use(cookieParser());
app.use(express.urlencoded({ extended: true }));

app.use("/auth", userRouter);
app.use("/car", carRouter);
app.use("/rental", rentalRouter);

mongoose
  .connect(process.env.MONGO_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("Mongo DB connected sccessfully");
  })
  .catch((err) => {
    console.log(err.message);
  });

app.listen(process.env.PORT, () => {
  console.log(`Server is running on port ${process.env.PORT}`);
});
