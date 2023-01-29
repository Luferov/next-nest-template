import { Args, Mutation, Query, Resolver } from '@nestjs/graphql'
import { UseGuards } from '@nestjs/common'
import { User } from '@generated/user'
import { AuthService } from './auth.service'
import { GqlAuthGuard } from './auth.guard'
import { CurrentUser } from './auth.decorators'
import { UserLoginInput, UserLoginType, UserRegisterInput } from './dto'

@Resolver(() => User)
export class AuthResolver {
	constructor(private readonly authService: AuthService) {}

	@Query(() => User)
	@UseGuards(GqlAuthGuard)
	async me(@CurrentUser() user: User): Promise<User> {
		return user
	}

	@Mutation(() => UserLoginType)
	async login(
		@Args('userLoginInput') userLoginInput: UserLoginInput
	): Promise<UserLoginType> {
		return await this.authService.login(userLoginInput)
	}

	@Mutation(() => UserLoginType, { nullable: true })
	async register(
		@Args('userRegisterInput') userRegisterInput: UserRegisterInput
	): Promise<UserLoginType> {
		console.log(userRegisterInput)
		return await this.authService.register(userRegisterInput)
	}
}
