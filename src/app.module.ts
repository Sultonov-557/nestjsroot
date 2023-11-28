import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DBConfig } from './common/config/db.config';

@Module({
  imports: [TypeOrmModule.forRoot(DBConfig)],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
