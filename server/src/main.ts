import { NestFactory } from '@nestjs/core'
import {
	FastifyAdapter,
	NestFastifyApplication,
} from '@nestjs/platform-fastify'
import { AppModule } from './app.module'
import { PrismaService } from './services/prisma/prisma.service'

async function bootstrap() {
	const app = await NestFactory.create<NestFastifyApplication>(
		AppModule,
		new FastifyAdapter({ logger: true }),
	)
	const prismaService = app.get(PrismaService)
	await prismaService.enableShutdownHooks(app)

	await app.listen(8000)
}
bootstrap()
