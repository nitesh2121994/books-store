import bcrypt from "bcrypt";
import { User } from "../models/userModel.js";

export const userRegistration = async (req, res) => {
  try {
    const { userName, password, fullName, isAdmin } = req.body;
    const hashedPassword = await bcrypt.hash(password, 10);
    const user = new User({ userName, password: hashedPassword, fullName, isAdmin });
    await user.save();
    res.status(201).json({ message: 'User registered successfully' });
  } catch (error) {
    console.log(error);
    
    res.status(500).json({ error: 'Registration failed' });
  }
}