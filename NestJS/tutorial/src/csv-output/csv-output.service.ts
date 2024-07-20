import { Injectable } from '@nestjs/common';

@Injectable()
export class CsvOutputService {
	constructor() {}

	run() {
		console.log('test');
	}
}
