import { Field } from '@nestjs/graphql'
import { ObjectType } from '@nestjs/graphql'
import { Int } from '@nestjs/graphql'
import { HideField } from '@nestjs/graphql'
import { UserCountAggregate } from './user-count-aggregate.output'
import { UserAvgAggregate } from './user-avg-aggregate.output'
import { UserSumAggregate } from './user-sum-aggregate.output'
import { UserMinAggregate } from './user-min-aggregate.output'
import { UserMaxAggregate } from './user-max-aggregate.output'

@ObjectType()
export class UserGroupBy {
	@Field(() => Int, { nullable: false })
	id!: number

	@Field(() => String, { nullable: false })
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
	sirName?: string

	@Field(() => Date, { nullable: false })
	createdAt!: Date | string

	@Field(() => UserCountAggregate, { nullable: true })
	_count?: UserCountAggregate

	@Field(() => UserAvgAggregate, { nullable: true })
	_avg?: UserAvgAggregate

	@Field(() => UserSumAggregate, { nullable: true })
	_sum?: UserSumAggregate

	@Field(() => UserMinAggregate, { nullable: true })
	_min?: UserMinAggregate

	@Field(() => UserMaxAggregate, { nullable: true })
	_max?: UserMaxAggregate
}
