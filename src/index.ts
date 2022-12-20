import express, { json } from 'express';
import 'express-async-errors';
import errorHandler from './middlewares/errorHandlerMiddleware.js';
import routers from './routers/index.js';
import cors from 'cors';

const app = express();

app.listen(80, ()=>{
	console.log('server is running on port 80');
});

app.use(cors());
app.use(json());
app.use(routers);
app.use(errorHandler);