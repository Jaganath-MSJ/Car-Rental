import express from "express";
import { addCar, getAllCars } from "../controller/carController.js";

const carRouter = express.Router();
carRouter.get("/getAllCars", getAllCars);
carRouter.post("/addCar", addCar);
export default carRouter;
