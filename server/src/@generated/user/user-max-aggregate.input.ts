import { Field } from '@nestjs/graphql'
import { InputType } from '@nestjs/graphql'

@InputType()
export class UserMaxAggregateInput {
	@Field(() => Boolean, { nullable: true })
	id?: true

	@Field(() => Boolean, { nullable: true })
	username?: true

	@Field(() => Boolean, { nullable: true })
	password?: true

	@Field(() => Boolean, { nullable: true })
	avatar?: true

	@Field(() => Boolean, { nullable: true })
	email?: true

	@Field(() => Boolean, { nullable: true })
	lastName?: true

	@Field(() => Boolean, { nullable: true })
	firstName?: true

	@Field(() => Boolean, { nullable: true })
	sirName?: true

	@Field(() => Boolean, { nullable: true })
	active?: true

	@Field(() => Boolean, { nullable: true })
	birthday?: true

	@Field(() => Boolean, { nullable: true })
	role?: true

	@Field(() => Boolean, { nullable: true })
	gender?: true

	@Field(() => Boolean, { nullable: true })
	createdAt?: true

	@Field(() => Boolean, { nullable: true })
	updatedAt?: true
}
