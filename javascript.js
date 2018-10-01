    $(function () {
      // scrollイベントを取得した際の処理を定義
      $(window).on("scroll", function () {
        // scrollTop()が0より大きい場合
        if ($(this).scrollTop() > $('.main2').offset().top) {
          // ヘッダーバーをslideDownして表示
          $(".header").slideDown();
        } else {
          // ヘッダーバーをslideUpして非表示
          $(".header").slideUp();
        }
      });
    });

      //ラジオボタンのオンオフ検出によるcss操作
      //htmlのinputタグ内にonchange="onRadioButtonChange();"をいれないと機能しない
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
