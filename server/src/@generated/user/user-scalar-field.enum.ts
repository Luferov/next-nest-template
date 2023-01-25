import { registerEnumType } from '@nestjs/graphql'

export enum UserScalarFieldEnum {
	id = 'id',
	username = 'username',
	password = 'password',
	avatar = 'avatar',
	email = 'email',
	lastName = 'lastName',
	firstName = 'firstName',
	sirName = 'sirName',
	active = 'active',
	birthday = 'birthday',
	role = 'role',
	gender = 'gender',
	createdAt = 'createdAt',
	updatedAt = 'updatedAt',
}

registerEnumType(UserScalarFieldEnum, {
	name: 'UserScalarFieldEnum',
	description: undefined,
})
