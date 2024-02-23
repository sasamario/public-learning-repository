<?php

try {
	if (is_uploaded_file($_FILES["file"]["tmp_name"])) {
		$file_tmp_name = $_FILES["file"]["tmp_name"];
		$file_name = $_FILES["file"]["name"];
	
		// 拡張子のチェック
		if (pathinfo($file_name, PATHINFO_EXTENSION) != 'csv') {
			throw new Exception('CSVファイルのみ対応');
		}

		$file_data = file_get_contents($file_tmp_name);
		$encoding  = mb_detect_encoding($file_data, "UTF-8, SJIS-win", true);

		// Shift-JISの場合、文字コードを変換する
		if ($encoding === "SJIS-win") {
			$file_data = mb_convert_encoding($file_data, 'UTF-8', 'SJIS-win');

			// 変換したデータを一時ファイルに書き込み、ポインタを先頭にする
			$fp = tmpfile();
			fwrite($fp, $file_data);
			rewind($fp);
		} elseif ($encoding === "UTF-8") {
			$fp = fopen($file_tmp_name, "r");
		} else {
			throw new Exception('文字コードはUTF-8またはShitf-JISのみ対応');
		}

		//配列に変換する
		while (($data = fgetcsv($fp, 0, ",")) !== false) {
			$result[] = $data;
		}
		fclose($fp);
		//ファイルの削除
		unlink($file_tmp_name);
		var_dump($result);

	}
} catch (Exception $e) {
	echo $e->getMessage();
	exit;
}
