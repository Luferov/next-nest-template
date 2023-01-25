import { Field } from '@nestjs/graphql'
import { ObjectType } from '@nestjs/graphql'
import { Int } from '@nestjs/graphql'
import { HideField } from '@nestjs/graphql'
import { Role } from '../prisma/role.enum'
import { Gender } from '../prisma/gender.enum'

@ObjectType()
export class UserMinAggregate {
	@Field(() => Int, { nullable: true })
	id?: number

	@Field(() => String, { nullable: true })
	username?: string

	@HideField()
	password?: string

	@Field(() => String, { nullable: true })
	avatar?: string

	@Field(() => String, { nullable: true })
	email?: string

	@Field(() => String, { nullable: true })
	lastName?: string

	@Field(() => String, { nullable: true })
	firstName?: string

	@Field(() => String, { nullable: true })
	sirName?: string

	@Field(() => Boolean, { nullable: true })
	active?: boolean

	@Field(() => Date, { nullable: true })
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
