<?php

class Supplement {
  private $year_5ago;
  private $word1;
  private $word;
  
  public function __construct() {
    $this->year_5ago = date('Y', strtotime('-5 year'));
    $this->word1 = "{$this->year_5ago}年ではありません。";
    $this->word = "今年は{$this->word1}<br>";
  }

  public function year_word() {
    echo $this->word;

    $year = date('Y');
    $word2 = "{$year}年です。";
    echo str_replace($this->word1, $word2, $this->word);
  }
}
$str = new Supplement();