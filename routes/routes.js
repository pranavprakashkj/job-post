import express from "express";
import PostJobs from "../components/postJob.js";
import { getAllJobs, getJob, searchJobs } from "../components/getjob.js";
import applyJob from "../components/applyjob.js";
import getApplicant from "../components/getapplicant.js";
import { login, signup } from "../components/auth.js";

const router = express.Router();
// router.get("/", (req, res) => {
//   res.send("wassup");
// });
router.post("/postjob", PostJobs);
router.post("/applyjob/:id", applyJob);
router.get("/getjob", getJob);
// router.get("/deletejob", deleteJob);
router.get("/getalljobs", getAllJobs);
router.get("/getajobs/search", searchJobs);
router.get("/getapplicants/:id", getApplicant);
router.post("/signup", signup);
router.post("/login", login);

export default { router };
