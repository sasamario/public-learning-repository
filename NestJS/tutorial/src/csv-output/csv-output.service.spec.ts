import { Test, TestingModule } from '@nestjs/testing';
import { CsvOutputService } from './csv-output.service';

describe('CsvOutputService', () => {
  let service: CsvOutputService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [CsvOutputService],
    }).compile();

    service = module.get<CsvOutputService>(CsvOutputService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
