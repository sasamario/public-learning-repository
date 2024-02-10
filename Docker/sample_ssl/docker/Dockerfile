FROM php:8.1-apache

RUN apt-get update && apt-get install -y 

# 秘密鍵ファイルとサーバ証明書をコンテナ側にコピー
COPY apache/ssl/server.crt /etc/apache2/
COPY apache/ssl/server.key /etc/apache2/
# Apacheの設定ファイルをsites-availableにコピーし、a2ensiteで有効化（sites-enabledにシンボリックリンクを作成）
COPY apache/config/default-ssl.conf /etc/apache2/sites-available/default-ssl.conf

# a2enmodでsslモジュールを有効化
# default-ssl.confの有効化
RUN a2enmod ssl \
    && a2ensite default-ssl