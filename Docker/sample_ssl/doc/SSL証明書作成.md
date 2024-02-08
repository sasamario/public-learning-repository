# SSL証明書作成
以下記事を参考に実施
- [【Apache】ローカルに立てたDockerコンテナでHTTPS通信する方法](https://www.engilaboo.com/apache-docker-https/)

## 1. 秘密鍵の作成
```bash
openssl genrsa -aes128 2048 > server.key
```

パスワードの入力を求められるので適当に入力

例）password

・opensslコマンド
Unix系のOSで標準で利用できる暗号化関連を幅広くサポートするプログラム。秘密鍵と公開鍵のペアの作成及び管理、自己署名証明書の作成 等。

- genrsa：RSA暗号方式の秘密鍵作成
- -aes128：128ビットのAES形式で暗号化
- 2048：2048バイト長の鍵


■参考
- [SSL・EV SSL サーバー証明書 サポート](https://rms.ne.jp/sslserver/basis/openssl_command/)
- [3.3.1 opensslコマンドについて](https://docs.oracle.com/cd/E39368_01/security/ol_openssl_sec.html)


## 2. CSRファイルの作成
```bash
openssl req -new -key server.key > server.csr
```

コマンド実行をすると、顧問ネーム等の情報の入力が求められる。
Country Name：JP
Common name：samplessl

・CSRファイルとは
秘密鍵を元に作った公開鍵ファイルにコモンネームなどの情報を付加したもの

- req：CSRファイルを作成する際に指定
- -new：CSRを新規作成
- -key：秘密鍵ファイルを指定


## 3. サーバ証明書の作成
```bash
openssl x509 -in server.csr -days 365 -req -signkey server.key > server.crt
```

- x509：X.509形式の証明書を発行
- -in server.csr：CSRファイルを指定
- -days 365：証明書の有効期限を指定
- -req：入力ファイルがCSRファイルであることを示す
- -signkey server.key：秘密鍵ファイルを指定


## 4. Apache起動時のパスフレーズ入力を省略（任意）
```bash
mv server.key server.key.org
openssl rsa -in server.key.org > server.key
```

TODO：コマンドの意味について調べてから必要に応じて実行する（とりあえずは実行しない）


## 参考
- [SSL証明書のファイル形式と作成方法まとめ](https://medicalfields.jp/blog/apache/ssl%E8%A8%BC%E6%98%8E%E6%9B%B8%E3%81%AE%E3%83%95%E3%82%A1%E3%82%A4%E3%83%AB%E5%BD%A2%E5%BC%8F%E3%81%A8%E4%BD%9C%E6%88%90%E6%96%B9%E6%B3%95%E3%81%BE%E3%81%A8%E3%82%81/)