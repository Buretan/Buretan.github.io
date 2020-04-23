////////////////////////////////
// ヘッダーの表示切り替え
////////////////////////////////
$(function () {
  $(window).on("scroll", function () {
    if ($(this).scrollTop() > 537) {
      // if ($(this).scrollTop() > $('.main2').offset().top) {
      $(".header").slideDown(500);
    } else {
      $(".header").slideUp(500);
    }
  });
});

////////////////////////////////
//会員パス設定の表示切り替え
////////////////////////////////
function onRadioButtonChange()  {
  radiobtn1 = document.getElementById("r1");
  radiobtn2 = document.getElementById("r2");
  target = document.getElementById("s1");

  if (radiobtn1.checked == true) {
    target.style.display = "none";
  }
  else if (radiobtn2.checked == true) {
    target.style.display = "block";
  }
}
