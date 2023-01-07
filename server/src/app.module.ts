import { MiddlewareConsumer, Module } from '@nestjs/common'
import { AppController } from './app.controller'
import { AppService } from './app.service'
import { ConfigModule } from '@nestjs/config'
import { AuthController } from './auth/auth.controller'
import { AuthModule } from './auth/auth.module'
import { PrismaService } from './services/prisma/prisma.service'

@Module({
	imports: [ConfigModule.forRoot(), AuthModule],
	controllers: [AppController, AuthController],
	providers: [AppService, PrismaService],
})
export class AppModule {
	configure(consumer: MiddlewareConsumer) {
		consumer.apply().forRoutes('*')
	}
}
