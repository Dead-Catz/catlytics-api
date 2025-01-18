import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { TimeoutInterceptor } from './common/timeout.interceptor';
import { ValidationPipe } from '@nestjs/common';
import { ServiceExceptionFilter } from './common/service_error.filter';
import { MonitoringMiddleware } from './common/monitoring.middleware';

async function bootstrap() {
  console.log(`bootstrap =>`, 'SYNC_DB:', process.env.SYNC_DB);
  const app = await NestFactory.create(AppModule);
  app.enableCors({
    origin: '*',
    methods: '*',
    credentials: false,
    allowedHeaders: '*',
  });
  app.use((req, res, next) => {
    const monitoringMiddleware = new MonitoringMiddleware();
    return monitoringMiddleware.use(req, res, next);
  });
  const config = new DocumentBuilder()
    .setTitle('Catlytics API')
    .setDescription('Catlytics API')
    .setVersion('1.0')
    .addApiKey(
      {
        type: 'apiKey',  // Specify the type as 'apiKey'
        name: 'system-token',  // Name of the header
        in: 'header',  // Where to expect the header
      },
      'system-token',  // Name of the security scheme
    )
    .addApiKey(
      {
        type: 'apiKey',  // Specify the type as 'apiKey'
        name: 'project-token',  // Name of the header
        in: 'header',  // Where to expect the header
      },
      'project-token',  // Name of the security scheme
    )
    .addApiKey(
      {
        type: 'apiKey',  // Specify the type as 'apiKey'
        name: 'project-name',  // Name of the header
        in: 'header',  // Where to expect the header
      },
      'project-name',  // Name of the security scheme
    )
    .build();
  const document = SwaggerModule.createDocument(app, config);
  app.useGlobalInterceptors(new TimeoutInterceptor(15_000));
  app.useGlobalPipes(new ValidationPipe({ transform: true }));
  app.useGlobalFilters(new ServiceExceptionFilter());
  SwaggerModule.setup('swagger', app, document);
  await app.listen(+process.env.PORT);
}
bootstrap();
