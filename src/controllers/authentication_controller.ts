import { User_toCreate } from './../repositories/authentication_repository';
import { Request, Response } from 'express';
import * as authServ from '../services/authentication_service.js';


export async function user_register (req:Request, res:Response){

	const user_toCreate = req.body as User_toCreate; 

	await authServ.user_register(user_toCreate);

	return res.sendStatus(200);

}