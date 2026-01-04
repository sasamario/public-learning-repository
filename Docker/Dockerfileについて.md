# Dockerfile について

Dockerfile とは、Docker イメージの設計図。  
Docker は Dockerfile に書かれた命令を読み込み、イメージを構築する。

- どの OS を使うか
- 何をインストールするか
- どんな設定をするか
- コンテナ起動時に何を実行するか

といった命令が記載される。

# Dockerfile のディレクティブ

ディレクティブは命令。以下のディレクティブがある。

| ディレクティブ | 役割・意味                                         | 実行タイミング |
| -------------- | -------------------------------------------------- | -------------- |
| `FROM`         | ベースとなるイメージを指定する                     | ビルド時       |
| `RUN`          | コンテナ内でコマンドを実行し、環境を構築する       | ビルド時       |
| `COPY`         | ホストのファイル・ディレクトリをイメージにコピー   | ビルド時       |
| `ADD`          | COPY + 追加機能（URL 取得、tar 自動展開）          | ビルド時       |
| `WORKDIR`      | 以降の作業ディレクトリを指定                       | ビルド時       |
| `ENV`          | 環境変数を設定（起動時も有効）                     | ビルド時       |
| `EXPOSE`       | コンテナが使用するポートを宣言（実際には開かない） | ビルド時       |
| `VOLUME`       | 永続化するディレクトリを定義                       | ビルド時       |
| `CMD`          | コンテナ起動時の**デフォルト**コマンド             | 起動時         |
| `ENTRYPOINT`   | コンテナ起動時の**固定コマンド**                   | 起動時         |

## FROM

FROM は Docker イメージの土台となるものを指定するもの。そのため Dockerfile では、基本的に FROM 命令で始める必要がある（ARG は除く）。

```dockerfile
# 例）phpのイメージ、バージョンが8.2、バリアント（派生）がapache
FROM php:8.2-apache
```

■ 参考

- [FROM](https://docs.docker.jp/engine/reference/builder.html#from)

## RUN

RUN は、Docker イメージを作る途中（ビルド時）に、コンテナ内でコマンドを実行するディレクティブ。ビルド時のみ実行される。  
RUN を一番利用する使い方が、パッケージをインストールする際に実行する apt-get。

```dockerfile
# それぞれでRUNを指定
RUN apt-get update
RUN apt-get install -y curl

# 1つのRUNでまとめる（推奨）
RUN apt-get update \
 && apt-get install -y curl \
 && rm -rf /var/lib/apt/lists/*
```

Docker イメージは前提としてレイヤーを上に重ねていく仕組み。  
RUN をまとめることが推奨される理由としては、RUN を分けて実行した場合、レイヤーが分かれてしまうため例えばレイヤー 2 からではレイヤー 1 のファイルを消すことができない。  
RUN を 1 つにまとめた場合、以下のように同じレイヤー内で update→install→ 削除ができるためイメージが軽くなる。

apt-get update によって大量のパッケージリストを作るためサイズが大きくなってしまうので、install 後に rm コマンドで削除する（install 後は不要になるため）。  
※apt-get update とは、インストール可能なパッケージ一覧を最新化するコマンド。一覧はローカルの/var/lib/apt/lists/　に保存される。

```
[ レイヤー① ]
update → install → 不要ファイル削除
（最終状態だけ保存）
```

■ 参考

- [RUN](https://docs.docker.jp/develop/develop-images/dockerfile_best-practices.html#run)

## COPY

COPY は、ホストのファイルを Docker イメージに取り込むディレクティブ。  
COPY も RUN と同様にビルド時に実行され、またレイヤーを作る。

```dockerfile
COPY [コピー元] [コピー先]
```

- コピー元：ビルドコンテキスト内のみ指定可能
  - ビルドコンテキストとは、docker の build 時にアクセスできるファイル群。compose.yml で`context: .`と指定していたらカレントディレクトリ
  - <ビルドコンテキスト>/src/index.php のように相対パスで指定するのが基本
  - `COPY *.json /app/`のようにワイルドカードを使うことができる
- コピー元：コンテナ内のパス
  - 絶帝パスまたは、WORKDIR からの相対パスで指定することが可能

### ★ ディレクトリコピー時の末尾の「/」の有無に注意

`/`の有無で、ディレクトリごとか中身のみコピーするのか変わるため注意すること。

```dockerfile
# 末尾に/なし
## 結果：/app/src/... app内にsrcフォルダをコピー
COPY src /app

# 末尾に/あり
## 結果：/app/(srcの中身だけ入る)
COPY src /app/
```

### ★ 別イメージからのコピー

Laravel の環境構築をする際に、以下のようにしてコンポーザーの導入を行った。

```dockerfile
COPY --from=composer:2.7 /usr/bin/composer /usr/bin/composer
```

これは--from で composer のイメージを指定して、composer の実行ファイル(/user/bin/composer)をイメージ(/user/bin/composer)にコピーしている。  
composer のイメージから自身のイメージにコピーしているため、ホストは経由していない。

curl で composer をインストールするのと異なり、composer の実行ファイルのみコピーしてくることでイメージのサイズが最小限で済むということ。

■ 参考

- [COPY](https://docs.docker.jp/engine/reference/builder.html#copy)
- [docker build コマンドでなんとなく指定している context を理解する](https://zenn.dev/levtech/articles/docker-build)

# 参考

- [Dockerfile を書くベストプラクティス](https://docs.docker.jp/develop/develop-images/dockerfile_best-practices.html)
