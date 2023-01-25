import { Field } from '@nestjs/graphql'
import { InputType } from '@nestjs/graphql'
import { IntFieldUpdateOperationsInput } from '../prisma/int-field-update-operations.input'
import { StringFieldUpdateOperationsInput } from '../prisma/string-field-update-operations.input'
import { NullableStringFieldUpdateOperationsInput } from '../prisma/nullable-string-field-update-operations.input'
import { BoolFieldUpdateOperationsInput } from '../prisma/bool-field-update-operations.input'
import { NullableDateTimeFieldUpdateOperationsInput } from '../prisma/nullable-date-time-field-update-operations.input'
import { EnumRoleFieldUpdateOperationsInput } from '../prisma/enum-role-field-update-operations.input'
import { EnumGenderFieldUpdateOperationsInput } from '../prisma/enum-gender-field-update-operations.input'
import { DateTimeFieldUpdateOperationsInput } from '../prisma/date-time-field-update-operations.input'

@InputType()
export class UserUncheckedUpdateInput {
	@Field(() => IntFieldUpdateOperationsInput, { nullable: true })
	id?: IntFieldUpdateOperationsInput

	@Field(() => StringFieldUpdateOperationsInput, { nullable: true })
	username?: StringFieldUpdateOperationsInput

	@Field(() => StringFieldUpdateOperationsInput, { nullable: true })
	password?: StringFieldUpdateOperationsInput

	@Field(() => NullableStringFieldUpdateOperationsInput, { nullable: true })
	avatar?: NullableStringFieldUpdateOperationsInput

	@Field(() => StringFieldUpdateOperationsInput, { nullable: true })
	email?: StringFieldUpdateOperationsInput

	@Field(() => StringFieldUpdateOperationsInput, { nullable: true })
	lastName?: StringFieldUpdateOperationsInput

	@Field(() => StringFieldUpdateOperationsInput, { nullable: true })
	firstName?: StringFieldUpdateOperationsInput

	@Field(() => NullableStringFieldUpdateOperationsInput, { nullable: true })
	sirName?: NullableStringFieldUpdateOperationsInput

	@Field(() => BoolFieldUpdateOperationsInput, { nullable: true })
	active?: BoolFieldUpdateOperationsInput

	@Field(() => NullableDateTimeFieldUpdateOperationsInput, { nullable: true })
	birthday?: NullableDateTimeFieldUpdateOperationsInput

	@Field(() => EnumRoleFieldUpdateOperationsInput, { nullable: true })
	role?: EnumRoleFieldUpdateOperationsInput

	@Field(() => EnumGenderFieldUpdateOperationsInput, { nullable: true })
	gender?: EnumGenderFieldUpdateOperationsInput

	@Field(() => DateTimeFieldUpdateOperationsInput, { nullable: true })
	createdAt?: DateTimeFieldUpdateOperationsInput

	@Field(() => DateTimeFieldUpdateOperationsInput, { nullable: true })
	updatedAt?: DateTimeFieldUpdateOperationsInput
}
