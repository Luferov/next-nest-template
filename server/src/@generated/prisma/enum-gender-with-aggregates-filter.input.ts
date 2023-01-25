import { Field } from '@nestjs/graphql'
import { InputType } from '@nestjs/graphql'
import { Gender } from './gender.enum'
import { NestedEnumGenderWithAggregatesFilter } from './nested-enum-gender-with-aggregates-filter.input'
import { NestedIntFilter } from './nested-int-filter.input'
import { NestedEnumGenderFilter } from './nested-enum-gender-filter.input'

@InputType()
export class EnumGenderWithAggregatesFilter {
	@Field(() => Gender, { nullable: true })
	equals?: keyof typeof Gender;

	@Field(() => [Gender], { nullable: true })
	in?: Array<keyof typeof Gender>

	@Field(() => [Gender], { nullable: true })
	notIn?: Array<keyof typeof Gender>

	@Field(() => NestedEnumGenderWithAggregatesFilter, { nullable: true })
	not?: NestedEnumGenderWithAggregatesFilter

	@Field(() => NestedIntFilter, { nullable: true })
	_count?: NestedIntFilter

	@Field(() => NestedEnumGenderFilter, { nullable: true })
	_min?: NestedEnumGenderFilter

	@Field(() => NestedEnumGenderFilter, { nullable: true })
	_max?: NestedEnumGenderFilter
}
