import { Field } from '@nestjs/graphql'
import { InputType } from '@nestjs/graphql'
import { Gender } from './gender.enum'

@InputType()
export class EnumGenderFieldUpdateOperationsInput {
	@Field(() => Gender, { nullable: true })
	set?: keyof typeof Gender
}
