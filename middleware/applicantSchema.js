import mongoose from "mongoose";

const AppicantSchema = new mongoose.Schema({
  name: {
    type: String,
  },
  email: {
    type: String,
  },
  resume: {
    type: String,
  },
  cover: {
    type: String,
  },
  jobId: {
    type: String,
    required: true,
  },
  applicantId: {
    type: String,
    required: true,
    unique: true,
  },
});

export const applicant = mongoose.model("applicant", AppicantSchema);
export default applicant;
