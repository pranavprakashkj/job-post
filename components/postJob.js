import mongoose from "mongoose";
import Job from "../middleware/jobSchema.js";

async function PostJobs(req, res) {
  //   console.log(req.body);

  const { title, description, email, skills, experience } = req.body;
  //   res.send(req.body);

  if (!title || !description || !email || !skills || !experience) {
    return res.status(400).send("All fields required");
  }

  let job = new Job({
    title,
    description,
    email,
    skills,
    experience,
    jobId: new mongoose.Types.ObjectId(),
  });
  job = await job.save();
  res.send(`${job}\n job successfully created`);
  console.log("job posted");
}
export default PostJobs;
