<!DOCTYPE html>
<html lang="ja">
<head>
  <meta charset="utf-8">
  <title>WordPressチュートリアル</title>
  <meta name="description" content="WordPressチュートリアル">
  <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-9ndCyUaIbzAi2FUVXJi0CjmCapSmO7SnpJef0486qhLnuZ2cdeRhO02iuK6FUUVM" crossorigin="anonymous">
  <link rel="stylesheet" href="<?= get_stylesheet_uri(); ?>">
  <?php wp_head(); ?>
</head>
<body>
  <header>
    <nav class="navbar navbar-expand-lg bg-dark border-bottom border-bottom-dark" data-bs-theme="dark">
      <div class="container-fluid">
        <a class="navbar-brand" href="/">WordPressチュートリアル</a>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNav">
          <ul class="navbar-nav">
            <li class="nav-item">
              <a class="nav-link" aria-current="page" href="/">トップ</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">投稿一覧</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  </header>
