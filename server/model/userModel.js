import mongoose from "mongoose";
import ROLE from "../utils/role.js";

const incomeSchema = new mongoose.Schema({
  amount: {
    type: String,
  },
  customerId: {
    type: String,
  },
  paidOn: {
    type: String,
  },
});

const useSchema = new mongoose.Schema({
  userId: {
    type: String,
  },
  name: {
    type: String,
  },
  role: {
    type: String,
    default: ROLE.USER,
  },
  email: {
    type: String,
    unique: true,
  },
  phone: {
    type: String,
  },
  password: {
    type: String,
  },
  city: {
    type: String,
  },
  gender: {
    type: String,
  },
  profilePic: {
    type: String,
    default: "",
  },
  income: [incomeSchema],
  refreshToken: {
    type: String,
    default: "",
  },
  savedCars: [
    {
      type: String,
    },
  ],
});

const userCollection = mongoose.model("Users", useSchema);

export default userCollection;
