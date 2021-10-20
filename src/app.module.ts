import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './auth/auth.module';

@Module({
  imports: [
    AuthModule.forRoot({
      // These are the connection details of the app you created on supertokens.io
      connectionURI: '', // TODO: use connectionURI from env
      apiKey: '', // TODO: use apiKey from env
      appInfo: {
        // Learn more about this on https://supertokens.io/docs/thirdparty/appinfo
        appName: 'try-nestjs-supertoken',
        apiDomain: 'http://localhost:3000',
        websiteDomain: 'http://localhost:3000',
      },
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
