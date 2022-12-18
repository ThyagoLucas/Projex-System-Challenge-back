import { Router } from "express";
import root from "./root.js";

const routers = Router();


routers.use(root)


export default routers;