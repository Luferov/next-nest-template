import { Field } from '@nestjs/graphql'
import { ObjectType } from '@nestjs/graphql'
import { ID } from '@nestjs/graphql'
import { HideField } from '@nestjs/graphql'
import { Role } from '@generated/prisma'
import { Gender } from '@generated/prisma'

@ObjectType()
export class User {
	/**
	 * Идентификатор пользователя
	 */
	@Field(() => ID, {
		nullable: false,
		description: 'Идентификатор пользователя',
	})
	id!: number

	/**
	 * Логин пользователя
	 */
	@Field(() => String, { nullable: false, description: 'Логин пользователя' })
	username!: string

	@HideField()
	password!: string

	@Field(() => String, { nullable: true })
	avatar!: string | null

	/**
	 * Email пользователя
	 */
	@Field(() => String, { nullable: false, description: 'Email пользователя' })
	email!: string

	/**
	 * Фамилия
	 */
	@Field(() => String, { nullable: false, description: 'Фамилия' })
	lastName!: string

	/**
	 * Имя
	 */
	@Field(() => String, { nullable: false, description: 'Имя' })
	firstName!: string

	/**
	 * Отчество
	 */
	@Field(() => String, { nullable: true, description: 'Отчество' })
	sirName!: string | null

	/**
	 * Флаг активности пользователя
	 */
	@Field(() => Boolean, {
		nullable: false,
		defaultValue: true,
		description: 'Флаг активности пользователя',
	})
	active!: boolean

	/**
	 * День рожденья
	 */
	@Field(() => Date, { nullable: true, description: 'День рожденья' })
	birthday!: Date | null

	/**
	 * Роль пользователя
	 */
	@Field(() => Role, {
		nullable: false,
		defaultValue: 'USER',
		description: 'Роль пользователя',
	})
	role!: keyof typeof Role

	/**
	 * Пол пользователя
	 */
	@Field(() => Gender, {
		nullable: false,
		defaultValue: 'UNKNOWN',
		description: 'Пол пользователя',
	})
	gender!: keyof typeof Gender

	/**
	 * Дата регистрации пользователя
	 */
	@Field(() => Date, {
		nullable: false,
		description: 'Дата регистрации пользователя',
	})
	createdAt!: Date

	/**
	 * Дата обновления
	 */
	@Field(() => Date, { nullable: false, description: 'Дата обновления' })
	updatedAt!: Date
}
