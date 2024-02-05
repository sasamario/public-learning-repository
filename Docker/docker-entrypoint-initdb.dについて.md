# docker-entrypoint-initdb.dについて
## docker-entrypoint-initdb.dとは？
MySQLイメージを使用している場合に使えるディレクトリ（多分）。
（てっきりDockerの標準機能だと思っていた...）

- コンテナが初めて起動され、指定された名前の新しいデータベースが作成されるタイミングで指定の拡張子ファイルが実行される
	- `.sh`や`.sql`など
- ファイルはアルファベット順に実行
- ファイルは`/docker-entrypoint-initdb.d/`におけばいい（ホストPC上のファイルをマウントする形）

■参考
- [新しいインスタンスの初期化](https://hub.docker.com/_/mysql)


## 初期データを再投入したい場合
以下の手順でデータの再投入をすることができた！
（ただし既存データは削除する必要があるため、必要に応じてバックアップ等対応が必要）

1. `docker compose down`でコンテナを停止
2. マウントしているホストPC側のDBデータを削除
3. `docker compose up --build -d`でイメージのビルドとコンテナの起動

投入するデータにもよるが、多少時間がかかることがある。

■参考
- [【メモ】docker-entrypoint-initdb.d をもう一回実行したいときはどうする？](https://nplll.com/2023/12/docker-entrypoint-initdb-d-again/)