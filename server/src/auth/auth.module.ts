import { Module } from '@nestjs/common'
import { ConfigModule, ConfigService } from '@nestjs/config'
import { JwtModule, JwtService } from '@nestjs/jwt'
import { PassportModule } from '@nestjs/passport'
import { AuthResolver } from './auth.resolver'
import { AuthService } from './auth.service'
import { PrismaService } from '../common/services/prisma.service'
import { passportServiceProvider, bcryptServiceProvider } from './providers'
import { LocalStrategy, JwtStrategy } from './strategies'
import { UserService } from './user.service'

@Module({
	imports: [
		ConfigModule,
		PassportModule.register({
			defaultStrategy: 'jwt',
			property: 'user',
			session: false,
		}),
		JwtModule.registerAsync({
			imports: [ConfigModule],
			useFactory: (config: ConfigService) => ({
				secret: config.get<string>('SECRET_KEY'),
				signOptions: {
					expiresIn: '24h',
				},
			}),
			inject: [ConfigService],
		}),
	],
	providers: [
		passportServiceProvider,
		bcryptServiceProvider,
		AuthService,
		UserService,
		AuthResolver,
		PrismaService,
		JwtService,
		LocalStrategy,
		JwtStrategy,
	],
	exports: [PassportModule, AuthService, JwtModule],
})
export class AuthModule {}
