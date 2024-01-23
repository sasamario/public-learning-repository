# docker


### 


## dockerコンテナ内に入る
```
docker container exec -it [コンテナ名] bash
```

■参考
- [docker container](https://docs.docker.jp/engine/reference/commandline/container.html)



***
# docker-compose
## dockerイメージのビルド
```
docker-compose build
```
dockerfileからdockerイメージを構築


```
docker-compose build --no-cache
```
--no-cache：イメージの構築時、キャッシュを使用しない
Dockerfileを更新した等の理由でキャッシュを使いたくない場合はこちらのオプションをつける。

■参考
- [docker-compose build](https://docs.docker.jp/compose/reference/build.html)

## コンテナ一覧の表示
```
docker-compose ps
```
-a：停止済みのコンテナを全て表示
-q：ID飲み表示

参考
- [docker-compose ps](https://docs.docker.jp/compose/reference/ps.html)


## コンテナ構築〜起動
```
docker-compose up -d
```
-d：バックグラウンド実行

```
docker-compose up --build
```
--build：コンテナを開始前にイメージを構築


■参考
- [docker-compose up](https://docs.docker.jp/compose/reference/up.html)


## コンテナの停止
```
docker-compose down
```
コンテナを停止し、upで作成したコンテナ、ネットワーク、ボリューム、イメージを削除

■参考
- [docker-compose down](https://docs.docker.jp/compose/reference/down.html)




***
# 参考
- [初心者向けdocker-composeコマンド逆引き](https://qiita.com/okyk/items/a374ddb3f853d1688820)
- [docker-compose 'up' とか 'build' とか 'start' とかの違いを理解できていなかったのでまとめてみた](https://qiita.com/tegnike/items/bcdcee0320e11a928d46)