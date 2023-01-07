import { registerEnumType } from '@nestjs/graphql'

export enum UserScalarFieldEnum {
	id = 'id',
	username = 'username',
	password = 'password',
	email = 'email',
	lastName = 'lastName',
	firstName = 'firstName',
	sirName = 'sirName',
	createdAt = 'createdAt',
}

registerEnumType(UserScalarFieldEnum, {
	name: 'UserScalarFieldEnum',
	description: undefined,
})
