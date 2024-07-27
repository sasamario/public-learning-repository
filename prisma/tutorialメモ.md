# 概要
[【Prisma入門】次世代ORMで簡単にデータベース管理ができるようになろう](https://www.youtube.com/watch?v=9mE1j1vzUAQ)を視聴し、ローカル環境でprismaに触れてみる。

# ローカル環境構築
ここでは、Node.jsでAPIを用意しPostmanからリクエストする想定。  
prismaを活用し、DBのデータを取得する。

## 環境情報
- Node.js:v20.1.0
- Docker:24.0.7

## 構築手順
1. `npm init -y`でpackage.jsonを用意
2. `npm install prisma express nodemon @prisma/client`で必要なものをインストール
	- prisma:ORM
	- express:Node.jsのフレームワーク
	- nodemon:ソースを監視して、自動でサーバを再起動してくれるツール
	- @prisma/client:DBクライアント
3. `npx prisma init` ※実行した階層に「prisma」というディレクトリが作成される
	- schema.prismaというファイルがいろいろDB関連の定義を行うファイル
4. `npx prisma migrate dev --name init` ※--name initは作成されたマイグレーションファイルの接頭辞として付与される
	- このままだと、エラーになる。原因はどうやらDB接続ユーザにDBの作成権限が必要らしい（prismaのshadow databaseで必要になる。migration操作で利用する一時的なDBらしい。）
	- 暫定対応：dbコンテナ内に入り、userに全権限を付与
		- `GRANT ALL PRIVILEGES ON *.* TO 'user'@'%' WITH GRANT OPTION;`で全権限付与
		- `FLUSH PRIVILEGES;`で権限をリロード
	- 永続対応：Docker起動時にuserの権限を変更するコマンドを実行
5. `npx prisma studio`でprisma studio（DBクライアント）を開き接続確認
6. API側の作り込み
7. postmanを活用し動作確認


## 起動コマンド
`npm start`で起動  
→package.jsonに記載されている。

## 他PCでの環境構築
このリポジトリをcloneして、別途環境構築をする際はprisma.schemaの内容をもとにローカルDBにテーブル構造を反映する必要がある。  
その場合は以下コマンドを実行するとprisma.schemaとDBを同期することができるみたい。ただ、このような使い方であっているのかはわからない...  
```bash
npx prisma db push
```
参考  
[Prototype your schema](https://www.prisma.io/docs/orm/prisma-migrate/understanding-prisma-migrate/mental-model#prototype-your-schema)


## メモ
以下メモ
- `docker container exec -it sample_db bash`でDBコンテナ内に入る
- `mysql -h db -u root -p`でrootユーザとして接続 
- `show grants for user;`でuserの権限を確認
```
mysql> show grants for user;
+----------------------------------------------------+
| Grants for user@%                                  |
+----------------------------------------------------+
| GRANT USAGE ON *.* TO `user`@`%`                   |
| GRANT ALL PRIVILEGES ON `sampledb`.* TO `user`@`%` |
+----------------------------------------------------+
2 rows in set (0.00 sec)
```

■Invalid `prisma.$queryRaw()` invocation: エラーについて  
何かしらSQLの構文エラーによるものと思われる。SQLを見直すこと。


メモ
- API側の実行コマンド:npm start

## ドキュメント　参考サイト
- [Prisma Quickstart](https://www.prisma.io/docs/getting-started/quickstart)
- [Prisma Client CRUD](https://www.prisma.io/docs/orm/prisma-client/queries/crud)

- [【Prisma入門】スキーマ定義で使用するデコレーターあれこれ](https://qiita.com/curry__30/items/95d3655fa23d84b959a3)
- [DockerのMySQLでprisma migrate devが成功する方法](https://zenn.dev/sungvalley/articles/05e5cfd244c9f2)
- [[MySQL]権限の確認と付与](https://qiita.com/shuntaro_tamura/items/2fb114b8c5d1384648aa)
- [[MySQL]ALLとALL PRIVILEGESの違い](https://note.com/ymzk_jp/n/nca7eb8d68d3a)
