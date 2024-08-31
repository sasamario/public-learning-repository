# 概要
以下記事を参考に、Vue.js公式ドキュメントのチュートリアルをやってみる。  
[【Vue.js】今、ゼロから Vue を学び始めるならこうやるといいんじゃないか (2024) 【初学者向け】
](https://zenn.dev/comm_vue_nuxt/articles/start-to-learn-vue-2024)


# チュートリアル
[チュートリアル](https://ja.vuejs.org/tutorial/#step-1)

## 宣言的レンダリングとは
レンダリングする対象をテンプレートに宣言的に記述することで、データを変更する度に、ユーザー入力によるデータの同期とリアクティブなDOMレンダリングが可能になる。Vue.js本体に備わる機能。  
[Vue.js入門準備](https://qiita.com/mackeyTA/items/039e916e0b0b24b3e399#:~:text=%EF%BC%91.%E5%AE%A3%E8%A8%80%E7%9A%84%E3%83%AC%E3%83%B3%E3%83%80%E3%83%AA%E3%83%B3%E3%82%B0%EF%BC%88Declarative,js%E6%9C%AC%E4%BD%93%E3%81%AB%E5%82%99%E3%82%8F%E3%82%8B%E6%A9%9F%E8%83%BD%E3%80%82)

## 属性バインディング　v-bind
```html
<h1 v-bind:class="titleClass">テスト</h1>

<!-- 省略形 -->
<h1 :class="titleClass">テスト</h1>
```
これが属性バインディング。よく使うので省略形を覚えておくとよさそう。

## イベントリスナー　v-on
```html
<button v-on:click="increment">{{ count }}</button>

<!-- 省略形 -->
<button @click="increment">{{ count }}</button>
```

## フォームバインディング
[フォームバインディング](https://ja.vuejs.org/tutorial/#step-5)

```html
<script setup>
import { ref } from 'vue'

const text = ref('')

function onInput(e) {
  text.value = e.target.value
}
</script>

<template>
  <input :value="text" @input="onInput" placeholder="Type here">
  <p>{{ text }}</p>
</template>
```
上記例では、属性バインディング（v-bind）とイベントリスナー（v-on）を使用して、input要素に双方向バインディングを作成している。  
やっていることは、インプットイベントにより入力時に入力内容をpタグのtextに反映。そして、inputタグのvalue属性にもその値が反映されていると思われる。

```html
<input v-model="text">
```
上記処理が、双方向バインディングにの省略形。

## 条件付きレンダリング
```html
<h1 v-if="condition">Vue is awesome!</h1>
```
conditionの値がtrueの場合、このh1要素がレンダリングされる。


# 参考
[Vue3 公式ドキュメント](https://ja.vuejs.org/guide/introduction)