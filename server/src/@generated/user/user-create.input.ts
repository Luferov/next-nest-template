import { Field } from '@nestjs/graphql'
import { InputType } from '@nestjs/graphql'
import * as Validator from 'class-validator'

@InputType()
export class UserCreateInput {
	@Field(() => String, { nullable: false })
	@Validator.MinLength(3)
	@Validator.MaxLength(30)
	username!: string

	@Field(() => String, { nullable: false })
	password!: string

	@Field(() => String, { nullable: false })
	@Validator.IsEmail()
	email!: string

	@Field(() => String, { nullable: false })
	@Validator.MinLength(3)
	@Validator.MaxLength(30)
	lastName!: string

	@Field(() => String, { nullable: false })
	@Validator.MinLength(3)
	@Validator.MaxLength(30)
	firstName!: string

	@Field(() => String, { nullable: true })
	@Validator.MaxLength(30)
	sirName?: string

	@Field(() => Date, { nullable: true })
	createdAt?: Date | string
}
