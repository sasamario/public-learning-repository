# node.js の require と import について調べなおす
簡単にいうと、nodeモジュールの読み込み形式の違い。

- requireは 「CommonJS」 形式によるモジュールの読み込み方法。
- importは 「ECMAScript」 形式によるモジュールの読み込み方法。

**require文はNode.jsの環境で動作する書き方。つまり、ブラウザ側ではrequire文は使うことができない。**  
ただし、webpackなどのモジュールバンドルツールを利用することでどの環境でも動作するようにすることができる。  


### 参考
- [node.js の require と import について調べなおす](https://qiita.com/TakeshiNickOsanai/items/7899a60044d71aa8d899)
- [jsのimportとrequireの違い](https://qiita.com/minato-naka/items/39ecc285d1e37226a283)


# requireの使い分け
参考：[Node.js が require() で検索するパスのまとめ](https://maku77.github.io/nodejs/module/require.html)

```js
// コアモジュール、あるいは node_modules にインストールしたパッケージのロード
const crypto = require('crypto');

// ローカルモジュールのロード
const myLocalModule = require('./path/to/myLocalModule');

// JSON ファイルのロード
const jsonData = require('./path/to/data.json');
```

まとめると
- 組み込みモジュールや外部パッケージを使う場合は名前を指定
	- 優先順位は以下の通りらしい
		1. コアモジュール
		2. 同じディレクトリの`node_modules`
		3. 上位ディレクトリの`node_modules`
		4. 上記見つからなければ、not foundエラー
- 自分で作成したローカルモジュールやJSONファイルは`./`で始まるパスで指定


