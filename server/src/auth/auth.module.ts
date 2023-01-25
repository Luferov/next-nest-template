import { Module } from '@nestjs/common'
import { ConfigModule, ConfigService } from '@nestjs/config'
import { AuthResolver } from './auth.resolver'
import { AuthService } from './auth.service'
import { PrismaService } from '../common/services/prisma.service'
import { JwtModule, JwtService } from '@nestjs/jwt'
import { PassportModule } from '@nestjs/passport'

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
			useFactory: async (config: ConfigService) => ({
				secret: config.get<string>('SECRET_KEY'),
			}),
			inject: [ConfigService],
		}),
	],
	providers: [AuthService, AuthResolver, PrismaService, JwtService],
	exports: [PassportModule, JwtModule, AuthService],
})
export class AuthModule {}
