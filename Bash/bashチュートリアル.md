# 概要
MicrosoftのトレーニングというところにBashの概要というものがあったため、これを参考に学習を進めていく。
https://learn.microsoft.com/ja-jp/training/modules/bash-introduction/


## Bashとはなんですか
https://learn.microsoft.com/ja-jp/training/modules/bash-introduction/1-what-is-bash

### 要点
- シェル：OSに操作を実行するよう命令する「プログラム」
- PowerShellやBashはシェルに含まれる
- Linuxのシェルには、bashやcsh、zshなどがあり、BashがLinuxの事実上の標準らしい



## Bashの基礎
https://learn.microsoft.com/ja-jp/training/modules/bash-introduction/2-bash-fundamentals

## 要点
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