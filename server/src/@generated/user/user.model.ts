import { Field } from '@nestjs/graphql'
import { ObjectType } from '@nestjs/graphql'
import { ID } from '@nestjs/graphql'
import { HideField } from '@nestjs/graphql'

@ObjectType()
export class User {
	@Field(() => ID, { nullable: false })
	id!: number

	/**
	 * Логин пользователя
	 */
	@Field(() => String, { nullable: false, description: 'Логин пользователя' })
	username!: string

	@HideField()
	password!: string

	@Field(() => String, { nullable: false })
	email!: string

	@Field(() => String, { nullable: false })
	lastName!: string

	@Field(() => String, { nullable: false })
	firstName!: string

	@Field(() => String, { nullable: true })
	sirName!: string | null

	@Field(() => Date, { nullable: false })
	createdAt!: Date
}
