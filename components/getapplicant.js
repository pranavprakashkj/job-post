import user from "../middleware/applicantSchema.js";

export async function getApplicant(req, res) {
  const page = req.query.page;
  const limit = req.query.limit;
  const startIndex = (page - 1) * limit;
  const endIndex = page * limit;
  const result = {};
  //setting value for previous page
  if (startIndex > 0) {
    result.previous = {
      page: page - 1,
      limit: limit,
    };
  }
  try {
    const users = await user
      .find({
        jobId: req.params.id,
      })
      .skip(startIndex)
      .limit(limit);
    result.user = users;
    // res.send(users);
    console.log(users);
    if (endIndex < (await user.countDocuments().exec())) {
      result.next = {
        page: 1 + page,
        limit: limit,
      };
    }
    return res.send(result);
  } catch (e) {
    res.status(400).send(e);
  }
}

export default getApplicant;
