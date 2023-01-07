import { Field } from '@nestjs/graphql'
import { InputType } from '@nestjs/graphql'
import { IntFilter } from '../prisma/int-filter.input'
import { StringFilter } from '../prisma/string-filter.input'
import { StringNullableFilter } from '../prisma/string-nullable-filter.input'
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

	@Field(() => StringFilter, { nullable: true })
	email?: StringFilter

	@Field(() => StringFilter, { nullable: true })
	lastName?: StringFilter

	@Field(() => StringFilter, { nullable: true })
	firstName?: StringFilter

	@Field(() => StringNullableFilter, { nullable: true })
	sirName?: StringNullableFilter

	@Field(() => DateTimeFilter, { nullable: true })
	createdAt?: DateTimeFilter
}
