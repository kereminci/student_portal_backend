import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import * as session from 'express-session'
import * as passport from 'passport'
import { AuthGuard } from '@nestjs/passport';
import { AuthenticatedGuard } from './auth/authenticated.guard';



async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.use(
    session({
      secret : 'keyboard cat',
      resave: false,
      saveUninitialized : false,
      cookie : {maxAge: 3600000}
    })
  );

  //app.useGlobalGuards(new AuthenticatedGuard())
  app.use(passport.initialize());
  app.use(passport.session())
  app.enableCors()


  await app.listen(process.env.PORT || 3000);
}
bootstrap();
