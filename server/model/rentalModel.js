import mongoose from "mongoose";

const rentalSchema = new mongoose.Schema({
  rentalId: {
    type: String,
  },
  carId: {
    type: String,
  },
  customerId: {
    type: String,
  },
  rentedOn: {
    type: String,
  },
  totalDays: {
    type: Number,
  },
  rentedAmount: {
    type: String,
  },
  pickDate: {
    type: String,
  },
  dropDate: {
    type: String,
  },
  isDriverNeeded: {
    type: Boolean,
  },
  couponCode: {
    type: String,
  },
});

const rentalCollection = mongoose.model("Rental", rentalSchema);

export default rentalCollection;
