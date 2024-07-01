const { PrismaClient } = require("@prisma/client");
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

// expressで/createに対するpostの受取処理
app.post("/create", async(req, res) => {
	// post値を取得{ todo }とすることで、jsonのtodoの値を取得できる
	const { todo } = req.body;

	// prisma.[Model名].[prisma組み込み関数]
	// create()はprismaの組み込み関数
	const posts = await prisma.todos.create({
		data: {
			todo: todo,
			status: 0, // status:0 未完了
		}
	});
	return res.json(posts);
});

// Todo更新
app.post("/update", async(req, res) => {
	const {id, todo, status} = req.body;
	const updateTodo = await prisma.todos.update({
		where: {
			id: Number(id),
		},
		data: {
			todo: todo,
			status: Number(status),
		},
	});
	return res.json(updateTodo);
});

app.listen(PORT, () => {
	console.log(`Server is running at http://localhost:${PORT}`);
});