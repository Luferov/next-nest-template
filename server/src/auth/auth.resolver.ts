import { Args, Mutation, Query, Resolver } from '@nestjs/graphql'
import { UseGuards } from '@nestjs/common'
import { CreateOneUserArgs, User } from '@generated/user'
import { AuthService } from './auth.service'
import { GqlAuthGuard } from './auth.guard'
import { CurrentUser } from './auth.decorators'

@Resolver(() => User)
export class AuthResolver {
	constructor(private readonly authService: AuthService) {}

	@Query(() => User)
	@UseGuards(GqlAuthGuard)
	async me(@CurrentUser() user: User): Promise<User> {
		return user
	}

	@Mutation(() => User, { nullable: true })
	async register(@Args() userArgs: CreateOneUserArgs): Promise<any> {
		return await this.authService.createUser(userArgs.data)
	}
}
