<?php
  get_header();
?>

<div class="container my-5">
  <?php if (have_posts()): ?>
  <?php while (have_posts()): the_post(); ?>
    <h2 class="border-bottom border-3"><?= get_the_title(); ?></h2>
    <div class="content-header">
      <p class="text-end">投稿日：<?= get_the_date('Y/m/d H:i') ?></p>
    </div>
    <div class="content-body">
      <?= get_the_content(); ?>
    </div>
  <?php endwhile; ?>
  <?php endif; ?>
</div>

<?php
  get_footer();