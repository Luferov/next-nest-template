import { UnauthorizedException, Injectable } from '@nestjs/common'
import { PassportStrategy } from '@nestjs/passport'
import { Strategy, ExtractJwt } from 'passport-jwt'
import { PrismaService } from '../../common/services/prisma.service'
import { ConfigService } from '@nestjs/config'
import { User } from '@generated/user'

export interface JwtPayload {
	username: string
}

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy, 'jwt') {
	constructor(
		private readonly prismaService: PrismaService,
		private readonly config: ConfigService
	) {
		super({
			jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
			ignoreExpiration: false,
			secretOrKey: config.get<string>('SECRET_KEY'),
		})
	}

	async validate({ username }: JwtPayload): Promise<User> {
		const user: User = await this.prismaService.user.findUnique({
			where: { username },
		})
		if (!user) {
			throw new UnauthorizedException()
		}
		return user
	}
}
