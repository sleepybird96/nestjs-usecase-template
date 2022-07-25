import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { types } from 'pg';

async function bootstrap() {
  const app = await NestFactory.createApplicationContext(AppModule);

  // fix type for bigint issue
  // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access, @typescript-eslint/no-unsafe-call
  types.setTypeParser(20, (val: string) => {
    return parseInt(val);
  });

  // application logic...

  app.close();
}
bootstrap();
