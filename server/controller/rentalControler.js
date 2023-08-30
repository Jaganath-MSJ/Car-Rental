import { nanoid } from "nanoid";
import rentalCollection from "../model/rentalModel.js";

const fieldNotProjected = {
  _id: 0,
  __v: 0,
};

export const getAllRentals = async (req, res, next) => {
  try {
    const data = await rentalCollection.find({}, fieldNotProjected);
    return res.send({ status: true, data: data });
  } catch (err) {
    next(err);
    return res.status(400).send({ msg: "Can't get the rentals" });
  }
};

export const addRental = async (req, res, next) => {
  try {
    const {
      carId,
      customerId,
      totalDays,
      rentedAmount,
      pickDate,
      dropDate,
      isDriverNeeded,
    } = req.body;
    const data = await rentalCollection.create(
      {
        rentalId: nanoid(),
        carId: carId,
        customerId: customerId,
        rentedOn: new Date().toISOString(),
        totalDays: totalDays,
        rentedAmount: rentedAmount,
        pickDate: pickDate,
        dropDate: dropDate,
        isDriverNeeded: isDriverNeeded,
      },
      { projection: fieldNotProjected }
    );
    return res.send({ status: true, data: data });
  } catch (err) {
    next(err);
    return res.status(400).send({ msg: "Can't add a rental" });
  }
};
