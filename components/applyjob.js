import Applicant from "../middleware/applicantSchema.js";
import { marked } from "marked";
import mongoose from "mongoose";

export async function applyJob(req, res) {
  const { name, email, resume, cover } = req.body;
  const jobId = req.params.id;
  console.log(req.params.id);
  const MarkedCover = marked(cover);

  const { demail, djob } = Applicant.findOne({
    email,
    jobId,
  });

  if (!name || !email || !resume || !cover) {
    res.status(400).send("need all fields");
  } else if (demail && djob) {
    res.status(400).send("already applied");
  }

  let applicant = new Applicant({
    name,
    email,
    resume,
    cover: MarkedCover,
    jobId,
    applicantId: new mongoose.Types.ObjectId(),
  });
  applicant = await applicant.save();
  res.send(applicant);
}

export default applyJob;
