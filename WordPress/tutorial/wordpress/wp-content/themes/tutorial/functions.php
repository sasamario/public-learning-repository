<?php
/**
 * サムネイルの有効化
 */
add_action('init', 'enable_thumbnails');
function enable_thumbnails() {
  add_theme_support('post-thumbnails');
}

?>