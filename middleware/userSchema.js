import mongoose from "mongoose";

const userSchema = mongoose.Schema({
  name: {
    type: String,
    required: true,
    trim: true,
  },
  email: {
    type: String,
    required: true,
    trim: true,
    unique: true,
    validate: (value) => {
      const re =
        /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
      return value.match(re);
    },
    message: "Please enter valid email",
  },
  password: {
    type: String,
    required: true,
    validate: (value) => {
      if (value.length > 6) return value;
    },
    message: "Please enter stronger password",
  },
});
export const user = mongoose.model("user", userSchema);

export default user;
