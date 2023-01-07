import { join } from 'node:path'
import { MiddlewareConsumer, Module } from '@nestjs/common'

import { JwtModule } from '@nestjs/jwt'
import { AppController } from './app.controller'
import { AppService } from './app.service'
import { ConfigModule, ConfigService } from '@nestjs/config'
import { AuthController } from './auth/auth.controller'
import { AuthModule } from './auth/auth.module'
import { PrismaService } from './common/services/prisma.service'
import { GraphQLModule } from '@nestjs/graphql'
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo'

@Module({
	imports: [
		ConfigModule.forRoot(),
		GraphQLModule.forRoot<ApolloDriverConfig>({
			driver: ApolloDriver,
			autoSchemaFile: join(process.cwd(), 'src/schema.gql'),
			installSubscriptionHandlers: true,
			playground: true,
		}),
		JwtModule.registerAsync({
			imports: [ConfigModule],
			useFactory: async (config: ConfigService) => ({
				secret: config.get<string>('SECRET_KEY'),
			}),
			inject: [ConfigService],
		}),
		AuthModule,
	],
	controllers: [AppController, AuthController],
	providers: [AppService, PrismaService],
})
export class AppModule {
	configure(consumer: MiddlewareConsumer) {
		consumer.apply().forRoutes('*')
	}
}
