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
	email?: true

	@Field(() => Boolean, { nullable: true })
	lastName?: true

	@Field(() => Boolean, { nullable: true })
	firstName?: true

	@Field(() => Boolean, { nullable: true })
	sirName?: true

	@Field(() => Boolean, { nullable: true })
	createdAt?: true
}
