# よく使うオプション

| オプション | 説明                                     | 使用例                                |
| ---------- | ---------------------------------------- | ------------------------------------- |
| `-X`       | HTTP メソッドを指定（GET/POST など）     | `-X POST`                             |
| `-H`       | HTTP ヘッダを追加（Content-Type など）   | `-H "Content-Type: application/json"` |
| `-d`       | リクエストボディを送信（POST など）      | `-d '{"name":"Taro"}'`                |
| `-i`       | レスポンスヘッダも表示                   | ステータスコードなどを確認したいとき  |
| `-u`       | ベーシック認証（ユーザー名とパスワード） | `-u username:password`                |

# 使用例

## GET リクエストで API の疎通確認

```bash
curl -i http://localhost:3000/api/users
```

- `-i`：レスポンスヘッダを表示
- GET はデフォルトなので、`-X GET`は省略可

## POST リクエスト（Bearer トークンを指定）

```bash
curl -X POST http://localhost:3000/api/protected \
  -H "Authorization: Bearer YOUR_ACCESS_TOKEN" \
  -H "Content-Type: application/json" \
  -d '{"title": "New Task", "completed": false}'
```

- `Authorization: Bearer ...`でアクセストークンによる認証
- json データ送信時は`-H "Content-Type: application/json"`を忘れずに
- 複数行のコマンドは`\`でつなぐ

## POST リクエスト（Basic 認証）

```bash
curl -X POST http://localhost:3000/api/login \
  -u username:password \
  -H "Content-Type: application/json" \
  -d '{"remember": true}'
```

- `-u`：username:password 形式で指定
