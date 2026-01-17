# 導入

■ インストール

```bash
composer require barryvdh/laravel-debugbar --dev
```

■ 有効化  
デフォルトでは`.env`の「APP_DEBUG=true」の場合に有効化される。  
`config/debugbar.php`でも設定できる。

■ 参考

- [インストール](https://laraveldebugbar.com/installation/)

# 使用法

## Debugbar 各種機能

### Messages

Debugbar クラスや、debug()などの出力内容を確認することができる。  
オブジェクトなども確認できる。軽く確認するくらいなら、debug()を使うのが良さそう。  
Log クラスの出力内容も確認できる。

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

■ ポイント

- どのファイルの何行目のログが確認できる
- 「LOG」「NONE」「WARNING」「ERROR」「INFO」「DEBUG」等のタグで表示するログの種類を絞り込むことができる
- キーワード検索できる

■ 参考

- [Collectors Messages](https://laraveldebugbar.com/collectors/#messages)
