import { Module } from '@nestjs/common';
import { CsvOutputService } from './csv-output.service';
import { PrismaService } from '../prisma.service'; 

@Module({
  providers: [CsvOutputService, PrismaService]
})
export class CsvOutputModule {}
