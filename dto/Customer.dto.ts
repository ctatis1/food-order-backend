import { IsEmail, IsEmpty, Length } from 'class-validator'

export class CustomerSignUpInputs{
    
    @IsEmail()
    email: string;
    
    @Length(10)
    phone: string;
    
    @Length(6,12)
    password: string;
}