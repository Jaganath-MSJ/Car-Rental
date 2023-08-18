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
  name: {
    type: String,
  },
  category: {
    type: String,
  },
  model: {
    type: String,
  },
  price: {
    type: String,
  },
  description: {
    type: String,
  },
  isAvaiable: {
    type: Boolean,
  },
  photos: [{ type: String }],
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
