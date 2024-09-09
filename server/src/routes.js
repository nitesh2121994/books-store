
import express from "express";

import userLoginRoutes from "./userLogin/userLoginRoutes.js";
import userRegistrationRoutes from "./userRegistration/userRegistrationRoutes.js";
import bookRoutes from "./books/bookRoutes.js";

const routes = express.Router()

routes.use('/books', bookRoutes);
routes.use('/register', userRegistrationRoutes);
routes.use("/login", userLoginRoutes);

export default routes;