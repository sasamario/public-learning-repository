# 概要
WordPressの学習で調べたことをまとめる。  

# 調べたこと
## 記事表示の基本パターン
```php
// 一覧ページ
<?php if (have_posts()): ?>
<?php while (have_posts()): the_post(); ?>
  // ここで、ループさせ投稿データを出力する
<?php endwhile; ?>
<?php endif; ?>
```

```php
// 単体ページ
<?php if (have_posts()): ?>
  // ここで投稿データを出力する
<?php endif; ?>
```
基本的な作りは同じで、投稿データの存在チェックを行いある場合出力する。  
一覧ページの場合、ループで順番にデータを表示している。その際、the_post()で現在のループで表示する投稿データの情報を取得し表示できるようにしている。 
the_post()は取得したデータを削除していくため、while(have_posts())が最終的にfalseとなりループが終了するということらしい。   

## 投稿データの表示関数と取得関数
| 出力したい内容 | 表示関数 | 取得関数 |
| ---- | ---- | ---- |
| ID | the_ID | get_the_ID |
| GUID | the_guid |
| パーマリンク(URL) |	the_permalink |	get_the_permalink |
| タイトル | the_title | get_the_title |
| 要約 | the_excerpt | get_the_excerpt |
| 本文 |	the_content | get_the_content |
| 投稿日 |	the_date | get_the_date |
| 投稿時刻 |	the_time | get_the_time |
| 更新日 |	the_modified_date | get_the_modified_date |
| 投稿者名 |	the_author | get_the_author |
| カテゴリ名(リンク付き) | the_category | get_the_category |
| アイキャッチ画像 |	the_post_thumbnail | get_the_post_thumbnail |

引用：[記事の表示を行うためのループ制御の基本～have_posts、the_postと表示関数を学ぼう～](https://plugmize.jp/archives/blog/20170411_haveposts_getpost.html)

表示関数はPHPでいう、echoまでを担当してくれている。また、その際フィルターも通してくれるみたい。  
そのため、出力するだけなら表示関数を使用した方が良さそう？



# 参考サイト
## Advanced Custom Fields（ACF）関連
- [【2023年最新版】Advanced Custom Fieldsの基本的な使い方を紹介します](https://usagicode.com/wordpress/how-to-use-advanced-custom-fields/)
    - 導入方法、基本的な使い方について説明がありわかりやすい
- [WordPressでSVG画像ファイルを追加する方法（3つの簡単な解決策）](https://www.wpbeginner.com/ja/wp-tutorials/how-to-add-svg-in-wordpress/)
    - ACFで画像のフィールドを用意することはできるが、デフォルトはSVGファイルはアップロードできない。SVG supportという別プラグインで対応可能。

## WordPress関連
- ★[記事の表示を行うためのループ制御の基本～have_posts、the_postと表示関数を学ぼう～](https://plugmize.jp/archives/blog/20170411_haveposts_getpost.html)
  - 単体ページの場合はループは不要！
- [個別ページ（記事ページ）へのURLを取得・出力する](https://thewppress.com/libraries/get-the-permalink/)
- WP_Query
  - [いっつも忘れるWP_Queryの使用方法とパラメータ一覧。がっつり整理してみた](https://wemo.tech/160)