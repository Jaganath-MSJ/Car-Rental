import express from "express";
import { addCar, getAllCars, updateCar } from "../controller/carController.js";

const carRouter = express.Router();
carRouter.get("/getAllCars", getAllCars);
carRouter.post("/addCar", addCar);
carRouter.post("/updateCar", updateCar);
export default carRouter;
