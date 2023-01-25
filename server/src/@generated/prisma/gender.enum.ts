import { registerEnumType } from '@nestjs/graphql'

export enum Gender {
	UNKNOWN = 'UNKNOWN',
	MALE = 'MALE',
	FEMALE = 'FEMALE',
}

registerEnumType(Gender, { name: 'Gender', description: undefined })
