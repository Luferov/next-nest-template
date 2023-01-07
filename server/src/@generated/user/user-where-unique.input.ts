import { Field } from '@nestjs/graphql'
import { InputType } from '@nestjs/graphql'
import { Int } from '@nestjs/graphql'
import * as Validator from 'class-validator'

@InputType()
export class UserWhereUniqueInput {
	@Field(() => Int, { nullable: true })
	id?: number

	@Field(() => String, { nullable: true })
	@Validator.MinLength(3)
	@Validator.MaxLength(30)
	username?: string

	@Field(() => String, { nullable: true })
	@Validator.IsEmail()
	email?: string
}
