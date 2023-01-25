import { Field } from '@nestjs/graphql'
import { InputType } from '@nestjs/graphql'
import { IntWithAggregatesFilter } from '../prisma/int-with-aggregates-filter.input'
import { StringWithAggregatesFilter } from '../prisma/string-with-aggregates-filter.input'
import { StringNullableWithAggregatesFilter } from '../prisma/string-nullable-with-aggregates-filter.input'
import { BoolWithAggregatesFilter } from '../prisma/bool-with-aggregates-filter.input'
import { DateTimeNullableWithAggregatesFilter } from '../prisma/date-time-nullable-with-aggregates-filter.input'
import { EnumRoleWithAggregatesFilter } from '../prisma/enum-role-with-aggregates-filter.input'
import { EnumGenderWithAggregatesFilter } from '../prisma/enum-gender-with-aggregates-filter.input'
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

	@Field(() => StringNullableWithAggregatesFilter, { nullable: true })
	avatar?: StringNullableWithAggregatesFilter

	@Field(() => StringWithAggregatesFilter, { nullable: true })
	email?: StringWithAggregatesFilter

	@Field(() => StringWithAggregatesFilter, { nullable: true })
	lastName?: StringWithAggregatesFilter

	@Field(() => StringWithAggregatesFilter, { nullable: true })
	firstName?: StringWithAggregatesFilter

	@Field(() => StringNullableWithAggregatesFilter, { nullable: true })
	sirName?: StringNullableWithAggregatesFilter

	@Field(() => BoolWithAggregatesFilter, { nullable: true })
	active?: BoolWithAggregatesFilter

	@Field(() => DateTimeNullableWithAggregatesFilter, { nullable: true })
	birthday?: DateTimeNullableWithAggregatesFilter

	@Field(() => EnumRoleWithAggregatesFilter, { nullable: true })
	role?: EnumRoleWithAggregatesFilter

	@Field(() => EnumGenderWithAggregatesFilter, { nullable: true })
	gender?: EnumGenderWithAggregatesFilter

	@Field(() => DateTimeWithAggregatesFilter, { nullable: true })
	createdAt?: DateTimeWithAggregatesFilter

	@Field(() => DateTimeWithAggregatesFilter, { nullable: true })
	updatedAt?: DateTimeWithAggregatesFilter
}
