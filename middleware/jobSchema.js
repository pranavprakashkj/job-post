import mongoose from "mongoose";

const jobSchema = mongoose.Schema({
  title: {
    type: String,
  },
  description: {
    type: String,
  },
  email: {
    type: String,
  },
  skills: {
    type: [String],
  },
  experience: {
    type: Number,
  },
  jobId: {
    type: String,
    unique: true,
  },
});

jobSchema.index({ title: "text", description: "text" });

export const Job = mongoose.model("job", jobSchema);
export default Job;
