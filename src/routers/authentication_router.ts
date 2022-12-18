import { Router } from "express";
import { user_register } from "../controllers/authentication_controller.js";

const authentication_router = Router();

authentication_router.post('/register', user_register);

export default authentication_router;