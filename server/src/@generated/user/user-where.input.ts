import { Field } from '@nestjs/graphql'
import { InputType } from '@nestjs/graphql'
import { IntFilter } from '../prisma/int-filter.input'
import { StringFilter } from '../prisma/string-filter.input'
import { StringNullableFilter } from '../prisma/string-nullable-filter.input'
import { BoolFilter } from '../prisma/bool-filter.input'
import { DateTimeNullableFilter } from '../prisma/date-time-nullable-filter.input'
import { EnumRoleFilter } from '../prisma/enum-role-filter.input'
import { EnumGenderFilter } from '../prisma/enum-gender-filter.input'
import { DateTimeFilter } from '../prisma/date-time-filter.input'

@InputType()
export class UserWhereInput {
	@Field(() => [UserWhereInput], { nullable: true })
	AND?: Array<UserWhereInput>

	@Field(() => [UserWhereInput], { nullable: true })
	OR?: Array<UserWhereInput>

	@Field(() => [UserWhereInput], { nullable: true })
	NOT?: Array<UserWhereInput>

	@Field(() => IntFilter, { nullable: true })
	id?: IntFilter

	@Field(() => StringFilter, { nullable: true })
	username?: StringFilter

	@Field(() => StringFilter, { nullable: true })
	password?: StringFilter

	@Field(() => StringNullableFilter, { nullable: true })
	avatar?: StringNullableFilter

	@Field(() => StringFilter, { nullable: true })
	email?: StringFilter

	@Field(() => StringFilter, { nullable: true })
	lastName?: StringFilter

	@Field(() => StringFilter, { nullable: true })
	firstName?: StringFilter

	@Field(() => StringNullableFilter, { nullable: true })
	sirName?: StringNullableFilter

	@Field(() => BoolFilter, { nullable: true })
	active?: BoolFilter

	@Field(() => DateTimeNullableFilter, { nullable: true })
	birthday?: DateTimeNullableFilter

	@Field(() => EnumRoleFilter, { nullable: true })
	role?: EnumRoleFilter

	@Field(() => EnumGenderFilter, { nullable: true })
	gender?: EnumGenderFilter

	@Field(() => DateTimeFilter, { nullable: true })
	createdAt?: DateTimeFilter

	@Field(() => DateTimeFilter, { nullable: true })
	updatedAt?: DateTimeFilter
}
