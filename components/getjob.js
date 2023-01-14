import job from "../middleware/jobSchema.js";

export async function getAllJobs(req, res) {
  const page = req.query.page || 1;
  const limit = req.query.limit || 5;
  const startIndex = (page - 1) * limit;
  const endIndex = page * limit;
  // console.log(startIndex);
  const result = {};
  //setting value for previous page
  if (startIndex > 0) {
    result.previous = {
      page: page - 1,
      limit: limit,
    };
  }

  // console.log(page);
  try {
    const jobs = await job
      .find({
        skills: { $in: [req.query.skills || null] },
        experience: req.query.experience || null,
      })
      .skip(startIndex)
      .limit(limit);
    result.jobs = jobs.map((obj) => [obj.title, obj.jobId]);

    // res.send(jobs.map((obj) => obj.title));
    console.log(jobs.length);
    if (endIndex <= jobs.length) {
      result.next = {
        page: page - 1 + 2,
        limit: limit,
      };
    }

    // console.log(result);
    return res.send(result);
  } catch (e) {
    res.status(400).send(e);
  }
}

export async function getJob(req, res) {
  try {
    const jobs = await job.find({
      jobId: req.query.jobid,
    });
    res.send(jobs);
    console.log(jobs);
  } catch (e) {
    res.status(400).send(e);
  }
}

export async function searchJobs(req, res) {
  const searchQuery = req.query.q;
  const page = req.query.page;
  const limit = req.query.limit;

  job
    .find({ $text: { $search: searchQuery } }, (err, jobs) => {
      if (err) {
        res.status(500).send(err);
      } else res.send(jobs);
    })
    .skip((page - 1) * limit)
    .limit(limit);
}

export default getAllJobs;
