import { Field } from '@nestjs/graphql'
import { InputType } from '@nestjs/graphql'
import { Int } from '@nestjs/graphql'
import * as Validator from 'class-validator'
import { Role } from '../prisma/role.enum'
import { Gender } from '../prisma/gender.enum'

@InputType()
export class UserCreateManyInput {
	@Field(() => Int, { nullable: true })
	id?: number

	@Field(() => String, { nullable: false })
	@Validator.MinLength(3)
	@Validator.MaxLength(30)
	username!: string

	@Field(() => String, { nullable: false })
	password!: string

	@Field(() => String, { nullable: true })
	avatar?: string

	@Field(() => String, { nullable: false })
	@Validator.IsEmail()
	email!: string

	@Field(() => String, { nullable: false })
	@Validator.MinLength(3)
	@Validator.MaxLength(50)
	lastName!: string

	@Field(() => String, { nullable: false })
	@Validator.MinLength(3)
	@Validator.MaxLength(50)
	firstName!: string

	@Field(() => String, { nullable: true })
	@Validator.MaxLength(50)
	sirName?: string

	@Field(() => Boolean, { nullable: true })
	active?: boolean

	@Field(() => Date, { nullable: true })
	@Validator.IsDate()
	birthday?: Date | string

	@Field(() => Role, { nullable: true })
	role?: keyof typeof Role

	@Field(() => Gender, { nullable: true })
	gender?: keyof typeof Gender

	@Field(() => Date, { nullable: true })
	createdAt?: Date | string

	@Field(() => Date, { nullable: true })
	updatedAt?: Date | string
}
