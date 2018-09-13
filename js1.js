$(function(){
  // 「#送信ボタン」へカーソルを合わせた時の動作
  $('.contact-submit').hover(
    function(){
      $('.hover-text').fadeIn();
  },
    function(){
      $('.hover-text').fadeOut();
    })

  //復帰ボタンの動作
  //押すとpreテキストが復帰する
  $('#fadeIn-text').click(function(){
  $('.pre-comment').fadeIn();
  });
  $('#fadeOut-text').click(function(){
  $('.pre-comment').fadeOut();
  });

});

