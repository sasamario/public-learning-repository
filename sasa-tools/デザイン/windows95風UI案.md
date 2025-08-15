# Windows95 風デザイン案

React95 という React 用の Windows95 風の UI を提供するパッケージがある。こちらを使う想定。  
React95 Github：https://github.com/React95/React95  
React95 npm：https://www.npmjs.com/package/@react95/core

## 導入パッケージ

1. @react95/core
2. @react95/icons
3. react-draggable

### 導入

```bash
npm install @react95/core @react95/icons react-draggable
```

参考：https://www.npmjs.com/package/@react95/core

### 1. @react95/core

React95 のコアパッケージ。UI コンポーネントが含まれている。

npm：https://www.npmjs.com/package/@react95/core

### 2. @react95/icons

React95 のアイコンセット。

npm：https://www.npmjs.com/package/@react95/icons

### 3. react-draggable

要素をドラッグ&ドロップする機能を導入するためのもの。

## アイコンの使用方法

以下で使用できるアイコンを確認することができる。  
https://react95.github.io/React95/?path=/story/icon--all

使用する際は以下のように import することで使用することができる。

```js
import { Folder } from "@react95/icons";

<Folder style={{ fontSize: "32px", color: "white" }} />;
```
