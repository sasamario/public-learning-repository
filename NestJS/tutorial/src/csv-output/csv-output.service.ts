import { Injectable } from '@nestjs/common';
import * as FastCsv from 'fast-csv';
import { createWriteStream } from 'fs';
import { PrismaService } from '../prisma.service';

@Injectable()
export class CsvOutputService {
	constructor(private prisma: PrismaService) {}

	async run() {
		try {
			console.log('csv出力開始');

			const Todos = await this.getAllTodos();
			console.log('%o',Todos); // debug

			const option = {
				headers: ['id', 'Todo名', 'ステータス', '分類'], // ヘッダー名の指定（booleanで設定し、別途定義も可能）
				quote: "'", // 引用符を'とする
				writeBOM: true, // UTF-8 BOMとする
			}

			const csvStream = FastCsv.format(option);

			let row;
			for (const [key, value] of Object.entries(Todos)) {
				row = {
					id: value.id,
					todo: value.todo,
					status: (Number(value.status) === 0) ? '未完了' : '完了', //SQL側で対応もできるが、あくまでも一例として...
					folderName: value.folder.name,
				};
				csvStream.write(this.buildCsvRow(row));
			}
			csvStream.pipe(createWriteStream('./result/output.csv'));
			csvStream.end();

			console.log('csv出力終了');
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

	// 全てのTodoとTodoが属するフォルダー名を取得
	getAllTodos() {
		return this.prisma.todos.findMany({
			include: {
				folder: true,
			},
		});
	}
}
