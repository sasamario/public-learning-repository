const { Prisma, PrismaClient } = require("@prisma/client");
const express = require("express");
const app = express();
const PORT = 8080;

const prisma = new PrismaClient();

// // expressでjsonのミドルウェアを使用（json形式のpostを受け取るため）
app.use(express.json());

// 全てのTodo取得
app.get("/", async(req, res) => {
	const todos = await prisma.todos.findMany();
	return res.json(todos);
});

// 指定のTodoを取得
app.get("/:id", async(req, res) => {
	const id = req.params.id;
	const post = await prisma.todos.findUnique({
		where: {
			id: Number(id),
		},
	});
	return res.json(post);
});

// 指定のFolderと紐づくTodoを取得
app.get("/folder/:folderId", async(req, res) => {
	const folderId = req.params.folderId;
	const post = await prisma.folder.findUnique({
		where: {
			id: Number(folderId),
		},
		// includeを使うことで、リレーションテーブルを結合して取得可能
		include: {
			todos: true,
		},
		// 以下のようにselectで必要なカラムのみ取得も可能
		// select: {
		// 	name: true,
		// 	todos: {
		// 		select: {
		// 			todo: true,
		// 			status: true,
		// 		},
		// 	},
		// },
	});
	return res.json(post);
});

// 指定のTodoと紐づくFolderを取得(生SQL版)
app.post("/folder/rawsql", async(req, res) => {
	const { ids } = req.body;

	const posts = await prisma.$queryRaw`
		SELECT
			Todos.id
			, Todos.todo
			, Folder.name
		FROM
			Todos
		LEFT JOIN
			Folder
		ON
			Todos.folderId = Folder.id
		WHERE
			Todos.id IN (${Prisma.join(ids)})
	`;
	return res.json(posts);
});

// expressで/createに対するpostの受取処理
app.post("/create", async(req, res) => {
	// post値を取得{ todo }とすることで、jsonのtodoの値を取得できる
	const { todo } = req.body;

	// prisma.[Model名].[prisma組み込み関数]
	// create()はprismaの組み込み関数
	const posts = await prisma.todos.create({
		data: {
			folderId: 1, //最初は固定で「1:タスク」とする
			todo: todo,
			status: 0, // status:0 未完了
		}
	});
	return res.json(posts);
});

// Todo更新
app.post("/update", async(req, res) => {
	const {id, folderId, todo, status} = req.body;
	const updateTodo = await prisma.todos.update({
		where: {
			id: Number(id),
		},
		data: {
			folderId: folderId,
			todo: todo,
			status: Number(status),
		},
	});
	return res.json(updateTodo);
});

// Todo削除
app.post("/delete", async(req, res) => {
	const { id } = req.body;
	const deleteTodo = await prisma.todos.delete({
		where: {
			id: Number(id),
		}
	});
	return res.json(deleteTodo);
});

app.listen(PORT, () => {
	console.log(`Server is running at http://localhost:${PORT}`);
});