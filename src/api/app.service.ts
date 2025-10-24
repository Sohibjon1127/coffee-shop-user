import { HttpStatus, Logger, ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { NestExpressApplication } from '@nestjs/platform-express';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import cookieParser from 'cookie-parser';
import { config } from 'src/config';
import { AllExceptionFilter } from 'src/lib/exception/AllException';
import { AppModule } from './app.module';

const PORT = config.API_PORT;
const api = config.API_VERSION;

export class Aplication {
  static async main(): Promise<void> {
    // ========================= DATABASE =========================

    const app = await NestFactory.create<NestExpressApplication>(AppModule, {
      logger: ['error', 'warn', 'log'],
      cors: true,
    });
    app.set('trust proxy', true);

    app.enableCors({
      origin: true,
      credentials: true,
    });

    app.useGlobalFilters(new AllExceptionFilter());

    // ========================= VALIDATSIYA =========================

    app.useGlobalPipes(
      new ValidationPipe({
        whitelist: true,
        transform: true,
        forbidNonWhitelisted: true,
        errorHttpStatusCode: HttpStatus.UNPROCESSABLE_ENTITY,
        transformOptions: {
          enableImplicitConversion: true,
        },
      }),
    );

    // ========================= COOKIE =========================
    app.use(cookieParser());

    // ========================= GLOBAL URL =========================
    app.setGlobalPrefix(api);

    // ========================= SWAGGER =========================
    const configSwagger = new DocumentBuilder()
      .setTitle('Coffee-shop-user')
      .setVersion('1.0.0')
      .addBearerAuth({
        type: 'http',
        scheme: 'Bearer',
        in: 'Header',
      })
      .build();

    const documentSwagger = SwaggerModule.createDocument(app, configSwagger);
    SwaggerModule.setup(api, app, documentSwagger);

    const logging = new Logger('Coffee-shop-user');

    // ========================= PORT =========================

    await app.listen(PORT, '0.0.0.0', () => {
      logging.log(`Swagger UI: http://${config.APP_URL}:${PORT}/${api}`);
    });
  }
}
