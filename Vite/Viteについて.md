# 参考

- [Vite 公式 guide](https://ja.vite.dev/guide/)

# Vite(ヴィート)とは

高速、軽量なフロントエンド開発ツール（ビルドツール）。

- 役割：開発用のビルド、開発サーバーツール
- 用途：TypeScript や React,Vue などを使った Web アプリ開発

# 使い方

## Vite でのプロジェクト作成手順

### 1. プロジェクト作成

```bash
# 対話式でプロジェクト作成
npm create vite@latest

# テンプレートを直接指定（以下はReact + TypeScript）　※-- --　とすることでViteコマンドの引数として認識される
npm create vite@latest [プロジェクト名] -- --template react-ts
```

テンプレートは他にもいろいろある。

- vanilla：プレーンな HTML + JavaScript
- vanilla-ts：プレーンな HTML + TypeScript
- vue-ts：Vue3 + TypeScript
- react-ts：React + TypeScript

■ 参考

- [最初の Vite プロジェクトを生成する](https://ja.vite.dev/guide/#%E6%9C%80%E5%88%9D%E3%81%AE-vite-%E3%83%95%E3%82%9A%E3%83%AD%E3%82%B7%E3%82%99%E3%82%A7%E3%82%AF%E3%83%88%E3%82%92%E7%94%9F%E6%88%90%E3%81%99%E3%82%8B)

### 2. 依存関係のインストール

```bash
# 作成したプロジェクトに移動
cd my-app

# 依存関係のインストール
npm install
```

React や Vite など必要なライブラリがインストールされる

### 3. 開発サーバの起動

```bash
npm run dev
```

以下で初期画面が表示される。  
http://localhost:5173

## フォルダ構成の確認

```
my-app/
├── index.html         // アプリのHTML（Reactを読み込むベース）
├── src/               // 実際のアプリコード（ここを編集）
│   ├── App.tsx        // アプリのメインコンポーネント
│   ├── main.tsx       // Reactをブラウザに描画する起点
│   ├── index.css      // 全体に適用するCSS
│   └── assets/        // 画像やアイコンなど
├── package.json       // npm依存関係
├── tsconfig.json      // TypeScript設定
└── vite.config.ts     // Viteの設定
```

開発は主に src 内で行う。
