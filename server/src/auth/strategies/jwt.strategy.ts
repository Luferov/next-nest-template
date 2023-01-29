import { Strategy, ExtractJwt } from 'passport-jwt'
import { Injectable } from '@nestjs/common'
import { PassportStrategy } from '@nestjs/passport'
import { ConfigService } from '@nestjs/config'
import { User } from '@generated/user'
import { UserService } from '../user.service'

export interface JwtPayload {
	username: string
	sub: number
}

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy, 'jwt') {
	constructor(
		private readonly userService: UserService,
		private readonly config: ConfigService
	) {
		super({
			jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
			ignoreExpiration: false,
			secretOrKey: config.get<string>('SECRET_KEY'),
		})
	}

	async validate({ username }: JwtPayload): Promise<User> {
		return await this.userService.findOne(username)
	}
}
