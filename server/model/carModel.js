import mongoose from "mongoose";

const reviewSchema = new mongoose.Schema({
  userId: {
    type: String,
  },
  rating: {
    type: Number,
  },
  comment: {
    type: String,
  },
  reviewedOn: {
    type: String,
  },
});

const carSchema = new mongoose.Schema({
  carId: {
    type: String,
  },
  userId: {
    type: String,
  },
  carName: {
    type: String,
  },
  model: {
    type: String,
  },
  carNumber: {
    type: String,
  },
  category: {
    type: String,
  },
  rent: {
    type: String,
  },
  description: {
    type: String,
  },
  noOfSeats: {
    type: String,
  },
  mileage: {
    type: String,
  },
  fuelType: {
    type: String,
  },
  gearType: {
    type: String,
  },
  airCondition: {
    type: Boolean,
  },
  carPhotos: [{ type: String }],
  isAvaiable: {
    type: Boolean,
    default: true,
  },
  postedOn: {
    type: String,
  },
  updatedOn: {
    type: String,
  },
  reviews: [reviewSchema],
});

const carCollection = mongoose.model("Cars", carSchema);

export default carCollection;
