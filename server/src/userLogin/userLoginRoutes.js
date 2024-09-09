
import express from "express";
import { login } from "./userLoginService.js";

const userLoginRoutes = express.Router()

userLoginRoutes.get('/', login);

export default userLoginRoutes;