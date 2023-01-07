import { Injectable } from '@nestjs/common'
import { PrismaService } from './services/prisma/prisma.service'

@Injectable()
export class AppService {
	constructor(private readonly prisma: PrismaService) {}

	async getHello(): Promise<string> {
		const n_users: number = await this.prisma.users.count()
		return `Users: ${n_users}`
	}
}
