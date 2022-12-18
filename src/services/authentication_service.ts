import { User_toCreate } from './../repositories/authentication_repository.js';
import * as authRepo from '../repositories/authentication_repository.js';

export async function user_register(user:User_toCreate){
	console.log(user);

	const there_is_user = await authRepo.user_by_email(user.email);
	if(there_is_user) throw {type:401, message: 'email already registered'};
	
	const created = await authRepo.create_user(user);

	if(!created) throw {type:404, message:'erro interno, tente novamente :)'};
	


}