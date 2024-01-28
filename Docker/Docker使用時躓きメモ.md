# 概要
Dockerで環境構築時に躓いたこと、学んだことをここにざっくりとメモしていく。


# Apacheサーバ設定ファイルの置き場所について
Dockerで環境構築時、さまざまなLinuxディストリビューションがありどれかを使うことになる。
使用するものによってApacheサーバの設定ファイル場所が異なるらしい。

以下は参考記事（Dockerに慣れながら学ぶApacheサーバの基礎）から引用。
```
# --- RedHat系 ---
/etc/httpd/
 |_ conf/
 |  |_ httpd.conf # メイン設定ファイルで /etc/httpd/conf.d/*.conf ファイルを include する
 |                ## ※ このファイル自体を編集することは基本的にない
 |_ conf.d/ # ユーザ設定ファイルを置くディレクトリ
            ## カスタマイズ設定は、この中に .conf ファイル作成して記述する


# --- Debian系 ---
/etc/apache2/
 |_ apache2.conf # メイン設定ファイルで以下の設定ファイルをincludeする
 |               ## - /etc/apache2/mods-enabled/*.conf
 |               ## - /etc/apache2/sites-enabled/*.conf
 |               ## - /etc/apache2/conf.d/*.conf
 |               ## - /etc/apache2/ports.conf
 |               ## ※ このファイル自体を編集することは基本的にない
 |
 |_ ports.conf # ポート設定（デフォルトでは80番ポートを開いている）
 |
 |_ mods-enabled/     # 現在有効なApache2のモジュールを置くディレクトリ
 |  |_ (*.conf) <───┐ ## 通常、この中に直接 .conf ファイルを作成することはない
 |                  │
 |                  │ # <= a2enmod コマンドで mods-available/*.conf のリンクを貼ることで設定を有効化する
 |                  │
 |_ mods-available/ │ # Apacheにインストールされた（利用可能な）モジュール置き場
 |  |_ *.conf ──────┘
 |
 |_ sites-enabled/     # 現在有効なWebサイト固有設定を置くディレクトリ
 |  |_ (*.conf) <────┐ ## 通常、この中に直接 .conf ファイルを作成することはない
 |                   │
 |                   │ # <= a2ensite コマンドで sites-available/*.conf のリンクを貼ることで設定を有効化する
 |                   │ ## ※ 000-default.conf だけは最初からリンクが貼られている（有効化されている）
 |                   │
 |_ sites-available/ │ # 利用可能なWebサイト固有設定ファイル置き場
 |  |_ *.conf ───────┘
 |
 |_ conf.d/ # Apache追加設定ファイルを置くディレクトリ
```

■参考
- [Dockerに慣れながら学ぶApacheサーバの基礎](https://qiita.com/amenoyoya/items/cb8bea4315447baf7a81)