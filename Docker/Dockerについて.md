# Docker とは

一言で言うと「コンテナ型の仮想化技術」

### 従来の仮想化（ホスト型）

従来の仮想化（ホスト型）は、ホスト OS 上に仮想化ソフト/ハイパーバイザを使用して、仮想マシン/ゲスト OS を立ち上げ、その仮想マシンの中でミドルウェアの環境構築をし、プログラムを実行してアプリケーションを動かすという構造。  
※ハイパーバイザとは、1 台の物理コンピュータ上で複数の仮想マシン（VM）を動かしそれらを管理するためのソフトウェア

### Docker（コンテナ型）

従来のホスト型とは異なり、ゲスト OS を起動せずにホスト OS の上に動作している Docker Engine からコンテナと呼ばれるミドルウェアの環境構築がされた実行環境を作成し、その中でアプリケーションを動作させる。そのため軽量に動作する。

# Docker におけるデータ管理技術

Docker で起動したコンテナ内で扱うデータは、読み書き可能なレイヤーに置くこともできるが以下のデメリットがある

- コンテナが削除されたらデータが消えてしまう
- コンテナ間でデータ共有ができない
- コンテナレイヤーへデータ書き込みは通常のファイルシステムと異なるユニオンファイルシステムが使われているため、書き込み速度が遅い

そのため、Docker ではホストマシン上にデータを管理し、それをコンテナにマウントする手法が使われる。  
具体的には「volume」「bind mount」「tmpfs mount」といったものがある。

## volume

Docker が管理する永続データ領域。

■ 特徴

- コンテナの外に存在する
  - 保存場所は通常、「/var/lib/docker/volumes/...」のように、コンテナ内からは普通のディレクトリに見えるが実際はホスト上の Docker 専用領域にある
- コンテナを削除してもデータは残る
  - 意図的にボリュームを削除するオプションをつけない限り、コンテナを削除してもボリュームは残る
- コンテナ間で共有可能

■ volume の指定方法  
以下は compose.yml で指定する方法（抜粋）。docker コマンドでも作成はできるがここでは省略する。

```yml
volumes:
  - my-volume:/app/data
```

左側の「my-volume」はボリューム名でなんでも良い。  
右側のパスはコンテナ内のパス。そこにマウントされる。

■volume の管理コマンド

```bash
# volumeの一覧確認
docker volume ls

# volumeの詳細を確認
docker volume inspect [volume名]

# volume を削除
docker volume rm [volume名]
```

## bind mount

## tmpfs mount

# 参考サイト

https://qiita.com/etaroid/items/b1024c7d200a75b992fc
https://qiita.com/etaroid/items/88ec3a0e2d80d7cdf87a
https://qiita.com/etaroid/items/40106f13d47bfcbc2572
https://zenn.dev/yamato_snow/articles/7ff2f3d4dd7055
