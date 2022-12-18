import { Request, Response } from "express";


export async function user_register (req:Request, res:Response){

    console.log('cadastro de usuario');
    res.send('funfei').status(200);

}