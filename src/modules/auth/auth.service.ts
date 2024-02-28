import { HttpException, Injectable } from '@nestjs/common';
import { LoginAuthDto } from './dto/login-auth.dto';
import { JwtService } from '@nestjs/jwt';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from '../users/entities/user.entity';
import { Repository } from 'typeorm';
import { RegisterAuthDto } from './dto/register-auth.dto';
import { hash, compare } from "bcrypt"

@Injectable()
export class AuthService {

    constructor(private jwtService: JwtService,
                @InjectRepository(User) private userRepository: Repository<User>){}

    async funRegister(objUser: RegisterAuthDto){
        const { password } = objUser

        const plainToHash = await hash(password, 12)
        
        objUser = {...objUser, password: plainToHash}

        return this.userRepository.save(objUser);
    }

    async login(credenciales: LoginAuthDto){

        const {email, password} = credenciales;


        const buscaruser = await this.userRepository.findOne({
            where: {
                email: email
            }
        })
        console.log(buscaruser)
        if(!buscaruser){
            return new HttpException('USER_NOT_FOUND', 404);
        } 

        const verificarPass = await compare(password, buscaruser.password)

        if(!verificarPass) throw new HttpException('PASSWORD_INVALID', 401);

        const payload = {email: buscaruser.email, id: buscaruser.id}

        const token = this.jwtService.sign(payload)

        return {user: buscaruser, token: token};

    }
}
