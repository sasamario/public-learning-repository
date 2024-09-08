// import "./assets/main.css";

import { createApp } from "vue";
import App from "./App.vue"; // ルートコンポーネントをインポートしている

const app = createApp(App); // アプリケーションのインスタンスを作成
app.mount("#app"); // mount()でid="app"の要素とVueアプリを紐づけている
