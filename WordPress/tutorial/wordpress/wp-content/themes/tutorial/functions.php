<?php
/**
 * サムネイルの有効化
 */
add_action('init', function() {
  add_theme_support('post-thumbnails');
});

/**
 * 不要なhead項目の削除
 */
// Really Simple Discovery（外部の投稿ツールからWordPressサイトへ記事を投稿するために必要なもの）
remove_action('wp_head', 'rsd_link');

// Windows Live Writer（マイクロソフトのWindows Live Writerからの投稿を受け入れるためのもの）
remove_action('wp_head', 'wlwmanifest_link');

// WordPress の generator メタタグ（WordPressのバージョン情報）
remove_action('wp_head', 'wp_generator');

// 投稿の shortlink（短縮URLの出力）
remove_action('wp_head', 'wp_shortlink_wp_head', 10, 0);

// canonical リンク（ページURLの正規化） 検索エンジンに正規のURLを伝えるためのものらしい
remove_action('wp_head', 'rel_canonical');

// RSSフィードのURL表示無効化
// ※RSSとは、Really Simple Syndicationの略で、Webサイトの更新情報を配信するための仕組み
remove_action('wp_head', 'feed_links', 2);
remove_action('wp_head', 'feed_links_extra', 3);

// Emoji 用スクリプト、スタイル
remove_action('wp_head', 'print_emoji_detection_script', 7);
remove_action('wp_print_styles', 'print_emoji_styles');

// REST API ※WordPress ver4.7以降はREST APIが搭載されている。使わないなら無効化でよい。
remove_action('wp_head', 'rest_output_link_wp_head');

// 外部コンテンツの埋め込みに必要な機能の読み込み
remove_action('wp_head', 'wp_oembed_add_discovery_links');

// リソースの示唆
remove_action('wp_head', 'wp_resource_hints', 2);

// 検索ロボット向けの設定
remove_filter('wp_robots', 'wp_robots_noindex'); //ページのインデックス指示を制御するためのフィルターwp_robots_noindexを無効化
remove_filter('wp_robots', 'wp_robots_noindex_embeds'); //埋め込みコンテンツ（embeds）のインデックス指示を制御するためのフィルターwp_robots_noindex_embedsを無効化
remove_filter('wp_robots', 'wp_robots_noindex_search'); //検索結果ページのインデックス指示を制御するためのフィルターwp_robots_noindex_searchを無効化
remove_action('wp_robots', 'wp_robots_max_image_preview_large'); //画像のプレビューサイズ指示を制御するためのフィルターwp_robots_max_image_preview_largeを無効化

// 新エディタ（Gutenberg）
// ただし、エディタの機能（段落、一覧等のスタイル）が機能しなくなるため注意！！！
function remove_global_styles() {
  wp_dequeue_style('wp-block-library'); //ブロックエディタを使って入力されたコンテンツを出力するときに必要なCSS
  wp_dequeue_style('classic-theme-styles');
  wp_dequeue_style('global-styles');
}
add_action('wp_enqueue_scripts', 'remove_global_styles');

?>