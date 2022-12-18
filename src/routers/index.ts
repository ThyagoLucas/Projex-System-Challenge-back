import { Router } from 'express';
import authentication_router from './authentication_router.js';
import root from './root.js';

const routers = Router();


routers.use(root);

routers.use(authentication_router);


export default routers;