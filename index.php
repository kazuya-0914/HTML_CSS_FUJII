<?php
require_once 'supplement.php';
date_default_timezone_set('Asia/Tokyo');

// クラスの継承
class PhpCode extends Supplement {
  public const STR = 'Appleが5個あります。Orangeは1個しかありません。';
  public const WORD = '。$';

  public function pre(string $str, string $word) {
    echo "<div class=\"mb-4 text-decoration-underline\">【検索対象】{$str}</div>";
    if(preg_match("/{$word}/", $str, $arr)) {
      $result = implode($arr);
      echo "検索条件「{$word}」は検索対象の「{$result}」で一致しました";
    } else {
      echo "検索条件「{$word}」は検索対象と一致しませんでした";
    }
  }
}

// 変数定義
$php_code = new PhpCode();
$str = PhpCode::STR;
$word = PhpCode::WORD;
$root_dir = __DIR__; // マジック定数

?>
<!DOCTYPE html>
<html lang="ja">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>PHPの基礎を学ぼう</title>
  <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC" crossorigin="anonymous">
</head>
<body>
  <div class="container m-auto">
    <header class="px-4 pt-4">
      <a href="<?php $root_dir; ?>">
        <h3 class="mb-4 text-decoration-underline">PHPの基礎を学ぼう</h3>
      </a>
    </header>

    <main class="p-4 mb-4 border border-primary">
      <h4 class="mb-4 text-decoration-underline">教材コード</h4>
      <?php $php_code->pre($str, $word); ?>
    </main>

    <main class="p-4 mb-4 border border-primary">
      <h4 class="mb-4 text-decoration-underline">補足説明</h4>
      <?php $php_code->year_word(); ?>
    </main>

    <footer class="text-center">
      <a href="<?php $root_dir; ?>" class="btn btn-success">リセット</a>
    </footer>
  </div>
</body>
</html>