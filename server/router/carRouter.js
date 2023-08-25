import express from "express";
import {
  addCar,
  addCarReview,
  getAllCars,
  updateCar,
} from "../controller/carController.js";

const carRouter = express.Router();
carRouter.get("/getAllCars", getAllCars);
carRouter.post("/addCar", addCar);
carRouter.post("/updateCar", updateCar);
carRouter.post("/addCarReview", addCarReview);
export default carRouter;
