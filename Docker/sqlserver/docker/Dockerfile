FROM php:8.0-apache

# -----必要パッケージのインストール-----
## git: composerが内部で利用
## unzip, zip: composerがパッケージの展開、処理で利用
## curl: MicrosoftのGPG key取得で利用
## gnupg: Microsoftの署名検証で利用
## ca-certificates: HTTPS通信で必要（HTTPS通信時にサーバ証明を検証）
## libzip-dev: PHPのzip拡張のビルドに必要
## unixodbc: ODBCドライバの動作に必要
## unixodbc-dev: SQL Server用PDO拡張のビルドに必要
## rm -rf /var/lib/apt/lists/*: 不要なキャッシュを削除してイメージサイズを小さくするため
RUN apt-get update && apt-get install -y \
    git \
    unzip \
    zip \
    curl \
    gnupg \
    ca-certificates \
    libzip-dev \
    unixodbc \
    unixodbc-dev \
    && rm -rf /var/lib/apt/lists/*

# -----Apache の DocumentRoot を Laravel public に変更-----
## sedコマンドで /etc/apache2/sites-available/000-default.conf 内の「/var/www/html」を「/var/www/public」に置換している
RUN sed -i 's!/var/www/html!/var/www/public!' \
    /etc/apache2/sites-available/000-default.conf

# -----Laravel 用に mod_rewrite を有効化（ApacheのURL書き換え機能を有効化）-----
## Laravelのルーティングに必要なため
RUN a2enmod rewrite

# -----ODBC Driver for SQL Serverの導入-----
## Microsoftのパッケージをaptでインストールする際に、署名検証を行うため公開鍵（microsoft.asc）を取得している
## gpg --dearmor で.asc形式の鍵をdearmor形式に変換
## 変換した鍵を /usr/share/keyrings/microsoft-prod.gpg（公開鍵保管場所）に保存
RUN curl -fsSL https://packages.microsoft.com/keys/microsoft.asc \
    | gpg --dearmor \
    > /usr/share/keyrings/microsoft-prod.gpg

## Microsoft SQL Server repository を登録（signed-by 指定）。「arch=amd64」はMac M1/M2対応のため明示的に指定している
## aptに対して、Microsoftのパッケージをインストールする際に上記で保存した公開鍵を使って署名検証を行うよう指示している（signed-by）
## https://packages.microsoft.com/debian/11/prod はDebian11用のリポジトリURL、bullseyeはDebian11のコードネーム、mainはリポジトリセクション名
RUN echo "deb [arch=amd64 signed-by=/usr/share/keyrings/microsoft-prod.gpg] \
https://packages.microsoft.com/debian/11/prod bullseye main" \
    > /etc/apt/sources.list.d/mssql-release.list

## ODBC Driver for SQL Serverのインストール
## ACCEPT_EULA=Y を設定して利用規約に同意した上でインストールを実行
RUN apt-get update && \
    ACCEPT_EULA=Y apt-get install -y msodbcsql18 \
    && rm -rf /var/lib/apt/lists/*

# -----PHP標準拡張のインストール-----
## pdo: DB接続の基盤
## zip: Laravelの一部機能で利用
RUN docker-php-ext-install \
    pdo \
    zip

# -----SQL Server 用 PDO 拡張（PHP8.0に対応したバージョンを指定）-----
## peclコマンドで sqlsrv と pdo_sqlsrv をインストールし、有効化
RUN pecl install sqlsrv-5.10.1 pdo_sqlsrv-5.10.1 && \
    docker-php-ext-enable sqlsrv pdo_sqlsrv

# -----Composer インストール-----
## Composer公式イメージからコピー
COPY --from=composer:2 /usr/bin/composer /usr/bin/composer

# -----作業ディレクトリを /var/www に変更-----
WORKDIR /var/www
