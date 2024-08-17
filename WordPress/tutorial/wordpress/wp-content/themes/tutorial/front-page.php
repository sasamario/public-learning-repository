<?php
  get_header();

  $wp_query = new WP_Query([
    'post_type' => 'post', // 投稿タイプ
    'posts_per_page' => 6, // 表示する投稿数
    'order' => 'DESC',
    'orderby' => 'date',
  ]);
?>

<div class="container my-5">
  <div class="row row-cols-3">
    <?php if ($wp_query->have_posts()): ?>
    <?php while ($wp_query->have_posts()): $wp_query->the_post(); ?>
    <div class="col mb-3">
      <div class="card" style="width: 18rem;">
        <img src="<?= get_field('image') ?>" class="card-img-top" alt="...">
        <div class="card-body">
          <h5 class="card-title"><?= get_the_title() ?></h5>
          <a href="<?= get_the_permalink() ?>" class="card-link">投稿詳細へ</a>
        </div>
      </div>
    </div>
    <?php endwhile; ?>
    <?php endif; ?>
  </div>
</div>

<?php
  get_footer();