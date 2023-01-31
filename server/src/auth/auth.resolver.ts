import { Args, Mutation, Resolver } from '@nestjs/graphql'
import { User } from '@generated/user'
import { AuthService } from './auth.service'
import { UserLoginInput, UserLoginType, UserRegisterInput } from './dto'

@Resolver(() => User)
export class AuthResolver {
	constructor(private readonly authService: AuthService) {}

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
		return await this.authService.register(userRegisterInput)
	}
}
