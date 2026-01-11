# Docker Compose コマンド

## コンテナ操作

■ コンテナ内に入る（bash）

```bash
docker compose exec -it [サービス名] bash
```

■ コンテナ内でコマンド実行

```bash
# dpcler compose exec [サービス名] [コマンド]
# 例）webサービスコンテナ内でartisanコマンド実行
docker compose exec web php artisan tinker
```

## ビルド関連

■ ビルド

```bash
docker compose build
```

■ ビルド（キャッシュなし）
Dockerfile を修正した場合などは、--no-cache を使って再ビルドすること。

```bash
docker compose build --no-cache
```

## 起動、停止

■ コンテナ起動（フォアグラウンド）

```bash
docker compose up
```

※フォアグラウンドは、ターミナルを占有して実行される

■ コンテナ起動（バックグラウンド）

```bash
docker compose up -d
```

※バックグラウンドは、ターミナルを占有せず裏で実行される

■ コンテナ起動（+ビルド）

```bash
docker compose up --build
```

■ コンテナ停止

```bash
docker compose down
```

■ コンテナ停止（ボリュームは削除）

```bash
docker compose down -v
```

## 状態・ログ確認

■ 起動中のサービス一覧

```bash
docker compose ps
```

■ 全サービスのログ

```bash
docker compose logs
```

■ 特定サービスのログ

```bash
docker compose logs [サービス名]
```
