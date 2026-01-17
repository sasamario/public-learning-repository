# 導入

■ インストール

```bash
composer require barryvdh/laravel-debugbar --dev
```

■ 有効化  
デフォルトでは`.env`の「APP_DEBUG=true」の場合に有効化される。  
`config/debugbar.php`でも設定できる。debugbar.php の生成は、以下コマンドでできる。

```bash
php artisan vendor:publish --provider="Barryvdh\Debugbar\ServiceProvider"
```

※debugbar.php なしで.env だけでも同じ名称で設定を追加すればできると思ったが試してみたところうまくいかず...。もしかしたら細かい設定をするなら場合によっては必要かも...？

■ 参考

- [インストール](https://laraveldebugbar.com/installation/)

# 各種機能の設定

`config/debugbar.php`で定義することもできるが、使いたくない場合`.env`で設定も可能  
以下公式の`debugbar.php`を参考に`.env`に設定を追加すればよい。※導入した debagbar のバージョンのブランチで確認すること（Tag で切り替えできる。バージョンによって内容が違うので）
https://github.com/fruitcake/laravel-debugbar/blob/master/config/debugbar.php

# Debugbar 各種機能

## Messages

Debugbar クラスや、debug()などの出力内容を確認することができる。Log クラスの出力内容も確認できる。  
オブジェクトなども確認できる。軽く確認するくらいなら、debug()を使うのが良さそう。

■ 使い方

```php
// debug()
debug('debug()のログ');
debug(['hoge1' => 'fuga1', 'hoge2' => 'fuga2']);

// Debugbar
Debugbar::info('Debugbar::info()のログ');
Debugbar::info(['hoge1' => 'fuga1', 'hoge2' => 'fuga2']);
Debugbar::error('Debugbar::error()のログ');
Debugbar::warning('Debugbar::warning()のログ');

// Log
Log::error('Log::error()のログ');
```

上記のような処理を入れることで Messages に表示される。

- どのファイルの何行目のログが確認できる
- 「LOG」「NONE」「WARNING」「ERROR」「INFO」「DEBUG」等のタグで表示するログの種類を絞り込むことができる
- キーワード検索できる

■ 参考

- [Collectors Messages](https://laraveldebugbar.com/collectors/#messages)

## Timeline

1 リクエスト内で「どの処理に」「どれだけ時間がかかったか」を可視化する機能。  
時系列で上から順に表示され、各処理にどのくらい時間がかかったかを確認できる。

■ 使い方

```php
Debugbar::startMeasure('識別子', 'debug()のログ計測開始');
// 計測したい処理
Debugbar::stopMeasure('識別子', 'debug()のログ計測終了');
```

■ ポイント

- 計測したい処理を startMeasure()と stopMeasure()で挟むことで計測できる
- 第一引数は識別子で start と stop で同じ値を使う必要がある
- 第二引数は説明文でなんでも OK

■ 参考

- [【保存版】Laravel Debugbar で開発効率が 3 倍になる！完全導入・活用ガイド 2024](https://dexall.co.jp/articles/?p=2545#i-12)

## Views

そのリクエストでレンダリングされた Blade ビューを可視化する機能。以下の情報を確認することができる。

- 使用されたテンプレートとソースの表示
- フォルダを除外する
- ★ オプションでデータを表示することができる 便利！！！
  - blade ファイル名をクリックすることで表示される
  - debugbar.php の options.views.data を true にする必要あり。バージョンによっては debugbar.php が必要
  - リソースを大量に消費する可能性があるらしい
- オプションでタイムラインに追加
  - debugbar.php の options.views.timeline を true にする必要あり。バージョンによっては debugbar.php が必要

■ 参考

- [Collectors Views](https://laraveldebugbar.com/collectors/#views)
- [laravel-debugbar/config/debugbar.php v3.14.10](https://github.com/fruitcake/laravel-debugbar/blob/v3.14.10/config/debugbar.php)
