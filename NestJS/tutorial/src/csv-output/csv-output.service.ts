import { Injectable } from '@nestjs/common';
import * as FastCsv from 'fast-csv';
import { createWriteStream } from 'fs';

@Injectable()
export class CsvOutputService {
	constructor() {}

	run() {
		try {
			// テストデータ（ゆくゆくはPrismaでDBから取得）
			const testData = [
				{
					id: 1,
					todo: 'Todoテスト1',
					status: 0, // 未完了
					folderName: 'その他',
				},
				{
					id: 2,
					todo: 'Todoテスト2',
					status: 1, // 完了
					folderName: '雑務',
				},
				{
					id: 3,
					todo: 'Todoテスト3',
					status: 0, // 未完了
					folderName: 'その他',
				},
			];

			const option = {
				headers: ['id', 'Todo名', 'ステータス', '分類'], // ヘッダー名の指定（booleanで設定し、別途定義も可能）
				quote: "'", // 引用符を'とする
				writeBOM: true, // UTF-8 BOMとする
			}

			const csvStream = FastCsv.format(option);

			let row;
			for (const [key, value] of Object.entries(testData)) {
				row = {
					id: value.id,
					todo: value.todo,
					status: (Number(value.status) === 0) ? '未完了' : '完了', //SQL側で対応もできるが、あくまでも一例として...
					folderName: value.folderName,
				};
				csvStream.write(this.buildCsvRow(row));
			}
			csvStream.pipe(createWriteStream('./result/output.csv'));
			csvStream.end();
			console.log('finish');
		} catch(error) {
			console.log(error);
		}
		
	}

	buildCsvRow(row) {
		const csvRow = {
			'id': row.id,
			'Todo名': row.todo,
			'ステータス': row.status,
			'分類': row.folderName,
		};

		return csvRow;
	}
}
