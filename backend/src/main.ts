import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import * as cors from 'cors';
import * as cookieParser from 'cookie-parser';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app
    .use(
      cors({
        origin: true,
        credentials: true,
      }),
    )
    .useGlobalPipes(new ValidationPipe({ whitelist: true }))
    .use(cookieParser());
  const config = new DocumentBuilder()
    .setTitle('URLShare API')
    .setVersion('1.0')
    .build();

  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api/docs', app, document, {
    swaggerOptions: {
      persistAuthorization: true,
    },
    customSiteTitle: 'URLShare API Docs',
    customCss: `
      .topbar-wrapper img {content:url('https://your-logo-url.com/logo.png'); width:100px;}
      .swagger-ui .topbar { background-color: #1e293b; }
    `,
  });
  await app.listen(process.env.PORT ?? 5000);
  console.log(`Application is running on: ${await app.getUrl()}`);
}
bootstrap();
