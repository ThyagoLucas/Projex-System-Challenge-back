import { Router } from 'express';
import authentication_router from './authentication_router.js';

const routers = Router();

routers.use(authentication_router);

export default routers;