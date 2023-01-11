import mongoose from "mongoose";
import Job from "../middleware/jobSchema.js";

async function PostJobs(req, res) {
  //   console.log(req.body);

  const { title, description, email, skills, experience } = req.body;
  //   res.send(req.body);

  if (!title || !description || !email || !skills || !experience) {
    return res.status(400).send("All fields required");
  }

  // const jobId = Job.count({}, function (err, count) {
  //   // console.log("Number of users:", count);
  //   return count + 1;
  // });
  // console.log(jobId);

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

export function editPost(req, res) {
  Job.findOne({ email: req.query.email }, (error, post) => {
    if (error) {
      return res.status(400).send(error);
    } else {
      //add editing part
    }
  });
  Job.save((error) => {
    if (error) {
      console.log(error);
    } else {
      console.log("Job posting updated successfully!");
    }
  });
}

export function deleteJob(req, res) {
  let job = Job.findOne({ email: req.query.email }, (error) => {
    if (error) {
      res.status(400).send(error);
    }
  });
  job.deleteOne((error) => {
    if (error) {
      console.log(error);
    } else {
      res.send("Job post deleted!");
    }
  });
}

export default PostJobs;
