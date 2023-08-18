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
});

const rentalCollection = mongoose.model("Rental", rentalSchema);

export default rentalCollection;
