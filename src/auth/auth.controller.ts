import { Body, HttpCode } from '@nestjs/common';
import { Controller, Post } from '@nestjs/common';
import { AuthDto } from './auth.dto';

@Controller('auth')
export class AuthController {
	@Post('register')
	async register(@Body() dto: AuthDto) {
		
	}

	@HttpCode(200)
	@Post('login')
	async login() {

	}
}

