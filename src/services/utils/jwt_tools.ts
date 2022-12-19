import { Token_tosing } from './../../repositories/authentication_repository';
import jwt from 'jsonwebtoken';

export function token_generate(user_datas:Token_tosing){
	return jwt.sign(user_datas, process.env.JWT_SECRET, {expiresIn:'1 day'});
}

export function token_verify(token:string){
    
	try {
		const is_token = jwt.verify(token, process.env.JWT_SECRET );
		console.log(is_token);
		return is_token;
	} catch (error) {
		throw {type:403, message:'token inválido ou expirado'};
	}
}

