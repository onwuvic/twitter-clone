import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './modules/auth/auth.module';
import { ProfilesModule } from './modules/profiles/profiles.module';
import { UsersModule } from './modules/users/users.module';

@Module({
  imports: [AuthModule, ProfilesModule, UsersModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
