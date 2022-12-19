import { Router } from 'express';
import { user_login, user_register } from '../controllers/authentication_controller.js';

const authentication_router = Router();

authentication_router.post('/register', user_register);
authentication_router.post('/login', user_login);
export default authentication_router;