import { Field } from '@nestjs/graphql'
import { InputType } from '@nestjs/graphql'
import { IntWithAggregatesFilter } from '../prisma/int-with-aggregates-filter.input'
import { StringWithAggregatesFilter } from '../prisma/string-with-aggregates-filter.input'
import { StringNullableWithAggregatesFilter } from '../prisma/string-nullable-with-aggregates-filter.input'
import { DateTimeWithAggregatesFilter } from '../prisma/date-time-with-aggregates-filter.input'

@InputType()
export class UserScalarWhereWithAggregatesInput {
	@Field(() => [UserScalarWhereWithAggregatesInput], { nullable: true })
	AND?: Array<UserScalarWhereWithAggregatesInput>

	@Field(() => [UserScalarWhereWithAggregatesInput], { nullable: true })
	OR?: Array<UserScalarWhereWithAggregatesInput>

	@Field(() => [UserScalarWhereWithAggregatesInput], { nullable: true })
	NOT?: Array<UserScalarWhereWithAggregatesInput>

	@Field(() => IntWithAggregatesFilter, { nullable: true })
	id?: IntWithAggregatesFilter

	@Field(() => StringWithAggregatesFilter, { nullable: true })
	username?: StringWithAggregatesFilter

	@Field(() => StringWithAggregatesFilter, { nullable: true })
	password?: StringWithAggregatesFilter

	@Field(() => StringWithAggregatesFilter, { nullable: true })
	email?: StringWithAggregatesFilter

	@Field(() => StringWithAggregatesFilter, { nullable: true })
	lastName?: StringWithAggregatesFilter

	@Field(() => StringWithAggregatesFilter, { nullable: true })
	firstName?: StringWithAggregatesFilter

	@Field(() => StringNullableWithAggregatesFilter, { nullable: true })
	sirName?: StringNullableWithAggregatesFilter

	@Field(() => DateTimeWithAggregatesFilter, { nullable: true })
	createdAt?: DateTimeWithAggregatesFilter
}
