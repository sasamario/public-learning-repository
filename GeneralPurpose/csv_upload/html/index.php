<?php
?>

<!DOCTYPE html>
<html lang="ja">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>CSVアップロード汎用ロジック</title>
</head>
<body>
	<form action="upload.php" method="POST" enctype="multipart/form-data">
		<input name="file" type="file" />
		<input type="submit" value="送信" />
	</form>
</body>
</html>
