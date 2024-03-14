$(function() {
  // ドロップダウンの設定を関数でまとめる
  function mediaQueriesWin() {
    var width = $(window).width();
    if(width <= 768) { //横幅が768px以下の場合
      $(".has-child>a").off('click'); //has-childクラスがついたaタグのonイベントを複数登録を避けるためoffにして一旦初期状態へ

      $(".has-child>a").on('click', function() { //has-childクラスがついたaタグをクリックしたら
        var parentElem = $(this).parent(); //aタグから見た親要素の<li>を取得し
        $(parentElem).toggleClass('active');
        $(parentElem).children('ul').stop().slideToggle(500); //liの子要素のスライドを開閉させる※数字が大きくなるほどゆっくり開く
        return false; //リンクの無効化
      });
    } else { //横幅が768px以上の場合
      $(".has-child>a").off('click'); //has-childクラスがついたaタグのonイベントをoffに
      $(".has-child").remuveClass('active');
      $('.haschild').children('ul').css("display", "");
    }
  }
// ページがリサイズされたら動かしたい場合の記述
$(window).resize(function() {
  mediaQueriesWin();/* ドロップダウンの関数を呼ぶ*/
});

// ページが読み込まれたらすぐに動かしたい場合の記述
$(window).on('load',function(){
  mediaQueriesWin();/* ドロップダウンの関数を呼ぶ*/
});

});
