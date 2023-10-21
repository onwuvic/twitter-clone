import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';

import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from 'modules/auth/auth.module';
import { ProfilesModule } from 'modules/profiles/profiles.module';
import { UsersModule } from 'modules/users/users.module';
import { DatabaseModule } from 'core/database/database.module';
import databaseConfig from 'core/database/database.config';

@Module({
  imports: [
    ConfigModule.forRoot({
      load: [databaseConfig],
    }),
    AuthModule,
    ProfilesModule,
    UsersModule,
    DatabaseModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
