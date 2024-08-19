# 概要
チュートリアルに取り組む際の実装メモなどを残す。  

## 今回作成するもの
今回は以下の3つのページを作成する。  
- トップページ
- 投稿一覧ページ
- 投稿詳細ページ

また、ヘッダーやフッターについては共通で使用するため作成する。  

### トップページ
最新の投稿6つが投稿日の新しい順で表示される。  
表示されている投稿を押下すると、投稿詳細ページに遷移する。  
投稿については管理側で行う。  

■表示内容
- 投稿画像
- タイトル
- 投稿日

投稿画像については、最初はACFで用意したカスタムフィールドで実装していたが学習も兼ねてWordPressの既存のサムネイルで対応してみる。

### 投稿一覧ページ
トップページとほぼ同じで投稿が投稿日の新しい順で表示される。  
表示されている投稿を押下すると、投稿詳細ページに遷移する。  

■表示内容
- 投稿画像
- タイトル
- 投稿日

### 投稿詳細ページ
投稿の詳細ページ。以下の内容が表示される。　　

■表示内容
- 投稿画像
- タイトル
- 本文
- カテゴリ
- 投稿日


***
# 実装
オリジナルテーマを作成する場合は、以下のディレクトリにオリジナルテーマ用のディレクトリを用意し必要なファイルを作成すればよい。  
wordpress/wp-content/themes

今回は、tutorialというディレクトリを作成する。  
また、tutorialディレクトリに以下のファイルを作成する。

- index.php　※WordPressのテーマでは必須らしい
- header.php
- footer.php
- front-page.php　トップページ用
- singular.php　投稿詳細ページ用
- archive.php　投稿一覧ページ
- functions.php
- style.css　※WordPressのテーマでは必須らしい

## スタイルについて
スタイルはBootstrapを活用して最低限のデザインとする（ここでの学習の目的とは異なるため）  
BootstrapについてはCDNを活用する。  
[Bootstrap5.3](https://getbootstrap.jp/docs/5.3/getting-started/introduction/)

あとはオリジナルテーマ用のcssも使う。  
オリジナルテーマのstyle.cssのパスは、get_stylesheet_uri()で取得することができる。  

### Bootstrap参考
- [Navbar](https://getbootstrap.jp/docs/5.3/components/navbar/)
- [Grid](https://getbootstrap.jp/docs/5.3/layout/grid/)
- [Card](https://getbootstrap.jp/docs/5.3/components/card/)