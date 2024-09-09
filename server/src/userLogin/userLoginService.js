import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import { User } from "../models/userModel.js";

import config from "../../config.js";

const { secretKey } = config;

/**
 * This is will authenticate and return jwt token to the frontend 
 *
 */
export const login = async (req, res) => {
  try {
    const { userName, password } = req.query;

    const user = await User.findOne({ userName });
    if (!user) {
      return res.status(401).json({ error: 'Authentication failed' });
    }
    const passwordMatch = await bcrypt.compare(password, user.password);
    if (!passwordMatch) {
      return res.status(403).json({ error: 'Invalid login' });
    }
    const token = jwt.sign({ userId: user._id, userName: user.userName, fullName: user.fullName, isAdmin: user.isAdmin }, secretKey, {
      expiresIn: '1h',
    });
    res.status(200).json({ token });
  } catch (error) {
    return res.status(500).json({ error: 'Server error' });
  }
}
