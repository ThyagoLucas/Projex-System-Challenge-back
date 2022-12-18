import { Router } from 'express';
import { rootRequest } from '../controllers/rootController.js';


const root = Router();

root.get('/', rootRequest);

export default root;

