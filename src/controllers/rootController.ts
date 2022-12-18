import { Request, Response } from 'express';


export function rootRequest(req:Request, res:Response){

	console.log('funfei');

	res.send('hello world!').status(200);
}