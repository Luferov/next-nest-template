import { NestFactory } from '@nestjs/core'
import { ValidationPipe } from '@nestjs/common'
import { AppModule } from './app.module'
import { PrismaService } from './common/services/prisma.service'

async function bootstrap() {
	const app = await NestFactory.create(AppModule)
	const prismaService = app.get(PrismaService)
	await prismaService.enableShutdownHooks(app)

	app.useGlobalPipes(
		new ValidationPipe({
			transform: true,
			whitelist: true,
			forbidNonWhitelisted: true,
		})
	)

	await app.listen(8000)
}
bootstrap().then(console.log)
