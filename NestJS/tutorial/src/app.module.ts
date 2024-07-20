import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CsvOutputModule } from './csv-output/csv-output.module';

@Module({
  imports: [CsvOutputModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
