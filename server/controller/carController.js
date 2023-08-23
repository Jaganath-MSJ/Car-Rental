import { nanoid } from "nanoid";
import carCollection from "../model/carModel.js";

export const getAllCars = async (req, res, next) => {
  try {
    const cars = await carCollection.find({}).sort({ postedOn: -1 });
    return res.send({ status: true, data: cars });
  } catch (err) {
    next(err);
    return res.status(400).send({ msg: "Can't get the cars" });
  }
};

export const addCar = async (req, res, next) => {
  try {
    const {
      userId,
      carName,
      model,
      carNumber,
      category,
      rent,
      description,
      noOfSeats,
      mileage,
      fuelType,
      gearType,
      airCondition,
      carPhotos,
    } = req.body;
    const data = await carCollection.create({
      carId: nanoid(),
      userId: userId,
      carName: carName,
      model: model,
      carNumber: carNumber,
      category: category,
      rent: rent,
      description: description,
      noOfSeats: noOfSeats,
      mileage: mileage,
      fuelType: fuelType,
      gearType: gearType,
      airCondition: airCondition,
      carPhotos: carPhotos,
      postedOn: new Date().toISOString(),
      updatedOn: new Date().toISOString(),
    });
    return res.send({ status: true, data: data });
  } catch (err) {
    next(err);
    return res.status(400).send({ msg: "Can't add a car" });
  }
};
