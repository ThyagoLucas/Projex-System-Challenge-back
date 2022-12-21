import { User_toCreate, User_toLogin } from './../repositories/authentication_repository';
import { Request, Response } from 'express';
import * as authServ from '../services/authentication_service.js';


export async function user_register (req:Request, res:Response){

	const user_toCreate = req.body as User_toCreate; 

	await authServ.user_register(user_toCreate);

	return res.send({msg:'created'}).status(201);
}

export async function user_login(req:Request, res:Response){
	const login_datas = req.body as User_toLogin;

	const token = await authServ.user_login(login_datas);
	console.log(token);
	res.send({token:token}).status(200);
}