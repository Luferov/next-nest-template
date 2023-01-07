import { Module } from '@nestjs/common'
import { ConfigModule } from '@nestjs/config'
import { AuthResolver } from './auth.resolver'
import { AuthService } from './auth.service'
import { PrismaService } from '../common/services/prisma.service'
import { JwtService } from '@nestjs/jwt'

@Module({
	providers: [AuthService, AuthResolver, PrismaService, JwtService],
	imports: [ConfigModule],
})
export class AuthModule {}
