# docker
## コンテナ内に入る
```
docker container exec -it [コンテナ名] bash
```

■参考
- [docker container](https://docs.docker.jp/engine/reference/commandline/container.html)

## コンテナのログを確認
```
docker logs [コンテナ名]
```

■参考
- [docker logs](https://docs.docker.jp/engine/reference/commandline/logs.html)



## ホストとコンテナ間のファイルコピー
・コンテナ内ファイル → ホストPCにコピー 
```
docker cp [コンテナ]:[コンテナ内ソースパス] [ホストPC内ソースパス] 
```
例）以下はsample-httpsというコンテナ内の000-default.confをdokcer-compose.ymlと同階層に000-default.confという名前でコピー作成している。
`docker cp sample-https:/etc/apache2/sites-available/000-default.conf .000-default.conf`

■参考
- [Dockerでホストとコンテナ間でのファイルコピー](https://qiita.com/gologo13/items/7e4e404af80377b48fd5)
- [docker cp](https://docs.docker.jp/engine/reference/commandline/cp.html)


***
# docker compose
## docker-composeとdocker composeの違い
結論：どちらも同じコマンドは使えるが、`docker compose`の使用を推奨。

理由としては、docker compose V1が非推奨となったらしく、`docker-compose`はV1の書き方。
docker compose V2からは`docker compose`コマンドが使えるようになったためこちらを使う方が良いのではないか。

■参考
- [docker-composeコマンドは、docker composeとも書ける](https://www.konosumi.net/entry/2023/02/26/142508)
- [Docker Compose V2(Version 2) GA のまとめ](https://qiita.com/zembutsu/items/d82b2ae1a511ebd6a350)


## dockerイメージのビルド
```
docker compose build
```
dockerfileからdockerイメージを構築


```
docker compose build --no-cache
```
--no-cache：イメージの構築時、キャッシュを使用しない
Dockerfileを更新した等の理由でキャッシュを使いたくない場合はこちらのオプションをつける。

■参考
- [docker-compose build](https://docs.docker.jp/compose/reference/build.html)

## コンテナ一覧の表示
```
docker compose ps
```
-a：停止済みのコンテナを全て表示
-q：ID飲み表示

参考
- [docker-compose ps](https://docs.docker.jp/compose/reference/ps.html)


## コンテナ構築〜起動
```
docker compose up -d
```
-d：バックグラウンド実行

```
docker compose up --build
```
--build：コンテナを開始前にイメージを構築


■参考
- [docker-compose up](https://docs.docker.jp/compose/reference/up.html)


## コンテナの停止
```
docker compose down
```
コンテナを停止し、upで作成したコンテナ、ネットワーク、ボリューム、イメージを削除

■参考
- [docker-compose down](https://docs.docker.jp/compose/reference/down.html)


## コンテナの再起動
```
docker compose restart
```
コンテナを再起動する。
backgroundで起動していた場合はこのコマンドで、コンテナはそのままでソースコードの変更だけ反映可能とのこと

■参考
- [初心者向けdocker-composeコマンド逆引き](https://qiita.com/okyk/items/a374ddb3f853d1688820)
- [docker compose restart](https://docs.docker.jp/engine/reference/commandline/compose_restart.html)


***
# 参考
- [初心者向けdocker-composeコマンド逆引き](https://qiita.com/okyk/items/a374ddb3f853d1688820)
- [docker-compose 'up' とか 'build' とか 'start' とかの違いを理解できていなかったのでまとめてみた](https://qiita.com/tegnike/items/bcdcee0320e11a928d46)