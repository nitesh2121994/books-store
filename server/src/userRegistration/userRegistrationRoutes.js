
import express from "express";
import { userRegistration } from "./userRegistrationService.js";

const userRegistrationRoutes = express.Router()

userRegistrationRoutes.post('/', userRegistration);

export default userRegistrationRoutes;