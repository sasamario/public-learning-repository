# 概要
学習中に使用したコマンドをまとめていく。

```shell
# 雛形です
```

# コマンド
```shell
# localhostのmysqlサーバに接続（データベース名はなくても良いがここで指定可能）
mysql -u [ユーザ名] -p [データベース名]
```

```shell
# DB一覧表示
show databases;
```

```shell
# DB選択
use [DB名];
```

```shell
# 現在使用しているDBの取得
select database();
```

```shell
# テーブル一覧の表示
show tables;
```

```shell
# テーブル設計の確認
desc [テーブル名];
```

```shell
# 特定のユーザの権限確認
show grants for [ユーザー名]@[ホスト名]
```




# 参考
- [よく使うMySQLコマンド&構文集](https://qiita.com/CyberMergina/items/f889519e6be19c46f5f4)
- [[MySQL]権限の確認と付与](https://qiita.com/shuntaro_tamura/items/2fb114b8c5d1384648aa)