import User, { user } from "../middleware/userSchema.js";
import bcryptjs from "bcryptjs";

export async function signup(req, res) {
  try {
    const { name, email, password } = req.body;

    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).send("user idane guru");
    }

    const hashedPassword = await bcryptjs.hash(password, 8);

    let user = new User({
      email,
      password: hashedPassword,
      name,
    });
    user = await user.save(); //save is from mongo , it also give the unique id for it and the version(edits)
    res.send(user);
  } catch (e) {
    res.status(500).send(`error: ${e}`);
  }
}

export async function login(req, res) {
  user.findOne({ email: req.body.email }, (error, user) => {
    if (error) {
      return res.status(500).send(error);
    }
    if (!user) {
      return res.status(404).send("user not found!");
    }

    bcryptjs.compare(req.body.password, user.password, (error, match) => {
      if (error) {
        return res.status(500).send(error);
      }
      if (!match) {
        return res.status(401).send("Incorrect password");
      }

      res.send(`Welcome ${user.email}!!`);
    });
  });
}

export function checkUser(){}
