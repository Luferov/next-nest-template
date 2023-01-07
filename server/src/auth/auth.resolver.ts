import { Info, Query, Resolver } from '@nestjs/graphql'
import { User } from '@generated/user'
import { GraphQLResolveInfo } from 'graphql'
import { PrismaService } from '../common/services/prisma.service'

@Resolver(() => User)
export class AuthResolver {
	constructor(private prisma: PrismaService) {}

	@Query(() => User)
	async me(@Info() info: GraphQLResolveInfo): Promise<User> {
		return {
			id: 1,
			email: 'lyferov@yandex.ru',
			username: 'luferov',
			firstName: 'Луферов',
			lastName: 'Victor',
			sirName: 'Sergeevich',
			role: 'USER',
			gender: 'MALE',
		} as unknown as User
	}
}
