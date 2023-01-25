import { Field } from '@nestjs/graphql'
import { InputType } from '@nestjs/graphql'
import { SortOrder } from '../prisma/sort-order.enum'

@InputType()
export class UserOrderByWithRelationInput {
	@Field(() => SortOrder, { nullable: true })
	id?: keyof typeof SortOrder

	@Field(() => SortOrder, { nullable: true })
	username?: keyof typeof SortOrder

	@Field(() => SortOrder, { nullable: true })
	password?: keyof typeof SortOrder

	@Field(() => SortOrder, { nullable: true })
	avatar?: keyof typeof SortOrder

	@Field(() => SortOrder, { nullable: true })
	email?: keyof typeof SortOrder

	@Field(() => SortOrder, { nullable: true })
	lastName?: keyof typeof SortOrder

	@Field(() => SortOrder, { nullable: true })
	firstName?: keyof typeof SortOrder

	@Field(() => SortOrder, { nullable: true })
	sirName?: keyof typeof SortOrder

	@Field(() => SortOrder, { nullable: true })
	active?: keyof typeof SortOrder

	@Field(() => SortOrder, { nullable: true })
	birthday?: keyof typeof SortOrder

	@Field(() => SortOrder, { nullable: true })
	role?: keyof typeof SortOrder

	@Field(() => SortOrder, { nullable: true })
	gender?: keyof typeof SortOrder

	@Field(() => SortOrder, { nullable: true })
	createdAt?: keyof typeof SortOrder

	@Field(() => SortOrder, { nullable: true })
	updatedAt?: keyof typeof SortOrder
}
