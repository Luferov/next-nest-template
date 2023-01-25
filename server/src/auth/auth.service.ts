import * as bcrypt from 'bcrypt'
import { Injectable } from '@nestjs/common'
import { PrismaService } from '../common/services/prisma.service'
import { JwtService } from '@nestjs/jwt'
import { User, UserCreateInput } from '@generated/user'

@Injectable()
export class AuthService {
	constructor(
		private readonly prismaService: PrismaService,
		private readonly jwtService: JwtService
	) {}

	async createUser(data: UserCreateInput): Promise<User> {
		data.password = await bcrypt.hash(data.password, 10)
		return await this.prismaService.user.create({ data })
	}

	async validateUser(username: string, password: string) {
		const user = await this.prismaService.user.findUnique({
			where: { username },
		})
		if (user && user.password === password) {
			const { password, ...result } = user
			return result
		}
		return null
	}
}
