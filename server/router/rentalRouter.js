import express from "express";
import { addRental, getAllRentals } from "../controller/rentalControler.js";

const rentalRouter = express.Router();
rentalRouter.get("/getAllRentals", getAllRentals);
rentalRouter.post("/addRental", addRental);
export default rentalRouter;
