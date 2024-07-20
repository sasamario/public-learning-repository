import { Module } from '@nestjs/common';
import { CsvOutputService } from './csv-output.service';

@Module({
  providers: [CsvOutputService]
})
export class CsvOutputModule {}
