import { User, Session } from '@prisma/client';
import prisma from '../config/database.js';

export type User_toCreate = Omit<User, 'id' | 'created_at'| 'image_url' >
export type User_session = Omit<Session, 'id' | 'created_at'> 
export type User_toLogin = Omit<User, 'id' | 'created_at'| 'image_url' | 'name' >
export type Token_tosing = Omit<User, 'created_at'| 'image_url' | 'password' >
export async function create_user( user:User_toCreate ){
	return await prisma.user.create({data:user});
}
export async function user_by_email(email:string){
	return await prisma.user.findFirst({where:{email}});
}

export async function create_session(token:User_session){
	return await prisma.session.create({data:token});
}

export async function check_session(session:User_session){
	return await prisma.session.findFirst({where:session});
}


