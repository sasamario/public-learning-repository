## スキーマ設定変更

1. schema.prisma に変更を加える
2. マイグレーションファイル作成、実行　例）`npx prisma migrate dev --name [マイグレーションフォルダ名]`

migrate dev は seed の実行まで一括して行われる。

■ 参考  
[マイグレーション](https://zenn.dev/thirosue/books/49a4ee418743ed/viewer/57d161)

## データ投入

```bash
npx prisma db seed
```

■ 参考  
[Prisma でシードデータを作成](https://zenn.dev/hayato94087/books/e9c2721ff22ac7/viewer/i01qwjendsop5fw#%E3%82%B7%E3%83%BC%E3%83%89%E3%83%87%E3%83%BC%E3%82%BF%E3%82%92%E4%BD%9C%E6%88%90)
