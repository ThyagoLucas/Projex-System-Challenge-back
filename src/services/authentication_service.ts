import { User_toCreate, User_toLogin, Token_tosing, User_session} from './../repositories/authentication_repository.js';
import * as authRepo from '../repositories/authentication_repository.js';
import { token_generate } from './utils/jwt_tools.js';
import { create } from 'domain';

export async function user_register(user:User_toCreate){

	const there_is_user = await authRepo.user_by_email(user.email);
	console.log(there_is_user);
	if(there_is_user) throw {type:401, message: 'Email já cadastrado'};
	
	const created = await authRepo.create_user(user);
	
}

export async function user_login(user:User_toLogin){

	const find_user = await authRepo.user_by_email(user.email);

	if(!find_user) throw {type: 401, message:'Usuário não encontrado'};
	
	if(user.password !== find_user.password) throw {type:403, message: 'Senha inválida'};

	const to_token = {	name:find_user.name, email:find_user.email } as Token_tosing;


	const token = token_generate(to_token);

	const session = {userId: find_user.id, token:token} as User_session;
	
	const sessioncreated = await authRepo.create_session(session);
	
	console.log(sessioncreated);

	return token;
	

}