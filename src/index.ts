import express, { json } from 'express';
import 'express-async-errors';
import errorHandler from './middlewares/errorHandlerMiddleware.js';
import routers from './routers/index.js';

const app = express();

app.listen(4000, ()=>{
	console.log('server is running on port 4000');
});

app.use(json());
app.use(routers);
app.use(errorHandler);