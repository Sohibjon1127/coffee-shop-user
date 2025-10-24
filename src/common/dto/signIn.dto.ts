import { ApiProperty } from '@nestjs/swagger';
import {
  IsEmail,
  IsNotEmpty,
  IsString,
  IsStrongPassword,
} from 'class-validator';

export class SignInDto {
  @ApiProperty({
    type: 'string',
    description: 'Email for user',
    example: 'eshmat@gmail.com',
  })
  @IsEmail()
  @IsString()
  @IsNotEmpty()
  email: string;

  @ApiProperty({
    type: 'string',
    description: 'Password for user',
    example: 'Eshmat123!',
  })
  @IsString()
  @IsNotEmpty()
  password: string;
}
