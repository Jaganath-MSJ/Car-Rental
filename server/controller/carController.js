import { nanoid } from "nanoid";
import carCollection from "../model/carModel.js";

export const getAllCars = async (req, res, next) => {
  try {
    const cars = await carCollection
      .find({}, { _id: 0, __v: 0 })
      .sort({ updatedOn: -1 });
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

export const updateCar = async (req, res, next) => {
  try {
    const {
      carId,
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
    const data = await carCollection.findOneAndUpdate(
      { carId: carId },
      {
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
        updatedOn: new Date().toISOString(),
      },
      { new: true }
    );
    return res.send({ status: true, data: data });
  } catch (err) {
    next(err);
    return res.status(400).send({ msg: "Can't update a car" });
  }
};
