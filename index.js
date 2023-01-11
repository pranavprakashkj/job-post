import express from "express";
import mongoose from "mongoose";
import route from "./routes/routes.js";
import DotenvConfigOptions from "dotenv";
// import bodyParser from "body-parser";

const app = express();
DotenvConfigOptions.config();
const PORT = process.env.PORT_NUMBER;
const DBURL = process.env.DBURL;

mongoose.set("strictQuery", true);

// app.use(bodyParser.urlencoded({ extended: true }));

app.use(express.json());
app.use(route.router);

mongoose
  .connect(DBURL)
  .then(() => {
    console.log("connected to MongoDB");
  })
  .catch((e) => {
    console.log(e);
  });

app.listen(PORT, () => {
  console.log(`connected to port ${PORT}`);
});
