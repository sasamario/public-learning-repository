import { NestFactory } from '@nestjs/core';
import { AppModule } from '../app.module';
import { CsvOutputService } from './csv-output.service';

async function main() {
  const app = await NestFactory.create(AppModule);

  // 静的モジュールからプロバイダーのインスタンスを取得
  const csvOutputService = app.get(CsvOutputService);
  // script実行
  csvOutputService.run();
}
main();
