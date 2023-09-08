import mongoose from "mongoose";

const coupenSchema = new mongoose.Schema({
  coupenCode: {
    type: String,
  },
  coupenType: {
    type: String,
  },
  coupenFor: [
    {
      type: String,
    },
  ],
  coupenDescription: {
    type: String,
  },
  coupenLimit: {
    type: Number,
  },
  startingDate: {
    type: Date,
  },
  expiryDate: {
    type: Date,
  },
  offerPercentage: {
    type: Number,
  },
  coupenBy: {
    type: String,
  },
  createdOn: {
    type: String,
  },
  lastModifiedOn: {
    type: String,
  },
});

const adminSchema = new mongoose.Schema({
  hostRequests: [
    {
      requestId: {
        type: String,
      },
      userId: {
        type: String,
      },
      requestedOn: {
        type: Date,
      },
    },
  ],
  coupens: [coupenSchema],
});

const adminCollection = mongoose.model("admin", adminSchema);

export default adminCollection;
