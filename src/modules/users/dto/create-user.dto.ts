import { Persona } from "src/modules/persona/entities/persona.entity";
import { User } from "../entities/user.entity";
import { IsEmail, IsNotEmpty, IsString, MinLength } from "class-validator";
import { ApiProperty } from "@nestjs/swagger";

export class CreateUserDto{
    
    @ApiProperty({description: 'Nombre de Usuario'})
    @IsString({message: 'El nombre debe ser una cadena de caracteres'})
    @IsNotEmpty({message: 'El Nombre no puede estar vacio'})
    name: string;

    @ApiProperty({description: 'Correo electronico'})
    @IsEmail({}, {message: 'El formato de correo electónico no es válido'})
    @IsNotEmpty({message: 'El Correo no puede estar vacio'})
    email: string;

    @ApiProperty({description: 'Contraseña'})
    @IsString({message: 'La contraseña debe ser una cadena'})
    @MinLength(8, {message: "La contraseña debe tener al menos 8 caracteres"})
    password: string;
    
}
