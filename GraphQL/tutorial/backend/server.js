// node_modulesにインストールしたパッケージ(apollo-server)のロード
const { ApolloServer, gql } = require("apollo-server");

const books = [
	{
		title: "吾輩は猫である",
		author: "夏目漱石",
	},
	{
		title: "走れメロス",
		author: "太宰治",
	},
];

// GraphQLの問い合わせ定義
// type Book：型の定義
// type Query：問い合わせの定義
const typeDefs = gql`
	type Book {
		title: String,
		author: String
	}
	type Query {
		test: [Book]
	}
`;

const resolvers = {
	// typeDefsで定義した、Queryのtestが実行された時にどんな値を返すのかを定義する
	Query: {
		// resolversはデータ操作を行う関数
		test: () => books,
	},
};

// 第一引数：方定義、第二引数：リゾルバ
const server = new ApolloServer({ typeDefs, resolvers });

// listen()でWeb serverを立ち上げる
server.listen().then(({ url }) => {
	console.log(`Server ready at ${url}`);
});