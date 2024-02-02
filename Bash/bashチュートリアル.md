# 概要
MicrosoftのトレーニングというところにBashの概要というものがあったため、これを参考に学習を進めていく。
https://learn.microsoft.com/ja-jp/training/modules/bash-introduction/


## 2.Bashとはなんですか
https://learn.microsoft.com/ja-jp/training/modules/bash-introduction/1-what-is-bash

### 要点
- シェル：OSに操作を実行するよう命令する「プログラム」
- PowerShellやBashはシェルに含まれる
- Linuxのシェルには、bashやcsh、zshなどがあり、BashがLinuxの事実上の標準らしい



## 3.Bashの基礎
https://learn.microsoft.com/ja-jp/training/modules/bash-introduction/2-bash-fundamentals

### 要点
汎用コマンドの中のいくつかを見ていく

■ls
ファイルやディレクトリの一覧を表示するコマンド。

```bash
ls [オプション] [ファイル/ディレクトリ等]
```
よく使うオプション
`-a`：ドットファイル含め表示 例）.gitignore .htaccess
`-l`：詳細情報を表示
このオプションは常時使うくらいのイメージ。合わせて`-la`として使う。他オプションは以下記事を参考にすると良い。
[ls コマンド 【使い方 まとめ】](https://tech-blog.rakus.co.jp/entry/20220921/ls)


■man
コマンドやディレクトリ等のマニュアルを表示できる。
ただ情報量が多く見づらい印象...普通にコマンドごと調べればいいような気がした

```
man [調べる対象]
```

```
man mkdir
```

[manコマンドについて詳しくまとめました 【Linuxコマンド集】](https://eng-entrance.com/linux-command-man)


## 4.Bashのコマンドと演算子
https://learn.microsoft.com/ja-jp/training/modules/bash-introduction/3-bash-commands

### 要点
■cat
ファイルの内容を確認。
内容を表示するだけなので、エディターで開いて間違えて修正するみたいなことはない点安心！

```
cat [オプション] [ファイル名]
```
-n:行番号を表示
-b:空白行を飛ばして行番号を表示

[catコマンドとは？Linuxコマンドでファイルの中身を確認する方法をご紹介](https://academy.gmocloud.com/wp/lesson/20191111/8091)

■sudo
一般ユーザに対して、「コマンド実行」の単位でroot権限を与える。
ほとんどの場合はroot権限で実行する必要はないので、必要以上に使うことは避けた方が無難。

sudoコマンドを実行する度にログが記録されるため、root権限を使ったコマンドの実行を後から確認する監査を行うことができる。
[sudoコマンドについて理解する](https://linuc.org/study/column/4047/)

■rm
ファイルやディレクトリの削除をするコマンド。
```
rm [ファイル、ディレクトリ]
```
-i:削除前に確認
-f:強制（確認なし）
-r:ディレクトリを再起的（ディレクトリ内も）

これらのオプションを見て分かる通り、`rm -rf /`とかやってしまうと大変なことになる。
基本使うなら-iオプションは使うようにして、-rや-fは使わない方が良さそう。