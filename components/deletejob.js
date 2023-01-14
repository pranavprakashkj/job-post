import Job from "../middleware/jobSchema.js";

export async function deleteJob(req, res) {
  let job = await Job.findOneAndDelete({ jobId: req.query.id });
  if (job) {
    console.log(job);
    res.send(` job deleted`);
  } else {
    res.status(404).send("Job not found");
  }
}

export function editPost(req, res) {
  const { title, description, email, skills, experience } = req.body;
  //   res.send(req.body);

  if (!title || !description || !email || !skills || !experience) {
    return res.status(400).send("All fields required");
  }
  Job.findOneAndUpdate(
    { jobId: req.query.id },
    { title, description, email, skills, experience },
    null,
    (err, job) => {
      if (err) console.log(err);
      else {
        console.log(job);
        res.send("updated");
      }
    }
  );
  //   Job.findOne({ email: req.query.email }, (error, post) => {
  //     if (error) {
  //       return res.status(400).send(error);
  //     } else {
  //       //add editing part
  //     }
  //   });
  //   Job.save((error) => {
  //     if (error) {
  //       console.log(error);
  //     } else {
  //       console.log("Job posting updated successfully!");
  //     }
  //   });
}
